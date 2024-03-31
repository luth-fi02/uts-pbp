import  React, { useContext, useEffect, useState }  from 'react';
import { Outlet, useParams } from 'react-router-dom';
import axios from "axios";
import './Forum.css';
import { AuthContext } from '../helpers/AuthContext';

function Post() {
    let { id } = useParams();
    const [postObject, setPostObject] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const { authState } = useContext(AuthContext);

    useEffect(() => {
      axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
        setPostObject(response.data);
      });

      axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
        setComments(response.data);
      });

    }, []);

    const addComment = () => {
      axios.post("http://localhost:3001/comments", {
        commentBody: newComment, 
        PostId: id,
      },
      {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      }
      )
        .then((response) => {
        if (response.data.error) {
          alert(response.data.error)
        } else {
          const commentToAdd = {
            commentBody: newComment,
            username: response.data.username,
          }
          setComments([...comments,  commentToAdd])
          setNewComment("")
        }
      });
    };

    const deleteComment= (id) => {

      axios.delete(`http://localhost:3001/comments/${id}`, {headers: { accessToken: localStorage.getItem("accessToken") },
    }).then(()=> {
      setComments(
        comments.filter((val) => {
          return val.id != id;
        })
      )
    });
    }

    const editPost = (option) => {
      if (option === "title") {
        let newTitle = prompt("Enter New Title:");

        axios.put("http://localhost:3001/posts/title", 
        {
          newTitle: newTitle, 
          id: id,
        },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        })
        setPostObject({...postObject, title: newTitle})
      } else {
        let newPostText = prompt("Enter New Text:");

        axios.put("http://localhost:3001/posts/postText", 
        {
          newText: newPostText, 
          id: id,
        },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        });
        setPostObject({...postObject, postText: newPostText})
      }
    }

    

  return (
    <div className='Page'>
        <div className='Content'>
            
            <Outlet />

            <div className='postPage'>

              <div className='leftSide'>
                <div className='post' id='individual'>
                  <div 
                  className='title'
                  onClick={() =>{
                    if (authState.username === postObject.username) {
                      {editPost("title")}}
                    } 
                  }
                  >
                    {postObject.title}
                  </div>
                  <div 
                  className='body'
                  onClick={() => {
                    if (authState.username === postObject.username) {
                      {editPost("body")}}
                    }
                  } 
                  >
                    {postObject.postText}
                  </div>
                  <div className='footer'>
                    {postObject.username}
                  </div>
                </div>
              </div>

              <div className='rightSide'>
                
                <div className='addCommentContainer'>

                  <input 
                  type='text' 
                  placeholder='Comment...' 
                  autoComplete="off"
                  value={newComment} 
                  onChange={(event) => {
                    setNewComment(event.target.value)
                    }} 
                  />
                  <button onClick={addComment}> Add Comment </button>
                  
                </div>
                
                <div className='listOfComments'>
                  {comments.map((comment, key) => {
                    return (
                      <div className='comment'>
                        {comment.commentBody}
                        <div> from : {comment.username} </div>
                        {authState.username === comment.username && 
                        <button onClick={() => {deleteComment(comment.id)}}> Delete </button>}
                      </div>
                    )
                  })}
                </div>

              </div>
              
            </div>
        </div>
    </div>
  )
}

export default Post