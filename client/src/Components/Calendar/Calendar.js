import React from 'react';
import "./Calendar.css";
import { Outlet } from 'react-router-dom';

function Calendar() {
  return (
    <div className="Calendar">
     <Outlet />
     <div>
      Calendar
      </div> 
    </div>
  )
}

export default Calendar