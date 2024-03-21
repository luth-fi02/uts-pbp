import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

function Post() {
    let { id } = useParams;
  return (
    <div className='Page'>
        <div className='Content'>
            <Outlet />
        </div>
    </div>
  )
}

export default Post