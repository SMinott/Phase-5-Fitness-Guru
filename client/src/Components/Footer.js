import React from 'react'
import {Container, Icon, Button} from 'semantic-ui-react'


function Footer({logo}) {
  return (
  <Container fluid textAlign='center' className='footer'>
    
    {/* <img src={logo} alt="logo" /> */}
    <p>Made with ❤️ by Susan M.</p>
    {/* <p className='copy-right'>&#169; 2022 GURU FITNESS LLC ALL RIGHT RESERVED</p> */}
    <Icon name='copyright'/> 2022 GURU FITNESS LLC ALL RIGHT RESERVED
    <br />
    {/* <Icon name='twitter' link bordered circular inverted color='black'/>
    <Icon name='facebook' link bordered circular inverted color='black'/>
    <Icon name='instagram' link bordered circular inverted color='black'/> */}
    <Button circular color='facebook' icon='facebook' size='tiny' />
    <Button circular color='twitter' icon='twitter' size='tiny' />
    <Button circular color='twitter' icon='instagram' size='tiny' />
    {/* <Button circular color='linkedin' icon='linkedin' />
    <Button circular color='google plus' icon='google plus' /> */}
    
  </Container>
  )
}

export default Footer
