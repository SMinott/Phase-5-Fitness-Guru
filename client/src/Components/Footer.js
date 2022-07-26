import React from 'react'
import {Container, Icon} from 'semantic-ui-react'


function Footer({logo}) {
  return (
  <Container fluid textAlign='center' className='footer'>
    
    <img src={logo} alt="logo" />
    <p>Made with ❤️ by Susan M.</p>
    {/* <p className='copy-right'>&#169; 2022 GURU FITNESS LLC ALL RIGHT RESERVED</p> */}
    <Icon name='copyright'/> 2022 GURU FITNESS LLC ALL RIGHT RESERVED
    <br />
    <Icon name='twitter' link bordered circular inverted color='teal'/>
    <Icon name='facebook' link bordered circular inverted color='teal'/>
    <Icon name='instagram' link bordered circular inverted color='teal'/>
    
  </Container>
  )
}

export default Footer
