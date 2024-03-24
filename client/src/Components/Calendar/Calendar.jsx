import React, { useState } from "react";
import "./Calendar.css";
import { Outlet } from "react-router-dom";
import { march } from "./March";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function AjukanCuti({ show, handleClose, handleShow }) {
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
              <Form.Label className="form-label">Title</Form.Label>
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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function isLibur(jam_kerja) {
    if (jam_kerja === "Libur") return "date-box libur";
    return "date-box";
  }

  return (
    <div className="Page">
      <Outlet />
      <div className="content">
        <h1 className="title">
          March 2024 <span>Schedule</span>
        </h1>
        <hr />
        <div className="container">
          {march.map((date, i) => {
            const boxClassName = isLibur(date.jam_kerja);
            return (
              <div className={boxClassName} key={i} onClick={handleShow}>
                <h2 className="date">{date.tanggal}</h2>
                <p>{date.jam_kerja}</p>
              </div>
            );
          })}
        </div>
      </div>
      <AjukanCuti
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
    </div>
  );
}
