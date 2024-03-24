import React from 'react';
import "./Sidebar.css";
import { SidebarData } from './SidebarData';
import { Outlet } from 'react-router-dom';
import Logout from './Logout';

function Sidebar() {
  return (
    <div className='Sidebar' >
      <ul className='SidebarList'>
       {SidebarData.map((val, key) => {
         return (
         <li 
         key={key} 
         className='row'
         id={window.location.pathname == val.link ? "active" : ""}
         onClick={()=> {
           window.location.pathname = val.link;
           }} 
         >
           <div id="icon">
             {val.icon}
           </div> 
           <div id="title">
             {val.title}
           </div>
         </li>
         )
       })}
      <Outlet/>
      </ul>
    </div>
  )
}

export default Sidebar