import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h2>Employee Management System</h2>
        <nav>
          <Link to="/">View Employees</Link> | <Link to="/add">Add Employee</Link>
        </nav>

        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/edit/:id" element={<EditEmployee />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
