import React from "react";

function leftList(props) {
  let students = props.students;
  const selectOne = props.selectOne;

  const allData = () => {
    return students.map((student) => (
      <li
        onClick={() => {
          selectOne(student);
        }}
        key={student.id}
      >
        {student.firstName}
      </li>
    ));
  };

  return (
    <div className="leftlist">
      <div>
        <ul>{students != null ? allData() : "No data"}</ul>
        {/* <ul>{students != null ? allData() : "No data"}</ul> */}
      </div>
    </div>
  );
}

export default leftList;
