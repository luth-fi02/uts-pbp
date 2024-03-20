import React from 'react';
import "./Calendar.css";
import { Outlet } from 'react-router-dom';
import '../Page.css'

function Calendar() {
  return (
    <div className="Page">
     <Outlet />
     <div className="Content">
      Calendar
      </div> 
    </div>
  )
}

export default Calendar