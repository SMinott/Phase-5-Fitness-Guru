import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

function UserLogin( {setCurrentUser} ) {

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
    <div>

      {/* <Navigate to='/' /> */}

      <form onSubmit={handleSubmit} >
        <h1>Log In</h1>
        <p>
          <label>Username</label>
          <input
          type='text'
          name='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          >
          </input>
        </p>
          
        <p>
          <label>Password</label>
          <input
            type='password'
            name=''
            value={password}
            onChange={(e) => setPassword(e.target.value)}     
          >
          </input>
        </p>

        <p><button type="submit">Log In</button></p>
        <p >-- or --</p>
        <p><Link to="/signup">Sign Up</Link></p>

      </form>
    </div>
  )
}

export default UserLogin
