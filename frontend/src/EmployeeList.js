import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/employees")
      .then((res) => setEmployees(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const deleteEmployee = (id) => {
    axios.delete(`http://localhost:8080/api/employees/${id}`).then(() => {
      setEmployees(employees.filter((e) => e.id !== id));
    });
  };

  return (
    <div>
      <h3>Employee List</h3>
      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th><th>Name</th><th>Email</th><th>Department</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.department}</td>
                <td>
                  <Link to={`/edit/${emp.id}`} style={{ marginRight: "10px" }}>
                    Edit
                  </Link>
                  <button onClick={() => deleteEmployee(emp.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default EmployeeList;
