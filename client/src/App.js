import React, {useState} from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Logo from './assets/images/Logo4.jpeg';

import NavBar from './Components/NavBar'
import About from './Components/About'
import PlanContainer from './Components/PlanContainer'
import Home from './Components/Home';
import Footer from './Components/Footer'
// import UserLogin from './Components/UserLogin';
// import UserSignUp from './Components/UserSignUp';
import ExerciseCard from './Components/APIs/ExerciseCard';
import SearchExercises from './Components/APIs/SearchExercises';
import Exercises from './Components/APIs/Exercises';

function App() {
  const[exercises, setExercises] = useState([])
  const[bodyPart, setBodyPart] = useState('')
  // console.log(bodyPart)

  return (
    <section id='app-container'>

      <div className='app-content'>
      <NavBar logo={Logo} />
      <Router>
          <Routes>
            <Route path='/home/*' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/plans' element={<PlanContainer />} />
            {/* <Route path='/' element={<UserLogin />} /> */}
            {/* <Route path='/signup' element={<UserSignUp />} /> */}
            {/* <Route path='/exercise/:id' element={<ExerciseCard />} /> */}
          </Routes>

          <SearchExercises 
            setExercises={setExercises} 
            bodyPart={bodyPart} 
            setBodyPart={setBodyPart} 
          />
          <Exercises
            exercises={exercises}
            setExercises={setExercises} 
            bodyPart={bodyPart} 
          />
        </Router>
        <Footer /> 
     </div>     
    </section>
  );
}
export default App;
