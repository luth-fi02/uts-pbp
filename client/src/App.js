import './App.css';
import Forum from './Components/Forum/Forum'
import Loginpage from './Components/Loginpage/Loginpage';
import Sidebar from './Components/Sidebar/Sidebar';
import Calendar from './Components/Calendar/Calendar';
import Messenger from './Components/Messenger/Messenger';
import Employees from './Components/Employees/Employees';
import Homepage from './Components/Homepage/Homepage';
import Mailbox from './Components/Mailbox/Mailbox'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
  <Router>
   <div className='App'>
   <Sidebar />
      <Routes>
        <Route path="/" element={(<Loginpage />)} />
        <Route path="/homepage" element={(<Homepage />, <Sidebar/>)} />
        <Route path="/mailbox" element={(<Mailbox />, <Sidebar/>)} />
        <Route path="/employees" element={(<Employees />, <Sidebar/>)} />
        <Route path="/messenger" element={(<Messenger />, <Sidebar/>)} />
        <Route path="/calendar" element={(<Calendar />, <Sidebar/>)} />
        <Route path="/forum" element={(<Forum />)}>
        <Route path="" element={(<Sidebar />)} />
        </ Route>
      </Routes>   
   </div>
  </Router>
  );
}

export default App;
