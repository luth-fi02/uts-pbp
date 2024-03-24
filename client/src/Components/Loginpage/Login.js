import React, { useState, useContext } from 'react';
import './Loginpage.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";

function Login() {
    const [username, setUsername] = useState ("");
    const [password, setPassword] = useState ("");
    const {setAuthState} = useContext(AuthContext);

    let navigate = useNavigate();

    const Login = () => {
        const data = {username: username, password: password};
        axios.post("http://localhost:3001/auth/login", data).then((response) => {
          if (response.data.error) {
            alert(response.data.error);
          } else {
            localStorage.setItem("accessToken", response.data.token)
            setAuthState({ username: response.data.username, id: response.data.id, status: true })
            navigate("/homepage");
          }
        });
    }

  return (
    <div className='Login'>
      
      <input 
        type='text' 
        onChange={(event) => {
        setUsername(event.target.value)
        }} 
      />
      <input 
        type="password"
        onChange={(event) => {
        setPassword(event.target.value)
        }}  
      />
      <button onClick={Login}> Login </button>

    </div>
  )
}

export default Login