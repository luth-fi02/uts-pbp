import React from 'react';
import './Homepage.css';
import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <div className='Page' >
      <Outlet />
      <div className='Content'>
      Home
      </div>
    </div>
  )
}

export default Home