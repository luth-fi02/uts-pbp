import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Forum.css";
import { Outlet } from 'react-router-dom';
import "../Page.css";
import * as Yup from 'yup';
import axios from "axios";




function AddPost() {
    const initialValues = {
        title: "",
        postText: "",
        username: "",
    };

    const validationSchema = Yup.object().shape ({
        title: Yup.string().required(),
        postText: Yup.string().required(),
        username: Yup.string().max(30).required(),
    });
    

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/posts", data).then((response) => {
        console.log("Posted")
        });
    };
  return (
    <div className='Page'>
        <div className='Content'> 
            <Outlet />
            <Formik   
                initialValues={initialValues} 
                onSubmit={onSubmit}
                validationSchema={validationSchema} 
            >
                    <Form className='formContainer'>
                        <label> Title:  </label>
                        <ErrorMessage name="title" component="span" />
                        <Field 
                            id="inputAddPost" 
                            name="title" 
                            placeholder="(Ex.Title)" 
                        />

                        <label> Post:  </label>
                        <ErrorMessage name="postText" component="span" />
                        <Field 
                            id="inputAddPost" 
                            name="postText" 
                            placeholder="(Ex.Post...)" 
                        />

                        <label> Username:  </label>
                        <ErrorMessage name="username" component="span" />
                        <Field 
                            id="inputAddPost" 
                            name="username" 
                            placeholder="(Ex.Yummy123)" 
                        />

                        <button type='submit'>
                            Create Post
                        </button>
                    </Form>
            </Formik>
        </div>
    </div>
  )
}

/* initialValues={} onSubmit={} validationSchema={} */

export default AddPost