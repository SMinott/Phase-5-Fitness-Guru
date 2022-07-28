import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

function UserSignUp({ setCurrentUser }) {

  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation
      })
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setCurrentUser(user)
            navigate.push('/plans')
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
        <form onSubmit={handleSubmit} >
          <Segment>
            <Header as='h1' color='black' textAlign='center' dividing>
              Sign Up
            </Header>

            <Form.Input fluid icon='user' iconPosition='left' placeholder='Username'
                type='text'
                name='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
               <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password'
                type='password'
                name=''
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete='on'
              />
               <Form.Input fluid icon='lock' iconPosition='left' placeholder='Confirm Password'
                type='password'
                name='password_confirmation'
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                autoComplete='on'
              />

              <Button color='black' fluid size='large' type="submit">
                Sign Up
              </Button>

              <Message size='large'>             
                Already a member? <Link to="/"> <strong>LOGIN</strong> </Link>
              </Message>
            
            {/* <p>
              <label>Username</label>
              <input
                required
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </p>

            <p>
              <label>Password</label>
              <input
                required
                type="password"
                name=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </p>

            <p>
              <label>Password Confirmation</label>
              <input
                type="password"
                name="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </p>
            <p >-- or --</p>
            <p ><Link to="/login">Log In</Link></p> */}

          </Segment>
        </form>
      </Grid.Column>
    </Grid>
  )
}
export default UserSignUp
