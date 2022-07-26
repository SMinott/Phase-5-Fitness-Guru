import React from 'react'
import { Routes, Route} from 'react-router-dom'

import UserSignUp from './Components/UserSignUp'
import UserLogin from './Components/UserLogin'




function AppUnauthenticated( {setCurrentUser} ) {
  return (
    <Routes>
      
        <Route path='/' element={< UserLogin setCurrentUser={setCurrentUser} />} />
        <Route exact path='/signup' element={< UserSignUp setCurrentUser={setCurrentUser} />} />

    </Routes>
  )
}

export default AppUnauthenticated
