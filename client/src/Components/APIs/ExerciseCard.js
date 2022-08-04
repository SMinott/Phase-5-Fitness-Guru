import React from 'react'
import {Link} from 'react-router-dom'
import {Card, Button, Image, Grid, Segment} from 'semantic-ui-react'

function ExerciseCard({exercise}) {

  console.log(exercise)
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>

    <Grid columns='equal' >
      {/* <Grid.Row centered columns={4} divided textAlign='center'> */}
      {/* <Grid.Row verticalAlign='middle' columns={4} centered> */}
      {/* <Grid.Row stackable columns={4}> */}
      {/* <Grid.Row stackable > */}
      <Grid.Column>
        <Segment>
        <span id='exercise-span'> {exercise.name} </span>
        
        <Image src={exercise.gifUrl} alt={exercise.name} loading='lazy' ></Image>
        
        <Button id='exercise-btn' primary size='large' > Body Part: {exercise.bodyPart} </Button>
        <Button id='exercise-btn' secondary size='large' > Target:  {exercise.target} </Button>
        </Segment>
      </Grid.Column>
      {/* </Grid.Row> */}
    </Grid>
    
    </Link>
  )
}

export default ExerciseCard
