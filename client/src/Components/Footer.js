import React from 'react'
import {Container, Icon} from 'semantic-ui-react'


function Footer({logo}) {
  return (

  <Container fluid textAlign='center' className='footer'>
    
    {/* <img src={logo} alt="logo" /> */}
    {/* <p>Made with ❤️ by Susan M.</p> */}
    {/* <p className='copy-right'>&#169; 2022 GURU FITNESS LLC ALL RIGHT RESERVED</p> */}
    <Icon name='copyright' size='small'/> 2022  FITNESS GURU LLC ALL RIGHT RESERVED
    <br />
    <Icon name='twitter' link bordered circular inverted color='black'/>
    <Icon name='facebook' link bordered circular inverted color='black'/>
    <Icon name='instagram' link bordered circular inverted color='black'/>
    {/* Follow Us: 
    <Button circular color='facebook' icon='facebook' size='tiny' />
    <Button circular color='twitter' icon='twitter' size='tiny' />
    <Button circular color='twitter' icon='instagram' size='tiny' /> */}
    
  </Container>
  )
}

export default Footer
