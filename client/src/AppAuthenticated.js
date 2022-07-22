import React from 'react'
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom'

import About from './Components/About'
import NavBar from './Components/NavBar'
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
    <div>
        <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser} handleLogout={handleLogout} />
        
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/plans' element={<PlanContainer />} />

            
         <Route path='/plans' element={< Navigate to='/' /> } /> 
          {/* <Route path='/plans' element={< Navigate to='/' /> } />  */}
          {/* Double check that the above code is correct for a redirect */}
        </Routes>
    </div>
    
  )
}
export default AppAuthenticated
