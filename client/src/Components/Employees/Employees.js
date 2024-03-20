import React from 'react'
import { Outlet } from 'react-router-dom'
import "./Employees.css";

function Employees() {
  return (
    <div className="Employees">
      <Outlet />
      <div>
        Employees
      </div>
    </div>
  )
}

export default Employees