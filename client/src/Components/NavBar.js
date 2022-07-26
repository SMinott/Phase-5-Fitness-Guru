import React from 'react'
import { NavLink} from 'react-router-dom'

function NavBar({logo}){

  return (
    <nav>
      <div class='ui fluid four item menu'>
   
        <div class="header item">
          <h1>Fitness Guru</h1>
          <img class="ui tiny image" src={logo} alt='Logo' />
        </div>

        <div  class='item' >
          <NavLink to='/home'> Home </NavLink>
        </div>
        
        <div  class='item'>
          <NavLink to='/about' > About </NavLink>
        </div>
       
        <div class='item'>
          <NavLink to='/plans' > Plans </NavLink>
        </div>
  
      </div>
    </nav>
    
  )
}

export default NavBar
