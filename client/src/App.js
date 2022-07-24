import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom'


import Home from './Components/Home'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer';
import About from './Components/About';
import PlanContainer from './Components/PlanContainer';

function App() {

  return (
    <Router>

      {/* <header className="App-header">
        Fitness Guru
      </header> */}

      <NavBar /> 
      <Routes>
        {/* <Route path='/' element={<Navigate to='/home' />} /> */}
        <Route path='/home/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/plans' element={<PlanContainer />} />
      </Routes>
      <Footer />
    </Router>   
  );
}
export default App;
