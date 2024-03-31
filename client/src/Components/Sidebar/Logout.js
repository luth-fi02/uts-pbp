import React, { useState } from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import "./Sidebar.css";

function Logout() {
    const [authState, setAuthState] = useState({
        username: "",
        id: 0,
        status: false,
      })   
    let navigate = useNavigate()
    const logout = () => {
      navigate('/ ');
      localStorage.removeItem("accessToken");
      setAuthState({username: "", id: 0, status: false});
    } 
    return (
    <li 
    className='row'
    onClick={logout}>
    <div id="icon">
      <LogoutIcon fontSize='inherit'/>
    </div>
    <div id="label">
      Logout
    </div>
    </li>
  )
}

export default Logout