import React, {useState} from 'react'
// import AppCss from '../App.css'
import { NavLink} from 'react-router-dom'

function NavBar({logo}){
  const[showLinks, setShowLinks] = useState(false)

  return (
    <nav>
      <div className='Navbar'>

        <div className='left-side'>
          <img class="ui tiny image" src={logo} alt='Logo' />
          <h2>Fitness Guru</h2>
        </div>

        <div className='right-side'>
          <div className='right-side-links'>
            <a href='/home'> Home </a>
            <a href='/about'> About Us </a>
            <a href='/plans'> Fitness Plans </a>
            <button>Open</button>
          </div>
        </div>
       
      </div>
      {/* <div class='ui fluid five item menu'>
   
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

        <span class='item'>
          <NavLink to='/' > LogIn </NavLink>
        </span>
  
      </div> */}
    </nav>
    
  )
}

export default NavBar
