import React from 'react'
import { useNavigate} from 'react-router-dom'
import {Button, Segment} from 'semantic-ui-react'

// import About from './Components/About'
// import NavBar from './Components/NavBar'
// import PlanContainer from './Components/PlanContainer'

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
    <div>
      <div>
          <Segment>
            <Button inverted color='red' size='big'> 
            Logout
            </Button>
          </Segment>
        </div>

        {/* <NavBar 
        setCurrentUser={setCurrentUser} c
        urrentUser={currentUser} 
        handleLogout={handleLogout} 
        /> */}
        
        {/* <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/plans' element={<PlanContainer />} />
         <Route path='/plans' element={< Navigate to='/' /> } /> 
        </Routes> */}
    </div>
    
  )
}
export default AppAuthenticated
