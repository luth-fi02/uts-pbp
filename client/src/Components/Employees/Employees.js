import React from "react";
import { Outlet } from "react-router-dom";
import "./Employees.css";
import "../Page.css";
import Card from "react-bootstrap/Card";
import { employees } from "./EmployeesData";
import Image from "react-bootstrap/Image";
import SendIcon from "@mui/icons-material/Send";

function Employees() {
  function delay(i) {
    if (i === 0 || i === 3) return '200'
    if (i === 1 || i === 4) return '400'
    return '600'
  }

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
          {employees.map((employee, i) => {
            return (
              <Card data-aos="zoom-in-up"
                data-aos-duration="1000" data-aos-delay={delay(i)} key={i} border="light" style={{ width: "38rem" }}>
                <Card.Header className="header">
                  <Image
                    style={{ width: "40px", height: "40px" }}
                    src="../../../ceo.jpg"
                    roundedCircle
                  />
                  <div className="header-text">
                    <h2 className="header-name">{employee.nama}</h2>
                    <p className="header-age">{employee.umur} years old</p>
                  </div>
                  <div className="send-message">
                    <a href="/messenger"><SendIcon fontSize="large"></SendIcon></a>
                  </div>
                </Card.Header>
                <Card.Body id="body" className="body">
                  <div className="details">
                    <h3 className="position-title">Position</h3>
                    <p className="position-value">{employee.jabatan}</p>
                  </div>
                  <div className="details">
                    <h3 className="gender-title">Gender</h3>
                    <p className="gender-value">{employee.gender}</p>
                  </div>
                  <div className="details">
                    <h3 className="skills-title">Skills</h3>
                    <div className="skills">
                      {employee.skills.map((skill, i) => {
                        return <p key={i}>{skill}</p>;
                      })}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Employees;
