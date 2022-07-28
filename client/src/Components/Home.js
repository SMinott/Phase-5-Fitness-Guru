import React, {useState, useEffect} from 'react'

import AppAuthenticated from '../AppAuthenticated';
import AppUnauthenticated from '../AppUnauthenticated';

function Home() {
    const [currentUser, setCurrentUser] = useState(null)
    const [authChecked, setAuthChecked] = useState(false)
  
    useEffect(() => {
      fetch('/me', 
      //credentials = make sure to send the cookie along with the fetch request
      //Is a part of JS
      {credentials: 'include'})
        .then(res => {
          if (res.ok) {
            res.json().then((user) => {
              setCurrentUser(user)
              setAuthChecked(true)
            })
          } else {
            setAuthChecked(true)
          }
        })
    }, [])
   
    if(!authChecked) { return <div></div>}
  
    return (
      <div>
        {/* <h1> Should see either Auth or Unauth</h1> */}
  
        {currentUser ? (
            <AppAuthenticated
              setCurrentUser={setCurrentUser}
              currentUser={currentUser}
            />
          ) : (
            <AppUnauthenticated
              setCurrentUser={setCurrentUser}
            />
          )
        } 
      </div>   
    );
  }

export default Home
