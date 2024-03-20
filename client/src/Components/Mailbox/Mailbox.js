import React from 'react';
import { Outlet } from 'react-router-dom';
import "./Mailbox.css";
import "../Page.css";

function Mailbox() {
  return (
    <div className='Page'>
    <Outlet/>
      <div className='Content'>
        Mailbox
      </div>
    </div>
  )
}

export default Mailbox