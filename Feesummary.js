import React from "react";

const Feesummary = ({ students }) => {
  const totalPaid = students.reduce((sum, student) => sum + student.feePaid, 0);
  const totalDue = students.reduce((sum, student) => sum + student.feeDue, 0);
  return (
    <div style={{ textAlign: "center", marginBottom: "50px" }}>
      <h2 style={{ color: "red" }}>Fee Summary</h2>
      <p>Total Fees Paid: &#8377;{totalPaid}</p>
      <p>Total Fees Due: &#8377;{totalDue}</p>
    </div>
  );
};

export default Feesummary;
