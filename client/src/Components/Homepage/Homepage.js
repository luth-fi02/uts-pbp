import React from 'react';
import './Homepage.css';
import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <div className='Homepage'>
      <Outlet />
      <div>
      Home
      </div>
    </div>
  )
}

export default Home