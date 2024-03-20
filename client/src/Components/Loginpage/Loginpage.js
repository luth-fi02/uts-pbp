import React from 'react'
import './Loginpage.css'


function Login() {
  return (
    <div className='Loginpage'>
        <div className='Registration'>
            <h1>Registration</h1>
            <label>Username</label>
            <input type='text'/>
            <label>Password</label>
            <input type='text'/>
            <button>Register</button>
        </div>
        <div className='Login'>
          <h1>Registration</h1>
          <input type='text' placeholder='Username...'/>
          <input type='password' placeholder='Passsword...'/>
          <button> Register </button>
        </div>
    </div>
  )
}

export default Login