import React from 'react'
import { Routes, Route} from 'react-router-dom'

import UserSignUp from './Components/UserSignUp'
import UserLogin from './Components/UserLogin'




function AppUnauthenticated( {setCurrentUser} ) {
  return (
    <Routes>
      
        <Route path='/login' element={< UserLogin setCurrentUser={setCurrentUser} />} />
        <Route path='/signup' element={< UserSignUp setCurrentUser={setCurrentUser} />} />
    </Routes>
    
  )
}

export default AppUnauthenticated
