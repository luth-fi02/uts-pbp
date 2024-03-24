import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Usercheck(){
  const [authState, setAuthState] = useState()   
    useEffect(() => {
      axios.get('http://localhost:3001/auth/auth', { headers: {
        accessToken: localStorage.getItem('accessToken'),
      }}).then((response) => {
        if (response.data.error) {
        setAuthState(false)
        } else {
        setAuthState(true);
        }
      })
    }, [])
  return authState;
};
