import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

function UserLogin({ setCurrentUser }) {

  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setCurrentUser(user)
            navigate('/plans')
          })
        } else {
          res.json().then(errors => {
            console.error(errors)
          })
        }
      })
  }

  return (
   
      <Grid textAlign='left' style={{ height: '60vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 350 }}>
          

          <Form size='large' onSubmit={handleSubmit} >

            <Segment stacked>
              
              <Header as='h2' textAlign='center' dividing>
                Member LogIn
              </Header>

              <Form.Input fluid icon='user' iconPosition='left' placeholder='Username'
                type='text'
                name='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password'
                type='password'
                name='username'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete='on'
              />

              <Button color='black' fluid size='large' type='submit'>
                Login
              </Button>

              <Message size='large'>             
                Not a member yet? <Link to="/signup"> <strong>Sign up now!</strong> </Link>
              </Message>

            </Segment>
          
          </Form>

        </Grid.Column>
      </Grid>
  )
}
export default UserLogin
