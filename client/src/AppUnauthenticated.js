import React from 'react'
import { Routes, Route} from 'react-router-dom'

import UserSignUp from './Components/UserSignUp'
import UserLogin from './Components/UserLogin'





function AppUnauthenticated( {setCurrentUser} ) {
  return (
    <div>
  
      <Routes>
        <Route path='/' element={< UserLogin setCurrentUser={setCurrentUser} />} />
        <Route path='/signup' element={< UserSignUp setCurrentUser={setCurrentUser} />} />
      </Routes>
    </div>
  )
}

export default AppUnauthenticated
