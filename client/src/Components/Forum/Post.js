import  React, { useEffect, useState }  from 'react';
import { Outlet, useParams } from 'react-router-dom';
import axios from "axios";


function Post() {
    let { id } = useParams();
    const [postObject, setPostObject] = useState({
    });

    useEffect(() => {
      axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
        setPostObject(response.data);
      });
    }, []);

  return (
    <div className='Page'>
        <div className='Content'>
            <Outlet />
            <div className='Post'>
                <div>
                  {postObject.title}
                </div>
                <div>
                  {postObject.postText}
                </div>
                <div>
                  {postObject.username}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post