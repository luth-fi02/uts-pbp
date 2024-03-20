import React from 'react'
import { Outlet } from 'react-router-dom';
import "./Messenger.css"
import "../Page.css"

function Messenger() {
  return (
    <div className="Page">
      <Outlet />
      <div className="Content">
       Messenger
      </div>
    </div>
  )
}

export default Messenger