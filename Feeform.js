import React, { useState } from "react";

const Feeform = ({ updateStudentFees }) => {
  const [student, setStudent] = useState({
    id: "",
    name: "",
    feePaid: "",
    feeDue: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    updateStudentFees({
      ...student,
      id: Number(student.id),
      feePaid: Number(student.feePaid),
      feeDue: Number(student.feeDue),
    });
    setStudent({ id: "", name: "", feePaid: "", feeDue: "" });
  };

  return (
    <div>
      <form
        style={{ marginLeft: "250px", marginTop: "50px", marginBottom: "50px" }}
        onSubmit={handleSubmit}
      >
        <input
          style={{ height: "40px", padding: "10px", border: "none" }}
          type="text"
          name="id"
          placeholder="Enter Student id"
          value={student.id}
          onChange={handleChange}
          required
        />
        <input
          style={{ height: "40px", padding: "10px", border: "none" }}
          type="text"
          name="name"
          placeholder="Enter Student Name"
          value={student.name}
          onChange={handleChange}
          required
        />
        <input
          style={{ height: "40px", padding: "10px", border: "none" }}
          type="number"
          name="feePaid"
          placeholder="Fees Paid"
          value={student.feePaid}
          onChange={handleChange}
          required
        />
        <input
          style={{ height: "40px", padding: "10px", border: "none" }}
          type="text"
          name="feeDue"
          placeholder="Fees Due"
          value={student.feeDue}
          onChange={handleChange}
          required
        />
        <button
          style={{
            height: "40px",
            padding: "10px",
            border: "2px solid blue",
            borderRadius: "3px",
            marginLeft: "40px",
          }}
        >
          Add/Update
        </button>
      </form>
    </div>
  );
};

export default Feeform;
