import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import UserSignUp from './Components/UserSignUp'
import UserLogin from './Components/UserLogin'



function AppUnauthenticated( {setCurrentUser} ) {
  return (
    <Routes>
        <Route exact path='/' element={< UserLogin setCurrentUser={setCurrentUser} />} />
        <Route path='/signup' element={< UserSignUp setCurrentUser={setCurrentUser} />} />
      
        <Route path='/login' element={< Navigate to='/' /> } /> 
        {/* Double check that the above code is correct for a redirect */}
      
    </Routes>
    
  )
}

export default AppUnauthenticated
