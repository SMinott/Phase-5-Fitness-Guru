import React from 'react'
import { useNavigate} from 'react-router-dom'
import {Button, Segment} from 'semantic-ui-react'

function AppAuthenticated( {currentUser, setCurrentUser} ) {
  const navigate = useNavigate()

  const handleLogout = () => {
    fetch(`/logout`, {
      method: 'DELETE',
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          setCurrentUser(null)
          navigate('/')
        }
      })
  }

  return (
    <div className='appAuth'>
      <div>
        <h1>AppAuthenticated: Need to build this out</h1>
          <p>I want user to be able to see (1)their plan detail, (2)workout videos, (3) promotions, etc</p>


          <Segment>
            <Button negative size='small' onClick={handleLogout}> 
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
