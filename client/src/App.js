import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Logo from './assets/images/Logo4.jpeg';
import Background from './assets/images/background.jpeg'

import NavBar from './Components/NavBar'
import About from './Components/About'
import PlanContainer from './Components/PlanContainer'
import Home from './Components/Home';
import Footer from './Components/Footer'
// import UserLogin from './Components/UserLogin';
// import UserSignUp from './Components/UserSignUp';

function App() {

  return (
    <section id='app-container'>
      

      <div className='app-content'>
      <NavBar logo={Logo} />
        <Router>
          <Routes>
            <Route path='/home/*' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/plans' element={<PlanContainer />} />
            {/* <Route path='/' element={<UserLogin />} />
            <Route path='/signup' element={<UserSignUp />} /> */}
          </Routes>
        </Router>
        <Footer logo={Logo} /> 
     </div>     
    </section>
  );
}
export default App;
