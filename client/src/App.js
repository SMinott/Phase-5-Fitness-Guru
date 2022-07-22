import React, {useState, useEffect} from 'react'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'


import AppAuthenticated from './AppAuthenticated';
import AppUnauthenticated from './AppUnauthenticated';
import Footer from './Components/Footer';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)

  useEffect(() => {
    fetch('/me', 
    //credentials = make sure to send the cookie along with the fetch request
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
    <Router>
      <header className="App-header">
        Fitness Guru
      </header>

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
      
      {/* <AppUnauthenticated />
      <AppAuthenticated /> */}
       <Footer />
    </Router>   
  );
}

export default App;
