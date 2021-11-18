import React from "react";

function RightMain(props) {
  const student = props.studentInfo;

  return (
    <div className="rightmain">
      <div className="card">
        <img src="logo192.png" alt="BigCo Inc. logo" />
        <div className="container">
          <h4>
            <b>{student ? student.firstName : "No data"}</b>
          </h4>
          <p>{student ? student.lastName : "No data"}</p>
          <p>{student ? student.email : "No data"}</p>
        </div>
      </div>
    </div>
  );
}

export default RightMain;
