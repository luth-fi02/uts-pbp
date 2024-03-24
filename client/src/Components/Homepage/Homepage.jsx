import React from "react";
import "./Homepage.css";
import { Outlet } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <div className="Page">
      <Outlet />
      <div className="content">
        <h1>Employee Profile</h1>
        <div className="container-left">
          <div className="detail">
            <h2 className="title">General Information</h2>
            <hr />
            <h4>Name</h4>
            <h3>John Terry</h3>
            <h4>Age</h4>
            <h3>22th</h3>
            <h4>Gender</h4>
            <h3>Male</h3>
            <h4>Birth date</h4>
            <h3>27 December 2003</h3>
            <h4>Status</h4>
            <h3>Not married</h3>
            <h4>Email</h4>
            <h3>JohnTerry@gmail.com</h3>
            <h4>Phone Number</h4>
            <h3>082121212121</h3>
            <h4>Address</h4>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
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
              <Button className="checkin shadow-lg" variant="info">
                Check-in
              </Button>{" "}
            </div>
            <div className="info">
              <h4>Title</h4>
              <h3>Project Manager</h3>
              <h4>Salary</h4>
              <h3>Rp. 12.000.000 / month</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
