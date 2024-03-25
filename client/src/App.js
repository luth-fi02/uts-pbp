import './App.css';
import Forum from './Components/Forum/Forum';
import Landingpage from './Components/Landingpage/Landingpage';
import Registration from './Components/Loginpage/Registration';
import Login from './Components/Loginpage/Login';
import SidebarOffcanvas from './Components/Sidebar/SidebarOffcanvas';
import Calendar from './Components/Calendar/Calendar';
import Messenger from './Components/Messenger/Messenger';
import Employees from './Components/Employees/Employees';
import Homepage from './Components/Homepage/Homepage';
import Logout from './Components/Sidebar/Logout';
import AddPost from './Components/Forum/AddPost';
import Post from './Components/Forum/Post';
import Attendance from "./Components/Attendance/Attendance";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {AuthContext} from "./Components/helpers/AuthContext";
import { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

function App() {
  // const [authState, setAuthState] = useState(false)
  //   useEffect(() => {
  //     axios.get('http://localhost:3001/auth/auth', { headers: {
  //       accessToken: localStorage.getItem('accessToken'),
  //     }}).then((response) => {
  //       if (response.data.error) {
  //       setAuthState(false)
  //       } else {
  //       setAuthState(true);
  //       }
  //     })
  //   }, [])
  return (
  // <AuthContext.Provider value ={{ authState, setAuthState }}>
  <Router>
   <div className='App'>
      <Routes>
        <Route path="/" element={(<Landingpage />)} />
        <Route path="/registration" element={(<Registration />)} />
        <Route path="/login" element={(<Login />)} />
        {/* { authState && ( */}
          <>
        <Route path="/homepage" element={(<Homepage />)}>
          <Route path="" element={(<SidebarOffcanvas />)}>
            <Route path="" element={(<Logout/>)}/>
          </Route>
        </ Route>
        <Route path="/attendance" element={(<Attendance />)}>
          <Route path="" element={(<SidebarOffcanvas />)}>
            <Route path="" element={(<Logout/>)}/>
          </Route>
        </ Route>
        <Route path="/employees" element={(<Employees />)}>
          <Route path="" element={(<SidebarOffcanvas />)}>
            <Route path="" element={(<Logout/>)}/>
          </Route>
        </ Route>
        <Route path="/messenger" element={(<Messenger />)}>
          <Route path="" element={(<SidebarOffcanvas />)}>
            <Route path="" element={(<Logout/>)}/>
          </Route>
        </ Route>
        <Route path="/calendar" element={(<Calendar />)}>
          <Route path="" element={(<SidebarOffcanvas />)}>
            <Route path="" element={(<Logout/>)}/>
          </Route>
        </ Route>
        <Route path="/forum" element={(<Forum />)}>
          <Route path="" element={(<SidebarOffcanvas />)}>
            <Route path="" element={(<Logout/>)}/>
          </Route>
        </ Route>
        <Route path="/post/:id" element={(<Post />)}>
          <Route path="" element={(<SidebarOffcanvas />)}>
            <Route path="" element={(<Logout/>)}/>
          </Route>
        </ Route>
        <Route path="addpost" element={(<AddPost />)}>
          <Route path="" element={(<SidebarOffcanvas />)}>
            <Route path="" element={(<Logout/>)}/>
          </Route>
        </Route>
          </>
        {/* )} */}
      </Routes>
   </div>
  </Router>
  // </AuthContext.Provider>
  );
}

export default App;
