import React from 'react'
import {Card, Image} from 'semantic-ui-react'

function UserProfile({ currentUser}) {

    // console.log(currentUser)

    const{firstname, 
        lastname, 
        gender, 
        age, 
        email, 
        username, 
        city, 
        state, 
        height, 
        weight, 
        fitness_level, 
        goal1, 
        goal2, 
        bio, 
        profile_image
    } = currentUser

  return (
    <div className='user-profile'>
        <Card>
            <Image src={profile_image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{firstname} {lastname}</Card.Header>
                {/* Add to seed/schema */}
                <Card.Meta>
                    <span>Joined: July 4, 2022</span><br/> 
                    <span>Age: {age} years old</span><br/>
                    <span>Gender: {gender} </span><br/>
                    <span>Location: {city}, {state} </span>
                </Card.Meta>
                <Card.Description>
                    <span>Bio: {bio}</span><hr/>
                    <span>Goal #1: {goal1}</span><hr/>
                    <span>Goal #2: {goal2}</span><br/>
                </Card.Description>
            </Card.Content>
        </Card>
    
    </div>
  )
}

export default UserProfile
