import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import {Button, Segment} from 'semantic-ui-react'

export default function NavBar({ setCurrentUser, currentUser, handleLogout }) {

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
          <hr/>         

        <div>
          <Segment>
            <Button inverted color='red' size='big' > Logout</Button>
          </Segment>
        </div>

      </div>
    </nav>
    
  )
}
