import React, {useState} from 'react'
import axios from 'axios'
import "../Loginpage/Loginpage.css"

function Resetpass() {

  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")

  const changePassword = () => {
    axios.put("http://localhost:3001/auth/passwordreset", {
      oldPassword: oldPassword, 
      newPassword: newPassword,
    },
    { headers: { 
      accessToken: localStorage.getItem('accessToken') 
      }
    }
    ). then ((response) => {
      if (response.data.error) {
        alert(response.data.error);
      }
    });
  }
  return (
    <div className='Loginpage'>
      <div className='wrapper'>
        <h1>Resetpass</h1>

        <div className='input-box'> 
         <input 
         type="password" 
         placeholder='Old Password...'
         onChange={ (event) => {
           setOldPassword(event.target.value)}
         }
         />
        </div>

        <div className='input-box'>
          <input 
          type="password" 
          placeholder='New Password...' 
          onChange={ (event) => {
            setNewPassword(event.target.value)}
          }
          />
        </div>
        
          <button
          onClick={changePassword}
          > 
          Save Changes </button>

          <div className='register-link'>
        <p> 
          Return to {" "} 
          <a href="/homepage" > 
          Dashboard 
          </a> 
        </p>

      </div>
      </div>
    </div>
  )
}

export default Resetpass