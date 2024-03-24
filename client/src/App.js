import './App.css';
import Forum from './Components/Forum/Forum';
import Landingpage from './Components/Landingpage/Landingpage';
import Loginpage from './Components/Loginpage/Loginpage';
import Sidebar from './Components/Sidebar/Sidebar';
import Calendar from './Components/Calendar/Calendar';
import Messenger from './Components/Messenger/Messenger';
import Employees from './Components/Employees/Employees';
import Homepage from './Components/Homepage/Homepage';
import Mailbox from './Components/Mailbox/Mailbox'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddPost from './Components/Forum/AddPost';
import Post from './Components/Forum/Post';

function App() {
  return (
  <Router>
   <div className='App'>
      <Routes>
        <Route path="/" element={(<Landingpage />)} />
        <Route path="/loginpage" element={(<Loginpage />)} />
        <Route path="/homepage" element={(<Homepage />)}>
          <Route path="" element={(<Sidebar />)} />
        </ Route>
        <Route path="/mailbox" element={(<Mailbox />)}>
          <Route path="" element={(<Sidebar />)} />
        </ Route>
        <Route path="/employees" element={(<Employees />)}>
          <Route path="" element={(<Sidebar />)} />
        </ Route>
        <Route path="/messenger" element={(<Messenger />)}>
          <Route path="" element={(<Sidebar />)} />
        </ Route>
        <Route path="/calendar" element={(<Calendar />)}>
          <Route path="" element={(<Sidebar />)} />
        </ Route>
        <Route path="/forum" element={(<Forum />)}>
          <Route path="" element={(<Sidebar />)} />
        </ Route>
        <Route path="/post/:id" element={(<Post />)}>
          <Route path="" element={(<Sidebar />)} />
        </ Route>
        <Route path="addpost" element={(<AddPost />)}>
            <Route path="" element={(<Sidebar />)} />
        </Route>
      </Routes>   
   </div>
  </Router>
  );
}

export default App;
