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
        realname: "",
        age: "",
        gender: "",
        birthdate: "",
        statu: "",
        email: "",
        phonenumber: "",
        address: "",
        title: "",
        salary: "",
    };

    const validationSchema = Yup.object().shape ({
        username: Yup.string().max(30).required(),
        password: Yup.string().min(4).max(20).required(),
        realname: Yup.string().max(30).required(),
        age: Yup.string().max(30).required(),
        gender: Yup.string().max(30).required(),
        birthdate: Yup.string().max(30).required(),
        statu: Yup.string().max(30).required(),
        email: Yup.string().max(30).required(),
        phonenumber: Yup.string().max(30).required(),
        address: Yup.string().max(30).required(),
        title: Yup.string().max(30).required(),
        salary: Yup.string().max(30).required(),
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
                        
                        <ErrorMessage name="realname" component="span" />
                        <Field 
                            className="input-box" 
                            name="realname" 
                            placeholder="Type your real name here..." 
                        />

 
                        <ErrorMessage name="age" component="span" />
                        <Field 
                            className="input-box" 
                            name="age" 
                            placeholder="Age..." 
                        />

 
                        <ErrorMessage name="gender" component="span" />
                        <Field 
                            className="input-box" 
                            name="gender" 
                            placeholder="Male/Female..." 
                        />

 
                        <ErrorMessage name="birthdate" component="span" />
                        <Field 
                            className="input-box" 
                            name="birthdate" 
                            placeholder="Birthdate(D/M/Y)..." 
                        />

 
                        <ErrorMessage name="statu" component="span" />
                        <Field 
                            className="input-box" 
                            name="statu" 
                            placeholder="Married/Not Married..." 
                        />

 
                        <ErrorMessage name="email" component="span" />
                        <Field 
                            className="input-box" 
                            name="email" 
                            placeholder="Your email...." 
                        />

 
                        <ErrorMessage name="phonenumber" component="span" />
                        <Field 
                            className="input-box" 
                            name="phonenumber" 
                            placeholder="Phone Number..." 
                        />

 
                        <ErrorMessage name="address" component="span" />
                        <Field 
                            className="input-box" 
                            name="address" 
                            placeholder="Home address..." 
                        />

 
                        <ErrorMessage name="title" component="span" />
                        <Field 
                            className="input-box" 
                            name="title" 
                            placeholder="Title..." 
                        />

 
                        <ErrorMessage name="salary" component="span" />
                        <Field 
                            className="input-box" 
                            name="salary" 
                            placeholder="Current salary..." 
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