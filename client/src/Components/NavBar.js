import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/images/Logo.png';


// import About from './About'
// import PlanContainer from './PlanContainer'
// import Home from './Home';

function NavBar(){

  return (
    // <nav>
      <div class='ui fluid four item menu'>

        <div class="header item">
          <h1>Fitness Guru</h1>
          <img class="ui tiny image" src={Logo} alt='Logo' />
        </div>

        <div  class='item' >
          <NavLink to='/'> Home </NavLink>
        </div>
        
        <div  class='item'>
          <NavLink to='/about' > About </NavLink>
        </div>
       
        <div class='item'>
          <NavLink to='/plans' > Plans </NavLink>
        </div>

      </div>
    // </nav>
    
  )
}

export default NavBar
