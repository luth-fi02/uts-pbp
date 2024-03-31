import  React, { useEffect, useState }  from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../Page.css";
import "./Forum.css"
import * as Yup from 'yup';
import axios from "axios";

function AddPost() {

    const initialValues = {
        title: "",
        postText: "",
    };

    const validationSchema = Yup.object().shape ({
        title: Yup.string().required(),
        postText: Yup.string().required(),
    });

    let navigate = useNavigate ();
    const onSubmit = (data) => {
        axios.post("http://localhost:3001/posts", data, 
        {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        }
        )
        .then((response) => {
          navigate(`/forum`);
        });
    };

  return (
      <div>
        <Outlet />
        <div className='addpostpage'>
            <div className='wrapperaddpost'>
            <h1>Write a New Topic</h1>
            <Formik   
                initialValues={initialValues} 
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                autocomplete="off" 
                >
                    <Form className='addpost'>

                        <ErrorMessage name="title" component="span" />
                        <Field 
                            className="input-boxtitle" 
                            name="title" 
                            placeholder="Title..." 
                            />

                        <ErrorMessage name="postText" component="span" />
                        <Field 
                            className="input-boxtext"
                            type="text" 
                            name="postText" 
                            placeholder="Post..." 
                            />

                        <button type='submit'>
                            Create Post
                        </button>
                    </Form>
            </Formik>
            </div> 
        </div>
    </div>
  )
}


/* initialValues={} onSubmit={} validationSchema={} */

export default AddPost