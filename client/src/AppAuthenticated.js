import React from 'react'
import { useNavigate} from 'react-router-dom'
import {Button, Icon} from 'semantic-ui-react'
import PlanContainer from './Components/PlanContainer'

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
       
          <p>I want user to be able to see (1)only their plan detail, (2)workout videos, (3) promotions, etc</p>

            <Button negative size='small' onClick={handleLogout}> 
            <Icon name='logout'/>
            Logout
            </Button>
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
