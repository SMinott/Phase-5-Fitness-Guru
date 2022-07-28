import React from 'react'
import { NavLink} from 'react-router-dom'

function NavBar({logo}){

  return (
    <nav>
      <div class='ui fluid four item menu'>
   
        <span class="header item">
          <h1>Fitness Guru</h1>
          <img class="ui tiny image" src={logo} alt='Logo' />
        </span>

        <span  class='item' >
          <NavLink to='/home'> Home </NavLink>
        </span>
        
        <span  class='item'>
          <NavLink to='/about' > About </NavLink>
        </span>
       
        <span class='item'>
          <NavLink to='/plans' > Plans </NavLink>
        </span>
  
      </div>
    </nav>
    
  )
}

export default NavBar
