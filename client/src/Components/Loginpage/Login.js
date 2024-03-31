import React, { useState } from 'react';
import './Loginpage.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

function Login() {
    const [username, setUsername] = useState ("");
    const [password, setPassword] = useState ("");

    let navigate = useNavigate();

    const Login = () => {
        const data = {username: username, password: password};
        axios.post("http://localhost:3001/auth/login", data).then((response) => {
          if (response.data.error) {
            alert(response.data.error);
          } else {
            localStorage.setItem("accessToken", response.data.token)
            navigate("/");
          }
        });
    }

  return (
  <div className='Loginpage'>
    <div className='wrapper'>
      <h1> Login </h1>

      <div className='input-box'>
        <input 
          type='username' 
          onChange={(event) => {
            setUsername(event.target.value)
          }}
          placeholder='Username...' 
          />
        <PersonIcon className='icon'/>
      </div>

      <div className='input-box'>
        <input 
          type="password"
          onChange={(event) => {
            setPassword(event.target.value)
          }}
          placeholder='Password...'  
          />
        <LockIcon className='icon'/>
      </div>

      <button onClick={Login}> Login </button>

      <div className='register-link'>
        <p> 
          Don't have an account? 
          <a href="/registration" > 
          Register 
          </a> 
        </p>
      </div>
      <div className='register-link'>
            <p> 
              Return to  {" "} 
              <a href="/" > 
              Home
              </a> 
            </p>  
      </div>
    </div>
  </div>
  )
}

export default Login