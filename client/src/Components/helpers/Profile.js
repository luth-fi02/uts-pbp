import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import '../Forum/Forum.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


function Profile() {
    let{ id } = useParams();
    const [username, setUsername] = useState("");
    const [listOfPosts, setListOfPosts ] = useState([])
    let navigate = useNavigate();
  
    useEffect(() => {
      axios.get(`http://localhost:3001/auth/profile/${id}`)
      .then((response) => {
        setUsername(response.data.username);

      axios.get(`http://localhost:3001/posts/byuserId/${id}`)
      .then((response) => {
        setListOfPosts(response.data)
      })

      });
    }, []);

  return (
    <div className="profilePageContainer">
    <Outlet/>
    <div className="basicInfo">
      {" "}
      <br/><br/><br/>
      <h1> Showing all post from: {username} </h1>
    </div>
    <div className="listOfPosts">
      {listOfPosts.map((value, key) => {
        return (
          <div key={key} className="post">
            <div className="title"> {value.title} </div>
            <div
              className="body"
              onClick={() => {
                navigate(`/post/${value.id}`);
              }}
            >
              {value.postText}
            </div>
            <div className="footer">
              <div className="username">{value.username}</div>
              <div>
                <ThumbUpIcon/>
                <label> {value.Likes.length}</label>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  );
}
export default Profile;

export function SelfProfile() {
  const [username, setUsername] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/auth/profile`,  { headers: {
      accessToken: localStorage.getItem('accessToken'),
    }})
    .then((response) => {
      setUsername(response.data);
    });
  }, []);


return username;
}

export function GetProfile(){
  const [username, setUsername] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/auth/profileall`)
    .then((response) => {
      console.log(response.data)
      setUsername(response.data);
    });
  }, []);

  
  return username;
}