import "./Forum.css"
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../helpers/AuthContext';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PostAddIcon from '@mui/icons-material/PostAdd';

function App() {
  const [listOfPosts, setListOfPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([])
  const { authState } = useContext(AuthContext);
  let navigate = useNavigate (); 

  useEffect(() => {
    axios.get("http://localhost:3001/posts",
     { headers: { accessToken: localStorage.getItem('accessToken') } }
    ).then((response) => {
      setListOfPosts(response.data.listOfPosts);
      setLikedPosts(response.data.likedPosts.map((like) => {
        return like.PostId
      } ))
    });
  }, []);
  
  const deletePost= (id) => {

    axios.delete(`http://localhost:3001/posts/${id}`, {headers: { accessToken: localStorage.getItem("accessToken") },
  }).then(()=> {
    setListOfPosts(
      listOfPosts.filter((val) => {
        return val.id != id;
      })
    )
  });
  }

  const likeAPost = (postId) => {
    axios.post("http://localhost:3001/likes", 
      { PostId: postId }, 
      { headers: { accessToken: localStorage.getItem('accessToken') } }
    ). then( (response) => {
      setListOfPosts(listOfPosts.map((post) => {
        if (post.id === postId) {
          if (response.data.liked) {
            return { ...post, Likes: [...post.Likes, 1] }
          } else {
            const likeArray = post.Likes
            likeArray.pop()
            return { ...post, Likes: likeArray }
          }
        } else {
          return post
        }
      }));

      if (likedPosts.includes(postId)) {
        setLikedPosts(likedPosts.filter((id) => {
          return id != postId;
          })
        )
      } else {
        setLikedPosts([...likedPosts, postId])
      }
    } )
  }

  return (
    <div>
    <Outlet />
    <div  className="forumPage">
        <div> 
            {listOfPosts.map((value, key) => {
              return (
                <div>
                  <div className="post">
                    <div className="title"> {value.title} </div>
                    <div className="body" onClick={() => navigate(`/post/${value.id}`)}>{value.postText}</div>
                    <div className="footer">

                      <div className="byUser">
                          <AccountCircleIcon/>
                        <div className="footertext">
                          posted by
                        </div>
                        <div onClick={()=>{navigate(`/postby/${value.UserId}`)}}>
                          {value.username}
                        </div>
                      </div>
                      
                      <div className="buttons">
                        {authState.username === value.username && 
                             <DeleteIcon onClick={() => {deletePost(value.id)}}/>
                        }
                        <ThumbUpIcon 
                          onClick={() => {likeAPost(value.id)}}
                          className={likedPosts.includes(value.id) ? "unlikeBttn" : "likeBttn" }  
                        /> 
                      <label> {value.Likes.length} </label>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <button className="TopicButton" onClick={()=>{navigate("/addpost")}}>
           <PostAddIcon className="icon"/> Start a New Topic
        </button>
    </div>
    </div>
  );
}

export default App;
