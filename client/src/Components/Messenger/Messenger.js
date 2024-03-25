import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import "./Messenger.css";
import "../Page.css";
import { employees } from "../Employees/EmployeesData";
import SendIcon from "@mui/icons-material/Send";

function Messenger() {
  const workspace = [
    "📚 Library Apps Project",
    "🔐 Security Office Web Project",
    "🎨 Designer Team",
  ];

  const [messageBox, setMessageBox] = useState([
    {
      subject: employees[0].nama,
      message: [],
    },
    {
      subject: employees[1].nama,
      message: [],
    },
    {
      subject: employees[2].nama,
      message: [],
    },
    {
      subject: employees[3].nama,
      message: [],
    },
    {
      subject: employees[4].nama,
      message: [],
    },
  ]);

  const [subject, setSubject] = useState("");
  const [messageText, setMessageText] = useState("");

  function handleSubject(subject) {
    setSubject(subject);
  }

  function setSubjectEmpty() {
    if (subject === "") return "none";
    return "block";
  }

  function renderChat(subject) {
    const selectedMessageBox = messageBox.find(
      (box) => box.subject === subject
    );

    if (selectedMessageBox && selectedMessageBox.message) {
      return selectedMessageBox.message.map((message, i) => {
        return (
          <p
            key={i}
            className="chat animate__animated animate__fadeInUp animate__faster"
          >
            {message}
          </p>
        );
      });
    } else {
      return null;
    }
  }

  const chatBoxRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (messageText === "" || subject === "") return;

    const updatedMessageBox = messageBox.map((box) => {
      if (box.subject === subject) {
        return { ...box, message: [...box.message, messageText] };
      }
      return box;
    });

    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop =
        chatBoxRef.current.scrollHeight - chatBoxRef.current.clientHeight;
    }

    setMessageBox(updatedMessageBox);
    setMessageText("");
  }

  return (
    <div className="Page">
      <Outlet />
      <div className="messenger-content">
        <div className="person-list">
          <div className="workspace">
            <h4 className="workspace-title">Workspace</h4>
            <ul>
              {workspace.map((team, i) => (
                <li
                  key={i}
                  className="workspace-list"
                  onClick={() => handleSubject(team)}
                >
                  {team}
                </li>
              ))}
            </ul>
          </div>
          <div className="member">
            <h4 className="member-title">Direct Message</h4>
            <ul>
              {employees.map((member, i) => (
                <li
                  key={i}
                  className="member-list"
                  onClick={() => handleSubject(member.nama)}
                >
                  🟢 {member.nama}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="chat-container" style={{ display: setSubjectEmpty() }}>
          <div className="chat-header">
            <h2 className="dest-name">{subject}</h2>
            <p className="desc">You are now chatting with {subject}.</p>
          </div>
          <div className="chat-box" ref={chatBoxRef}>
            {renderChat(subject)}
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="type-box">
              <input
                type="text"
                placeholder="Start a Conversation"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
              />
              <SendIcon fontSize="large" className="send-message" onClick={handleSubmit} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Messenger;
