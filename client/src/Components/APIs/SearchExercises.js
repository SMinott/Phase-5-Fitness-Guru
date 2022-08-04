import React, {useState, useEffect} from 'react'
import { Button, Segment, Icon, Header } from 'semantic-ui-react'
import { fetchData, options } from '../../Utils/FetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

export default function SearchExercises( {bodyPart, setBodyPart, setExercises}) {

    const[search, setSearch] = useState('')
    const[bodyParts, setBodyParts] = useState([])

    // const handleSearch = (e) => {
    //     console.log(e)
    //     e.preventDefault()
    //     if (search) {
    //         const exerciseData = await fetchData()
    //     }
    // }

    useEffect(() => {
        const fetchExercisesData = async () => {
            // console.log(fetchExercisesData)
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options);
            setBodyParts(['all', ...bodyPartsData]);
            // console.log(bodyPartsData)
        }

        fetchExercisesData();
    }, [])

    const handleSearch = async(e) => {
        e.preventDefault()
        if (search) {
            const exerciseData = await fetchData
            ('https://exercisedb.p.rapidapi.com/exercises', options)

            console.log(exerciseData)

            const searchedExercises = exerciseData.filter((exercise) =>
                exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            );
    
            console.log(searchedExercises)
            setSearch('')
            setExercises(searchedExercises)
        }
    }

  return (
    <Segment className='search' placeholder>
      {/* <Header> */}
        {/* <Icon name='search'></Icon> */}
      {/* </Header> */}
      <h1>Search for Exercises</h1>
      <input
      type='search'
      name=''
      value={search}
      onChange={(e) => setSearch(e.target.value.toLowerCase())}
      placeholder='Search Exercises'
      />
      <Button color='black' size='small' type="submit" onClick={handleSearch}>
        Search
      </Button>

      <div>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </div>
    </Segment>
  )
}
