import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddEmployee() {
  const [emp, setEmp] = useState({ id: "", name: "", email: "", department: "" });
  const navigate = useNavigate();

  // handle form input
  const handleChange = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };

  // validation helper
  const validateInputs = () => {
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const deptRegex = /^[A-Za-z\s]+$/;
    const idRegex = /^[0-9]+$/;

    if (!emp.id || !emp.name || !emp.email || !emp.department) {
      alert(" Please fill all fields before saving.");
      return false;
    }
    if (!idRegex.test(emp.id)) {
      alert(" Employee ID must contain numbers only.");
      return false;
    }
    if (!nameRegex.test(emp.name)) {
      alert(" Invalid Name! Please use letters and spaces only.");
      return false;
    }
    if (!emailRegex.test(emp.email)) {
      alert(" Invalid Email! Please enter a valid email address.");
      return false;
    }
    if (!deptRegex.test(emp.department)) {
      alert(" Invalid Department! Use letters only (no symbols or numbers).");
      return false;
    }

    return true;
  };

  // save employee
  const saveEmployee = () => {
    if (!validateInputs()) return;

    axios
      .post("http://localhost:8080/api/employees", emp)
      .then(() => {
        alert(" Employee added successfully!");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        alert(" Something went wrong while saving. Please check backend.");
      });
  };

  return (
    <div>
      <h3>Add Employee</h3>

      <input
        name="id"
        placeholder="Employee ID"
        value={emp.id}
        onChange={handleChange}
      />
      <input
        name="name"
        placeholder="Name"
        value={emp.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={emp.email}
        onChange={handleChange}
      />
      <input
        name="department"
        placeholder="Department"
        value={emp.department}
        onChange={handleChange}
      />

      <button onClick={saveEmployee}>Save Employee</button>
    </div>
  );
}

export default AddEmployee;
