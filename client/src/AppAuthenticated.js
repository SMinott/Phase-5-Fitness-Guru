import React from 'react'
import { useNavigate} from 'react-router-dom'
import {Button, Icon} from 'semantic-ui-react'

import UserProfile from './Components/UserProfile'


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
      
      <UserProfile
        setCurrentUser={setCurrentUser}
        currentUser={currentUser}
      />

      <div id='logout-button'>
        <Button basic inverted color='red' size='small' onClick={handleLogout}> 
          <Icon name='log out'/>
          Logout
        </Button>
      </div>
        
    </div>
    
  )
}
export default AppAuthenticated
