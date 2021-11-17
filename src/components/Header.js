import React from "react";

function Header() {
  return (
    <div className="header">
      <span>
        <h4 style={{ display: "inline" }}>Student Details</h4>
      </span>

      <span style={{ float: "right", fontStyle: "italic" }}>Version: v1</span>
      <span
        style={{
          float: "right",
          marginRight: "20px",
          cursor: "pointer",
          color: "#27277e",
        }}
      >
        Add Student
      </span>
      <span
        style={{
          float: "right",
          marginRight: "20px",
          cursor: "pointer",
          color: "#27277e",
        }}
      >
        View Student
      </span>
    </div>
  );
}

export default Header;
