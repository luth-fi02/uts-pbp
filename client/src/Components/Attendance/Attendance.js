import React from "react";
import { Outlet } from "react-router-dom";
import "./Attendance.css";
import "../Page.css";
import Table from "react-bootstrap/Table";
import { attendanceData } from "./attendanceData.js";
import { employees } from "../Employees/EmployeesData.js";
import "./fonts/fonts.css";
import { Chart as ChartJS } from "chart.js/auto";
import { Line, Doughnut, Bar } from "react-chartjs-2";

const options = {
  title: {
    text: "Data Kehadiran Karyawan 6 Bulan Terakhir (%)",
    display: true,
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

export default function Attendance() {
  const data = {
    labels: ["Oktober", "November", "Desember", "Januari", "Februari", "Maret"],
    datasets: [
      {
        label: "Luthfi",
        data: [95, 90, 95, 88, 92, 89],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Muhammad",
        data: [92, 88, 94, 90, 93, 87],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Raihan",
        data: [93, 87, 91, 85, 89, 94],
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
      {
        label: "Raynaldi",
        data: [95, 91, 97, 93, 96, 92],
        backgroundColor: "rgba(43, 235, 98, .2)",
        borderColor: "rgba(43, 235, 98, 1)",
        borderWidth: 1,
      },
      {
        label: "Vincent",
        data: [88, 93, 89, 91, 94, 87],
        backgroundColor: "rgba(237, 110, 247, .2)",
        borderColor: "rgba(237, 110, 247,1)",
        borderWidth: 1,
      },
    ],
  };

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
            <tr
              className="thead-tr"
              style={{ fontFamily: "bold, sans-serif", fontSize: "2rem" }}
            >
              <th className="text-center align-middle px-5 py-4">Date</th>
              <th className="text-center align-middle px-5 py-4">Name</th>
              <th className="text-center align-middle px-5 py-4">Status</th>
              <th className="text-center align-middle px-5 py-4">
                Information
              </th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((a, i) => (
              <tr key={i}>
                <td
                  style={{ fontFamily: "metropolis-light" }}
                  className="ps-4 pe-5 py-4 fs-4"
                >
                  {i % 5 === 0 ? a.tanggal : ""}
                </td>
                <td
                  style={{ fontFamily: "metropolis-extralight" }}
                  className="ps-4 pe-5 py-4 fs-4"
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
                  className="px-5 py-4 fs-4 text-center align-middle"
                >
                  {a.status_kehadiran}
                </td>
                <td
                  style={{ fontFamily: "metropolis-extralight" }}
                  className="px-5 py-4 fs-4"
                >
                  {a.keterangan ? a.keterangan : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="chart-container">
        <div className="line-chart">
          <h2 className="line-chart-title">{options.title.text}</h2>
          <Line className="line" data={data} options={options}></Line>
        </div>
        <div className="bar-chart">
          <h2 className="bar-chart-title">Frekuensi kehadiran bulan Maret</h2>
          <Bar
            className="bar"
            data={{
              labels: ["Luthfi", "Muhammad", "Raihan", "Raynaldi", "Vincent"],
              datasets: [
                {
                  label: "Count",
                  data: [14, 13, 13, 13, 13],
                  backgroundColor: [
                    "rgba(43, 235, 98, .6)",
                    "rgba(75, 192, 192, .6)",
                    "rgba(255, 99, 132, .6)",
                    "rgba(255, 206, 86, .6)",
                    "rgba(237, 110, 247,.6)",
                  ],
                  borderColor: [
                    "rgba(43, 235, 98, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(255, 99, 132, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(237, 110, 247,1)",
                  ],
                  borderRadius: 5,
                },
              ],
            }}
          ></Bar>
        </div>
        <div className="doughnut-chart">
          <h2 className="doughnut-chart-title">
            Status Ketidakhadiran bulan Maret
          </h2>
          <Doughnut
            className="doughnut"
            data={{
              labels: ["Sakit", "Cuti", "Absen", "Telat"],
              datasets: [
                {
                  label: "Count",
                  data: [5, 4, 2, 2],
                  backgroundColor: [
                    "rgba(43, 235, 98, .6)",
                    "rgba(75, 192, 192, .6)",
                    "rgba(255, 99, 132, .6)",
                    "rgba(255, 206, 86, .6)",
                  ],
                  borderColor: [
                    "rgba(43, 235, 98, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(255, 99, 132, 1)",
                    "rgba(255, 206, 86, 1)",
                  ],
                  borderRadius: 5,
                },
              ],
            }}
          ></Doughnut>
        </div>
      </div>
    </div>
  );
}
