import React from "react";
import { Outlet } from "react-router-dom";
import "./Attendance.css";
import "../Page.css";
import Table from "react-bootstrap/Table";
import { attendanceData } from "./attendanceData.js";
import { employees } from "../Employees/EmployeesData.js";

export default function Attendance() {
  function setName(id) {
    switch (id) {
      case "1":
        return employees[0].nama;
      case "2":
        return employees[1].nama;
      case "3":
        return employees[2].nama;
      case "4":
        return employees[3].nama;
      case "5":
        return employees[4].nama;
      default:
        return "";
    }
  }

  return (
    <div className="Page">
      <Outlet />
      <div className="attendance-content">
        <h1 className="attendance-title">Employee Attendance Tracker</h1>
        <h2 className="attendance-date">March 2024 recap of attendance</h2>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr style={{ fontFamily: "bold", fontSize: "1.3rem" }}>
              <th className="text-center align-middle px-5 py-3">Date</th>
              <th className="text-center align-middle px-5 py-3">Name</th>
              <th className="text-center align-middle px-5 py-3">Status</th>
              <th className="text-center align-middle px-5 py-3">
                Information
              </th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((a, i) => (
              <tr key={i}>
                <td
                  style={{ fontFamily: "metropolis-light" }}
                  className="ps-3 pe-5 py-3"
                >
                  {i % 5 === 0 ? a.tanggal : ""}
                </td>
                <td
                  style={{ fontFamily: "metropolis-extralight" }}
                  className="ps-3 pe-5 py-3"
                >
                  {setName(a.id_data_pegawai)}
                </td>
                <td
                  style={
                    a.status_kehadiran === "Hadir"
                      ? {
                          fontFamily: "metropolis-extralight",
                          color: "#7FFF00",
                        }
                      : { fontFamily: "metropolis-extralight", color: "red" }
                  }
                  className="px-5 py-3 text-center align-middle"
                >
                  {a.status_kehadiran}
                </td>
                <td
                  style={{ fontFamily: "metropolis-extralight" }}
                  className="px-3 py-3"
                >
                  {a.keterangan ? a.keterangan : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
