import React, { useState } from "react";
import Feeform from "./Feeform";
import Feesummary from "./Feesummary";
import Studentlist from "./Studentlist";

const Feesmanagement = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Raghul", feePaid: 5000, feeDue: 5000 },
    { id: 2, name: "Sanjay", feePaid: 3000, feeDue: 7000 },
  ]);
  const updateStudentFees = (student) => {
    setStudents((prevStudents) => {
      const existingStudents = prevStudents.find((s) => s.id === student.id);
      if (existingStudents) {
        return prevStudents.map((s) =>
          s.id === student.id ? { ...s, ...student } : s
        );
      }
      return [...prevStudents, student];
    });
  };

  return (
    <div>
      <Feeform updateStudentFees={updateStudentFees} />
      <Feesummary students={students} />
      <Studentlist students={students} />
    </div>
  );
};

export default Feesmanagement;
