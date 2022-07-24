import React from 'react'
// import { useNavigate} from 'react-router-dom'
import {Button, Segment} from 'semantic-ui-react'

function AppAuthenticated( {currentUser, setCurrentUser} ) {
  // const navigate = useNavigate()

  //handleLogout & fetch moved from NavBar
  //   fetch('/me', {
  //   method: 'PATCH',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify()
  // })
  //   .then(res => res.json())
  //   .then(user => {
  //     console.log(user);
  //     setCurrentUser(user)
  //   })

  // const handleLogout = () => {
  //   fetch(`/logout`, {
  //     method: 'DELETE',
  //     credentials: 'include'
  //   })
  //     .then(res => {
  //       if (res.ok) {
  //         setCurrentUser(null)
  //         navigate('/')
  //       }
  //     })
  // }

  return (
    <div>
      <div>
        <h1>AppAuthenticated</h1>
          <Segment>
            <Button inverted color='red' size='big'> 
            Logout
            </Button>
          </Segment>
        </div>
 {/* This NavBar component should probably be UserLogout */}
        {/* <NavBar 
        setCurrentUser={setCurrentUser} c
        urrentUser={currentUser} 
        handleLogout={handleLogout} 
        /> */}
        
    </div>
    
  )
}
export default AppAuthenticated
