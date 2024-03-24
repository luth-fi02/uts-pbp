import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import "./Loginpage.css";
import axios from "axios";

function Registration() {

    const initialValues = {
        username: "",
        password: "",
    };

    const validationSchema = Yup.object().shape ({
        username: Yup.string().max(30).required(),
        password: Yup.string().min(4).max(20).required(),
    });

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/auth", data). then((response) => {
        console.log(response)
        });
    };

  return (
    <div>
        <div className='Registration'>
        <Formik   
                initialValues={initialValues} 
                onSubmit={onSubmit}
                validationSchema={validationSchema} 
            >
                    <Form className='formContainer'>
                        
                        <label> Username:  </label>
                        <ErrorMessage name="username" component="span" />
                        <Field 
                            id="inputAddPost" 
                            name="username" 
                            placeholder="(Ex.Yummy123)" 
                        />

                        <label> Passsword:  </label>
                        <ErrorMessage name="password" component="span" />
                        <Field 
                            id="inputAddPost" 
                            type="password"
                            name="password" 
                            placeholder="(Your Password...)" 
                        />
            


                        <button type='submit'>
                            Register
                        </button>
                    </Form>
            </Formik>
            </div>
    </div>
  )
}

export default Registration