import React from "react";
function App() {
  return (
    <>
        <div className="header">
          <span>
            <h4 style={{ display: "inline" }}>Student Details</h4>
          </span>

          <span style={{ float: "right", fontStyle: "italic" }}>
            Version: v1
          </span>
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
        <div className="body">
          <div className="leftlist">
            <div>
              <ul>
                <li>The Flight</li>
                <li>The City</li>
                <li>The Island</li>
                <li>The Food</li>
                <li>The Flight</li>
                <li>The City</li>
                <li>The Island</li>
                <li>The Food</li>
                <li>The Flight</li>
                <li>The City</li>
                <li>The Island</li>
                <li>The Food</li>
                <li>The Flight</li>
                <li>The City</li>
                <li>The Island</li>
                <li>The Food</li>
                <li>The Flight</li>
                <li>The City</li>
                <li>The Island</li>
                <li>The Food</li>
                <li>The Flight</li>
                <li>The City</li>
                <li>The Island</li>
                <li>The Food</li>
              </ul>
            </div>
          </div>
          <div className="rightmain">
            <div class="card">
              <img src="logo192.png" alt="BigCo Inc. logo" />
              <div class="container">
                <h4>
                  <b>John Doe</b>
                </h4>
                <p>Architect & Engineer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer"></div>
    </>
  );
}

export default App;
