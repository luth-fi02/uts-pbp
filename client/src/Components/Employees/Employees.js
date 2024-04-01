import React, { useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import "./Employees.css";
import "../Page.css";
import Card from "react-bootstrap/Card";
import { employees } from "./EmployeesData";
import Image from "react-bootstrap/Image";
import SendIcon from "@mui/icons-material/Send";
import { GetProfile, SelfProfile } from  "../helpers/Profile";

 
function Employees() {
  function delay(i) {
    if (i === 0 || i === 3) return '200'
    if (i === 1 || i === 4) return '400'
    return '600'
  }
  
  const profiles = GetProfile([]);
  let navigate =useNavigate();

  return (
    <div className="Page">
      <Outlet />
      <div className="employees-container">
        <h1 className="title">
          Dynamic Workforce:{" "}
          <span>Explore Our Talented Software Engineers</span>
        </h1>
        <p className="info">Discover how our skilled team of software engineers harnesses cutting-edge technologies and innovative solutions to drive success and deliver exceptional results for your projects.</p>

        <div className="cards-container">
          {profiles.map((employee, i) => {
            return (
              <Card data-aos="zoom-in-up"
                data-aos-duration="1000" data-aos-delay={delay(i)} key={i} border="light" style={{ width: "38rem" }}>
                <Card.Header className="header">
                  <div className="headercontent" onClick={() => navigate(`/post/${employee.id}`)}>
                    <Image
                      style={{ width: "40px", height: "40px" }}
                      src="../../../ceo.jpg"
                      roundedCircle
                      />
                    <div className="header-text">
                      <h2 className="header-name">{employee.realname}</h2>
                      <p className="header-age">{employee.age} years old</p>
                    </div>
                    <div className="send-message">
                      <a href="/messenger"><SendIcon fontSize="large"></SendIcon></a>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body id="body" className="body">
                  <div className="details">
                    <h3 className="position-title">Position</h3>
                    <p className="position-value">{employee.title}</p>
                  </div>
                  <div className="details">
                    <h3 className="gender-title">Gender</h3>
                    <p className="gender-value">{employee.gender}</p>
                  </div>
                  <div className="details">
                    <h3 className="skills-title">Email</h3>
                    <div className="gender-value">
                      {employee.email}
                    </div>  
                  </div>
                </Card.Body>
              </Card>
            );
            })
          }
        </div>  

        
      </div>
    </div>
  );
}

export default Employees;
