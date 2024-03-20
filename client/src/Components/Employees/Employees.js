import React from 'react'
import { Outlet } from 'react-router-dom'
import "./Employees.css";
import "../Page.css";

function Employees() {
  return (
    <div className="Page">
      <Outlet />
      <div className="Content">
        Employees
      </div>
    </div>
  )
}

export default Employees