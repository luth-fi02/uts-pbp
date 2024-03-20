import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Forum.css";
import { Outlet } from 'react-router-dom';

function AddPost() {
  return (
    <div className='AddPost' >
        <Outlet />
        <Formik  >
            <Form className='formContainer'>
                <label> Title:  </label>
                <Field 
                    id="inputAddPost" 
                    name="title" 
                    placeholder="(Ex.Title)" 
                />

                <label> Post:  </label>
                <Field 
                    id="inputAddPost" 
                    name="postText" 
                    placeholder="(Ex.Post...)" 
                />

                <label> Username:  </label>
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
  )
}

/* initialValues={} onSubmit={} validationSchema={} */

export default AddPost