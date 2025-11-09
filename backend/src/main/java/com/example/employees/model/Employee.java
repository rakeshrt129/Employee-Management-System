package com.example.employees.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

// This class represents one employee in our system
@Entity
public class Employee {

    @Id
    private Long id;           // Employee ID (entered manually now)
    private String name;       // Employee name
    private String email;      // Employee email
    private String department; // Employee department

    // Default constructor (needed by Spring)
    public Employee() {}

    // Constructor with all fields
    public Employee(Long id, String name, String email, String department) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.department = department;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }
}
