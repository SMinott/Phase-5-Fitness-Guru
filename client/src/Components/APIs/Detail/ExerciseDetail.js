import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { fetchData, options } from '../../../Utils/FetchData'
import {Card} from 'semantic-ui-react'

import Detail from './Detail'
import ExerciseVideos from './ExerciseVideos'
import SimilarExercises from './SimilarExercises'

function ExerciseDetail() {
  return (
    <div>
      <Detail />
      <ExerciseVideos />
      <SimilarExercises />
    </div>
  )
}

export default ExerciseDetail
