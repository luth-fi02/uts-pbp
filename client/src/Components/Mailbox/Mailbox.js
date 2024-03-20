import React from 'react';
import { Outlet } from 'react-router-dom';
import "./Mailbox.css";

function Mailbox() {
  return (
    <div className='Mailbox'>
    <Outlet/>
      <div>
        Mailbox
      </div>
    </div>
  )
}

export default Mailbox