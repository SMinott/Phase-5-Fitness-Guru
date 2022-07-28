import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Logo from './assets/images/Logo4.jpeg';
// import Background from './assets/images/background.jpeg'

import NavBar from './Components/NavBar'
import About from './Components/About'
import PlanContainer from './Components/PlanContainer'
import Home from './Components/Home';
import Footer from './Components/Footer'

function App() {

  return (
    <div className='app'>
      <Router>
        <NavBar logo={Logo} /> 
        <Routes>
          <Route path='/home/*' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/plans' element={<PlanContainer />} />
        </Routes>
        <Footer logo={Logo} />
      </Router> 
    </div>  
  );
}
export default App;
