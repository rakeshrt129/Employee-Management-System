package com.example.employees.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.employees.model.Employee;

// This interface connects Employee model to the database
// JpaRepository gives us all CRUD operations (save, findAll, delete, etc.)
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
