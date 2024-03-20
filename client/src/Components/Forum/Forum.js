import "./Forum.css"
import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";

function App() {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);
  return (
    <div className="Forum">
      <Outlet/>
      <div> 
      <Link to="addpost">Add a New Post</Link>
      {listOfPosts.map((value, key) => {
        return (
          <div>
            <div className="post">
              <div className="title"> {value.title} </div>
              <div className="body">{value.postText}</div>
              <div className="footer">{value.username}</div>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default App;