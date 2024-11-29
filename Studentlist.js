import React from "react";

const Studentlist = ({ students }) => {
  return (
    <div style={{ textAlign: "center", marginBottom: "50px" }}>
      <h2 style={{ textWeight: "bold", color: "red" }}>Student List</h2>
      <ul style={{ marginRight: "40px" }}>
        {students.map((student) => (
          <li style={{ marginBottom: "12px" }} key={student.id}>
            {student.name}: Paid &#8377;{student.feePaid}, Due &#8377;
            {student.feeDue}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Studentlist;
