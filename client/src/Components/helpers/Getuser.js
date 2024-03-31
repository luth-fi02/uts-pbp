import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import "../Sidebar/Sidebar.css";

export default function Getuser (){
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  })   
    useEffect(() => {
      axios.get('http://localhost:3001/auth/auth', { headers: {
        accessToken: localStorage.getItem('accessToken'),
      }}).then((response) => {
        if (response.data.error) {
        setAuthState({...authState, status:false})
        } else {
        setAuthState({
          username: response.data.username,
          id: response.data.id,
          status: true,
        });
        }
      })
    }, [])
  return [authState, setAuthState];
}

export function Logout() {  
  let navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem("accessToken");
    navigate('/ ');
  } 
  return (
  <li 
  className='row'
  onClick={logout}>
  <div id="icon">
    <LogoutIcon/>
  </div>
  <div id="label">
    Log Out
  </div>
  </li>
)
}
