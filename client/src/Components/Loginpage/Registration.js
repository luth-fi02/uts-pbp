import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import "./Loginpage.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function Registration() {
    let navigate = useNavigate();
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
        navigate("/")
        });
    };


  return (
    <div className='Loginpage'>
        <div className='wrapper'>
            <h1> Register </h1>
        <Formik   
                initialValues={initialValues} 
                onSubmit={onSubmit}
                validationSchema={validationSchema} 
                autocomplete="off"
            >
                    <Form className='Register'>
                        
                    
                        <ErrorMessage name="username" component="span" />
                        <Field 
                            className="input-box" 
                            name="username" 
                            placeholder="Username..." 
                        />

                 
                        <ErrorMessage name="password" component="span" />
                        <Field 
                            className="input-box" 
                            type="password"
                            name="password" 
                            placeholder="Password..." 
                        />

                        <button type='submit'>
                            Register
                        </button>
                    </Form>
        </Formik>
        <div className='register-link'>
            <p> 
              Already have an account? 
              <a href="/login" > 
              Login 
              </a> 
            </p>  
        </div>
        <div className='register-link'>
            <p> 
              Return to  {" "} 
              <a href="/" > 
              Home
              </a> 
            </p>  
        </div>    
        </div>
    </div>
  )
}

export default Registration;