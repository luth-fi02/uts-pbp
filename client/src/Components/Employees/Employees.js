import React from "react";
import { Outlet } from "react-router-dom";
import "./Employees.css";
import "../Page.css";
import Card from "react-bootstrap/Card";
import { employees } from "./EmployeesData";
import Image from "react-bootstrap/Image";
import SendIcon from "@mui/icons-material/Send";

function Employees() {
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
              <Card key={i} border="light" style={{ width: "24rem" }}>
                <Card.Header className="header">
                  <Image
                    style={{ width: "40px" }}
                    src="../../../ceo.jpg"
                    roundedCircle
                  />
                  <div className="header-text">
                    <h2>{employee.nama}</h2>
                    <p>{employee.umur} years old</p>
                  </div>
                  <div className="send-message">
                    <a href="/messenger"><SendIcon></SendIcon></a>
                  </div>
                </Card.Header>
                <Card.Body className="body">
                  <div className="details position">
                    <h3>Position</h3>
                    <p>{employee.jabatan}</p>
                  </div>
                  <div className="details gender">
                    <h3>Gender</h3>
                    <p>{employee.gender}</p>
                  </div>
                  <div className="details">
                    <h3>Skills</h3>
                    <div className="skills">
                      {employee.skills.map((skill, i) => {
                        return <p>{skill}</p>;
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
