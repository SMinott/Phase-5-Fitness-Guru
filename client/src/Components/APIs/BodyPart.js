import React from 'react'
import {Card, Image, Button} from 'semantic-ui-react'
// import Logo from '../assets/images/Logo3.webp'

function BodyPart({item, bodyPart, setBodyPart}) {
  return (
    <div className='body-part' >

      <Card 
        link 
        onClick={() => { setBodyPart(item);
          window.scrollTo({top: 1800, left:100, behavior:'smooth'})
        }}
      >
          {/* <Image src='https://cdn.pixabay.com/photo/2013/04/01/21/29/exercises-99097__340.png'></Image> */}
          <Image src='https://cdn.pixabay.com/photo/2022/05/12/14/32/gym-7191694__340.png' size='small' ></Image>
          <Card.Header>
            <Card.Header>
              {item}
            </Card.Header>
          </Card.Header>
        </Card>
        
    </div>
  )
}

export default BodyPart
