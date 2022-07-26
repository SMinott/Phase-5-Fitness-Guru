import React from 'react'
import { Divider, Header, Segment } from 'semantic-ui-react'

function About() {
  return (
    <Segment inverted size='large'>
      <Header as='h3' size='huge'>About Us</Header>
      <p>My own experience has taught me that the inability to create or follow a fitness plan is necessarily due to a ack of wanting to. 
        There have been so many times that I made up my mind to follow a specific plan, only to get sidetracked by... well, life. I finally realized 
        that I would have a more positive outcome if I could have a detailed plan created, receive appropriate guidance, and have someone hold 
        me accounatble, it increases the likelihood that I wold stick with a plan long term. With this in mind, I set out to create a service that 
        encompassed all that and more and <strong>Fitness Guru</strong> was bone.
        <br/>
        <br/>
        Established in 2021, <strong>Fitness Guru</strong> aims to take care of the clerical stuff, so you can just focus of achieving your fitness goals.
        <br/>
        <br/>
        Plan options are available to suit the degree of assistance you require on your fitness journey.
        </p>

      <Divider section />

      <Header as='h3' size='huge'>Mission</Header>
      <p>Our aim is to equip our clients with all the necessary tools to achieve their fitness goals. A place where fitness is personalized just for you.</p>

      <Divider section />

      <Header as='h3' size='huge'>Values</Header>
      <p>Inclusivity and positivity.</p>

    </Segment>
    
  )
}

export default About
