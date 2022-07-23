import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'

function UserSignUp( {setCurrentUser} ) {

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
    <div>
      <form onSubmit={handleSubmit} >

        <h1>Sign Up</h1>
        
        <p>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </p>

        <p>
          <label>Password</label>
          <input
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

        <p><button type="submit">Sign Up</button></p>
        <p >-- or --</p>
        <p ><Link to="/login">Log In</Link></p>
      </form>
    </div>
  )
}

export default UserSignUp