import React, { useCallback, useContext } from "react";
import "./Homepage.css";
import { Outlet, useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { SelfProfile } from "../helpers/Profile";
import { AuthContext } from "../helpers/AuthContext"


function Home() {
  const { authState } = useContext(AuthContext);
  let profile = SelfProfile();
  let navigate = useNavigate();

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
            <h3 className="value">{profile.realname}</h3>
            <h4 className="identity">Username</h4>
            <h3 className="value">{profile.username}</h3>
            <h4 className="identity">Age</h4>
            <h3 className="value">{profile.age}</h3>
            <h4 className="identity">Gender</h4>
            <h3 className="value">{profile.gender}</h3>
            <h4 className="identity">Birth date</h4>
            <h3 className="value">{profile.birthdate}</h3>
            <h4 className="identity">Status</h4>
            <h3 className="value">{profile.statu}</h3>
            <h4 className="identity">Email</h4>
            <h3 className="value">{profile.email}</h3>
            <h4 className="identity">Phone Number</h4>
            <h3 className="value">{profile.phonenumber}</h3>
            <h4 className="identity">Address</h4>
            <h3 className="value">{profile.address}</h3>
            {authState.username === profile.username && ( 
              <button 
              className="resetbutton"
              onClick={() => {
                navigate("/resetpass")
              }}
              > Reset Password </button>
            )}
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
              <h3 className="value">{profile.title}</h3>
              <h4 className="identity">Salary</h4>
              <h3 className="value">{profile.salary}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
