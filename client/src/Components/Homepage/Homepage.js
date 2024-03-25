import React from "react";
import "./Homepage.css";
import { Outlet } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <div className="Page">
      <Outlet />
      <div className="home-content">
        <h1 className="main-title">Employee Profile</h1>
        <div className="container-left">
          <div className="detail">
            <h2 className="title">General Information</h2>
            <hr style={{ marginBottom: "2rem" }} />
            <h4 className="identity">Name</h4>
            <h3 className="value">John Terry</h3>
            <h4 className="identity">Age</h4>
            <h3 className="value">22th</h3>
            <h4 className="identity">Gender</h4>
            <h3 className="value">Male</h3>
            <h4 className="identity">Birth date</h4>
            <h3 className="value">27 December 2003</h3>
            <h4 className="identity">Status</h4>
            <h3 className="value">Not married</h3>
            <h4 className="identity">Email</h4>
            <h3 className="value">JohnTerry@gmail.com</h3>
            <h4 className="identity">Phone Number</h4>
            <h3 className="value">082121212121</h3>
            <h4 className="identity">Address</h4>
            <h3 className="value">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
          </div>
          <div className="container-right">
            <div className="image">
              <h2 className="title">Profile Photo</h2>
              <hr />
              <Image
                className="avatar shadow-lg"
                src="../../../ceo.jpg"
                rounded
              />
              <Button className="checkin-button shadow-lg" variant="info">
                Check-in
              </Button>{" "}
            </div>
            <div className="info">
              <h4 className="identity">Title</h4>
              <h3 className="value">Project Manager</h3>
              <h4 className="identity">Salary</h4>
              <h3 className="value">Rp. 12.000.000 / month</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
