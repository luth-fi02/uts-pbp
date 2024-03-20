import React from 'react'
import { Outlet } from 'react-router-dom';
import "./Messenger.css"

function Messenger() {
  return (
    <div className="Messenger">
      <Outlet />
      <div>
       Messenger
      </div>
    </div>
  )
}

export default Messenger