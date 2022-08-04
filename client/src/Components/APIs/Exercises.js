import React, {useEffect, useState} from 'react'
import { Icon, Pagination, Label } from 'semantic-ui-react'
import { fetchData, options } from '../../Utils/FetchData'

function Exercises({exercises, setExercises, bodyPart}) {
  console.log(exercises)
  return (
    <div className='exercises'>
      <h1>EXERCISES COMP</h1>
      <Label circular color='red' size='big' >Showing Results</Label>
      <div id='exercise-list'>
        {exercises.map((exercise, index) => (
          <p>{exercise.name}</p>
        )
    )}

      </div>
      <Pagination
        defaultActivePage={5}
        ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
        firstItem={{ content: <Icon name='angle double left' />, icon: true }}
        lastItem={{ content: <Icon name='angle double right' />, icon: true }}
        prevItem={{ content: <Icon name='angle left' />, icon: true }}
        nextItem={{ content: <Icon name='angle right' />, icon: true }}
        totalPages={10}
    />
    </div>
  )
}

export default Exercises
