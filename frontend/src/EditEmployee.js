import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditEmployee() {
  const { id } = useParams(); // Get employee ID from URL
  const navigate = useNavigate();
  const [emp, setEmp] = useState({
    id: "",
    name: "",
    email: "",
    department: "",
  });

  // Fetch employee details when page loads
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/employees/${id}`)
      .then((res) => setEmp(res.data))
      .catch((err) => console.error(" Error fetching employee:", err));
  }, [id]);

  // Handle field input changes
  const handleChange = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };

  // Validation before updating
  const validateInputs = () => {
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const deptRegex = /^[A-Za-z\s]+$/;

    if (!emp.name || !emp.email || !emp.department) {
      alert(" Please fill all fields before updating.");
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

  // Save updated employee
  const updateEmployee = () => {
    if (!validateInputs()) return;

    axios
      .put(`http://localhost:8080/api/employees/${id}`, emp)
      .then(() => {
        alert(" Employee updated successfully!");
        navigate("/");
      })
      .catch((err) => {
        console.error(" Error updating employee:", err);
        alert(" Something went wrong. Please try again.");
      });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h3>Edit Employee</h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px", margin: "auto" }}>
        <input
          name="id"
          value={emp.id}
          disabled
          style={{ backgroundColor: "#f0f0f0", cursor: "not-allowed" }}
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
        <button onClick={updateEmployee}>Update Employee</button>
      </div>
    </div>
  );
}

export default EditEmployee;
