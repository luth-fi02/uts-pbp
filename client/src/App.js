import './App.css';
import Forum from './Components/Forum/Forum';
import Landingpage from './Components/Landingpage/Landingpage';
import Registration from './Components/Loginpage/Registration';
import Login from './Components/Loginpage/Login';
import SidebarOffcanvas from './Components/Sidebar/SidebarOffcanvas';
import Schedule from './Components/Schedule/Schedule';
import Messenger from './Components/Messenger/Messenger';
import Employees from './Components/Employees/Employees';
import Homepage from './Components/Homepage/Homepage';
import Logout from './Components/Sidebar/Logout';
import AddPost from './Components/Forum/AddPost';
import Post from './Components/Forum/Post';
import Attendance from "./Components/Attendance/Attendance";
import Getuser from './Components/helpers/Getuser';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Profile from './Components/helpers/Profile';
import Resetpass from './Components/Loginpage/ResetPass';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthContext } from './Components/helpers/AuthContext';
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

function App() {
  const [authState, setAuthState] = Getuser();
  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      <Router>
        <div className='App'>
          <Routes>
            <Route path="/" element={(<Landingpage />)} />
            <Route path="/login" element={(<Login/>)}/>
            <Route path="/*" element={(<PageNotFound/>)}/>
            {authState.status ? (
              <>
                <Route path="/homepage" element={(<Homepage />)}>
                  <Route path="" element={(<SidebarOffcanvas />)}>
                    <Route path="" element={(<Logout />)} />
                  </Route>
                </ Route>
                <Route path="/attendance" element={(<Attendance />)}>
                  <Route path="" element={(<SidebarOffcanvas />)}>
                    <Route path="" element={(<Logout />)} />
                  </Route>
                </ Route>
                <Route path="/employees" element={(<Employees />)}>
                  <Route path="" element={(<SidebarOffcanvas />)}>
                    <Route path="" element={(<Logout />)} />
                  </Route>
                </ Route>
                <Route path="/messenger" element={(<Messenger />)}>
                  <Route path="" element={(<SidebarOffcanvas />)}>
                    <Route path="" element={(<Logout />)} />
                  </Route>
                </ Route>
                <Route path="/schedule" element={(<Schedule />)}>
                  <Route path="" element={(<SidebarOffcanvas />)}>
                    <Route path="" element={(<Logout />)} />
                  </Route>
                </ Route>
                <Route path="/forum" element={(<Forum />)}>
                  <Route path="" element={(<SidebarOffcanvas />)}>
                    <Route path="" element={(<Logout />)} />
                  </Route>
                </ Route>
                <Route path="/post/:id" element={(<Post />)}>
                  <Route path="" element={(<SidebarOffcanvas />)}>
                    <Route path="" element={(<Logout />)} />
                  </Route>
                </ Route>
                <Route path="addpost" element={(<AddPost />)}>
                  <Route path="" element={(<SidebarOffcanvas />)}>
                    <Route path="" element={(<Logout />)} />
                  </Route>
                </Route>
                <Route path="/postby/:id" element={(<Profile/>)}>
                  <Route path="" element={(<SidebarOffcanvas />)}>
                    <Route path="" element={(<Logout />)} />
                  </Route>
                </ Route>
                <Route path="/resetpass" element={(<Resetpass/>)}>
                  <Route path="" element={(<SidebarOffcanvas />)}>
                    <Route path="" element={(<Logout />)} />
                  </Route>
                </ Route>
              </>
            ) : (
              <>
                <Route path="/registration" element={(<Registration />)} />
                <Route path="/login" element={(<Login />)} />
                <Route path="/homepage" element={(<Landingpage />)}/>
                <Route path="/attendance" element={(<Landingpage />)}/>
                <Route path="/employees" element={(<Landingpage />)}/>
                <Route path="/messenger" element={(<Landingpage />)}/>
                <Route path="/schedule" element={(<Landingpage />)}/>
                <Route path="/forum" element={(<Landingpage />)}/>
                <Route path="/post/:id" element={(<Landingpage />)}/>
                <Route path="addpost" element={(<Landingpage />)}/>
              </>
            )}
          </Routes>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
