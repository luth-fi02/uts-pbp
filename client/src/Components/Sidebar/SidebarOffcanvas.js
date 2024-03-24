import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { SidebarData } from "./SidebarData";
import Image from "react-bootstrap/Image";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { Outlet } from "react-router-dom";

export default function SidebarOffcanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <div
        className="close"
        onClick={toggleShow}
        style={{
          backgroundColor: "#fff",
          borderRight: "1px solid #ccc",
          borderBottom: "1px solid #ccc",
          width: "35px",
          height: "35px",
          position: "fixed",
          padding: "3px",
          left: 0,
          cursor: "pointer",
        }}
      >
        {<KeyboardDoubleArrowRightIcon color="primary"></KeyboardDoubleArrowRightIcon>}
      </div>
      <Offcanvas
        show={show}
        backdrop={false}
        scroll={true}
        style={{ width: "23rem" }}
      >
        <Offcanvas.Header>
          <Image
            className="avatar"
            style={{ width: "40px" }}
            src="../../../logo.png"
            rounded
          />
          <Offcanvas.Title
            style={{
              fontFamily: "bold",
              fontSize: "1.2rem",
              marginTop: "2.5px",
            }}
          >
            <span className="sidebar-title">Future</span> Tech
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ overflow: "hidden" }}>
          <ul className="SidebarList">
            {SidebarData.map((val, key) => {
              return (
                <li
                  key={key}
                  className="row"
                  id={window.location.pathname === val.link ? "active" : ""}
                  onClick={() => {
                    window.location.pathname = val.link;
                  }}
                >
                  <div id="icon">{val.icon}</div>
                  <div id="label">{val.title}</div>
                </li>
              );
            })}
        <Outlet/>
          </ul>
        </Offcanvas.Body>
        <div
          onClick={handleClose}
          className="close"
          id="icon"
          style={{
            backgroundColor: "#fff",
            borderRight: "1px solid #ccc",
            borderBottom: "1px solid #ccc",
            width: "35px",
            height: "35px",
            position: "absolute",
            right: "-34px",
            cursor: "pointer",
            padding: "3px",
          }}
        >
          {<KeyboardDoubleArrowLeftIcon color="primary"></KeyboardDoubleArrowLeftIcon>}
        </div>
      </Offcanvas>
    </>
  );
}
