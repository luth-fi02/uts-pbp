import { useState, useEffect } from 'react';
import axios from 'axios';

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
  return authState;
}