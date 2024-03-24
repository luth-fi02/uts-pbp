import React, { useState } from "react";
import "./Calendar.css";
import { Outlet } from "react-router-dom";
import { march } from "./March";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function AddAgenda({ show, handleClose, handleShow }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">
            Add agenda for this date!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="form-label">Agenda</Form.Label>
              <Form.Control
                type="email"
                placeholder="Try how to use Devin AI."
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="form-label">Note</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default function Calendar() {
  const [request, setRequest] = useState(false);
  const [show, setShow] = useState(false);

  const handleReq = () => setRequest(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function isLibur(jam_kerja) {
    if (jam_kerja === "Libur") return "date-box libur";
    return "date-box";
  }

  return (
    <div className="Page">
      <Outlet />
      <div className="schedule-content">
        <div className="container-header">
          <h1 className="title">
            March 2024 <span>Schedule</span>
          </h1>
          <div className="request-button">
            <a href="#request" onClick={handleReq}>
              Request for leave.
            </a>
          </div>
        </div>
        <hr />
        <div className="container">
          {march.map((date, i) => {
            const boxClassName = isLibur(date.jam_kerja);
            return (
              <div className={boxClassName} key={i} onClick={handleShow}>
                <h2 className="date">{date.tanggal}</h2>
                <h2 className="day">{date.hari}</h2>
                <p>{date.jam_kerja}</p>
              </div>
            );
          })}
        </div>

        <div className="request-container" id="request">
          <h1 className="title">
            Let's <span> take a break </span>for a while🍃
          </h1>
          <div className="application">
            <div className="apply-header">
              <div className="apply-header-left">
                <h2>Leave Application</h2>
                <p>Fill all the required fields.</p>
              </div>
              <div className="apply-header-right">
                <Image
                  className="avatar"
                  style={{ width: "70px" }}
                  src="../../../logo.png"
                  rounded
                />
                <h3 className="company-name">
                  <span className="sidebar-title">Future</span> Tech
                </h3>
              </div>
            </div>
            <Form>
              <h3>Personal Information</h3>
              <Row>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="form-label">Fullname</Form.Label>
                    <FloatingLabel
                      classname="form-input"
                      controlId="floatingInput"
                      label="Fullname"
                      className="mb-3 text-body-secondary"
                    >
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </FloatingLabel>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="form-label">Position</Form.Label>
                    <FloatingLabel
                      classname="form-input"
                      controlId="floatingSelect"
                      label="Your job position"
                    >
                      <Form.Select aria-label="Floating label select example">
                        <option>System Analyst</option>
                        <option value="1">Front-end Developer</option>
                        <option value="2">Back-end Developer</option>
                        <option value="3">Database Administrator</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="form-label">Email</Form.Label>
                    <FloatingLabel
                      classname="form-input"
                      controlId="floatingInput"
                      label="example@gmail.com"
                      className="mb-3 text-body-secondary"
                    >
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </FloatingLabel>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="form-label">Phone Number</Form.Label>
                    <FloatingLabel
                      classname="form-input"
                      controlId="floatingInput"
                      label="08xxxxxx"
                      className="mb-3 text-body-secondary"
                    >
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </FloatingLabel>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="form-label">Address</Form.Label>
                    <FloatingLabel
                      classname="form-input"
                      controlId="floatingInput"
                      label="my home street number 3"
                      className="mb-3 text-body-secondary"
                    >
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </FloatingLabel>
                  </Form.Group>
                </Col>
              </Row>
              <h3 className="mt-5">Application Detail</h3>
              <Row className="mt-4">
                <Col>
                  <Form.Label className="form-label mb-2">
                    Your leave type:
                  </Form.Label>
                  <Form.Check
                    type="radio"
                    className="mb-2 form-input"
                    name="Type"
                    label="Annual leave"
                  />
                  <Form.Check
                    type="radio"
                    className="mb-2 form-input"
                    name="Type"
                    label="Marriage leave "
                  />
                  <Form.Check
                    type="radio"
                    className="mb-2 form-input"
                    name="Type"
                    label="Maternity leave"
                  />
                  <Form.Check
                    type="radio"
                    className="mb-2 form-input"
                    name="Type"
                    label="Sick leave"
                  />
                  <Form.Check
                    type="radio"
                    className="mb-2 form-input"
                    name="Type"
                    label="Bereavement leave"
                  />
                  <Form.Check
                    type="radio"
                    className="mb-2 form-input"
                    name="Type"
                    label="Collective leave"
                  />
                  <Form.Check
                    type="radio"
                    className="mb-2 form-input"
                    name="Type"
                    label="Loss of pay leave"
                  />
                  <Form.Check
                    type="radio"
                    className="mb-2 form-input"
                    name="Type"
                    label="Paternity leave"
                  />
                  <Form.Check
                    type="radio"
                    className="mb-2 form-input"
                    name="Type"
                    label="Religious leave"
                  />
                </Col>
                <Col xs={7}>
                  <Form.Group controlId="startDate" className="mb-3">
                    <Form.Label className="form-label">Start Date:</Form.Label>
                    <Form.Control className="form-input" type="date" />
                  </Form.Group>
                  <Form.Group controlId="startDate" className="mb-3">
                    <Form.Label className="form-label">Finish Date:</Form.Label>
                    <Form.Control className="form-input" type="date" />
                  </Form.Group>
                  <Form.Group controlId="startDate" className="mb-3">
                    <Form.Label className="form-label">
                      Reason for leave:
                    </Form.Label>
                    <FloatingLabel
                      classname="form-input"
                      controlId="floatingTextarea2"
                      label="Type here..."
                    >
                      <Form.Control
                        className="form-input"
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: "100px" }}
                      />
                    </FloatingLabel>
                  </Form.Group>
                </Col>
              </Row>
              <button type="submit" className="send-request">
                Send
              </button>
            </Form>
          </div>
        </div>
      </div>

      <AddAgenda
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
    </div>
  );
}
