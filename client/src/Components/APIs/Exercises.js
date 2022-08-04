import React, {useEffect, useState} from 'react'
import { Icon, Pagination, Label } from 'semantic-ui-react'
import { fetchData, options } from '../../Utils/FetchData'
import ExerciseCard from './ExerciseCard'

function Exercises({exercises, setExercises, bodyPart}) {
  // console.log(exercises)
  
  // const [currentPage, setCurrentPage] = useState(1)
  // const exercisePerPage = 9
  // const paginate = (e) => {
  //   setCurrentPage(e);
  //   window.scrollTo({top: 1800, behavior:'smooth'})
  // }
  
  return (
    <div className='exercises'>
    
      <Label circular color='blue' size='huge' >Results:</Label>

        {exercises.map((exercise, index) => (
          // console.log(exercise)
          // <p>{exercise.name}</p>
          <ExerciseCard key={index} exercise={exercise} />
        ))}
    

      <div>
        {exercises.length > 9 && (
          <Pagination
          // count={Math.ceil(exercises.length/exercisePerPage) }
          // page={currentPage}
          // onChange={(e) => paginate(e)}
          defaultActivePage={1}
          ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
          firstItem={{ content: <Icon name='angle double left' />, icon: true }}
          lastItem={{ content: <Icon name='angle double right' />, icon: true }}
          prevItem={{ content: <Icon name='angle left' />, icon: true }}
          nextItem={{ content: <Icon name='angle right' />, icon: true }}
          totalPages={10}
        />)} 
      </div>

    </div>
  )
}

export default Exercises
