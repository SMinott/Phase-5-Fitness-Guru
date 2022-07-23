import React, {useState} from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
// import {Button, Segment} from 'semantic-ui-react'

import About from './About'
import PlanContainer from './PlanContainer'

function NavBar({ setCurrentUser, currentUser}) {

//   fetch('/me', {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(body)
//   })
//     .then(res => res.json())
//     .then(user => {
//       console.log(user);
//       setCurrentUser(user)
//     })
// }

  return (
    <nav>
      <div>

        <NavLink to='/about' > About </NavLink>
          <br/>
        <NavLink to='/plans' > Plans </NavLink>   

        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/plans' element={<PlanContainer />} />
          {/* <Route path='/plans' element={< Navigate to='/' /> } /> */}
         </Routes>         

        {/* <div>
          <Segment>
            <Button inverted color='red' size='big'> 
            Logout
            </Button>
          </Segment>
        </div> */}

      </div>
    </nav>
    
  )
}

export default NavBar
