EMPLOYEE MANAGEMENT SYSTEM


OVERVIEW : 

The Employee Management System is a simple and user-friendly web application designed to manage employee details in an organization. It allows users to add, view, edit, and delete employee information easily — all from a clean and intuitive web interface.


FEATURES:
    Add Employee – Add a new employee with ID, name, email, and department.
    Edit Employee – Update existing employee details easily.
    Delete Employee – Remove employees from the list instantly.
    Validation – Prevents invalid input for name, email, or department.
    Responsive Design – Clean and simple interface that works on all screen sizes.
    In-Memory Database (H2) – Stores employee data temporarily (no external setup needed).



TECH STACK:

-------------------------------------------------------
|    Layer       | Technology Used                    |
| -------------- | ---------------------------------- |
|   Frontend     | React.js, Axios, HTML, CSS         |
|   Backend      | Java, Spring Boot, Spring Data JPA |
|   Database     | H2 In-Memory Database              |
|   Build Tool   | Maven                              |
|   API Calls    | RESTful APIs using Axios           |
-------------------------------------------------------


FOLDER STRUCTURE:


Employee Management System/
│
├── backend/
│   ├── src/
│   │   ├── main/java/com/example/employees/
│   │   │   ├── EmployeeManagementApplication.java   → Main entry point
│   │   │   ├── controller/EmployeeController.java    → REST APIs for CRUD
│   │   │   ├── model/Employee.java                   → Employee data model
│   │   │   └── repository/EmployeeRepository.java    → JPA interface
│   │   └── resources/application.properties          → H2 DB config
│   └── pom.xml                                       → Maven dependencies
│
├── frontend/
│   ├── src/
│   │   ├── App.js                    → Main React app
│   │   ├── App.css                   → Styling
│   │   ├── AddEmployee.js            → Add new employee
│   │   ├── EditEmployee.js           → Edit employee details
│   │   ├── EmployeeList.js           → Display all employees
│   │   └── index.js                  → React entry point
│   ├── package.json                  → Frontend dependencies
│   └── public/index.html             → HTML container
│
└── README.md                         → Project description



HOW TO RUN THE PROJECT:

Step 1: Start the Backend
1.Open a terminal and navigate to: cd backend
2.Run the Spring Boot server: mvn spring-boot:run
3.The backend will start at: http://localhost:8080

Step 2: Start the Frontendcd frontend
1.Open another terminal and navigate to: cd frontend
2.Install dependencies: npm install
3.Start the React app: npm start
4.The frontend will open automatically at: http://localhost:3000


EXAMPLE VALIDATIONS :

----------------------------------------------------------------------------------------------
| Field          | Rule                         | Example                                     |
| -------------- | ---------------------------- | ------------------------------------------- |
|   ID           | Only numbers allowed         | 101, 202, etc.                              |
|   Name         | Letters and spaces only      | Xyz                                         |
|   Email        | Must be a valid email format | xyz@gmail.com                               |
|   Department   | Letters only                 | abc                                         |
-----------------------------------------------------------------------------------------------

If any invalid value is entered, the app shows a friendly alert message.



LEARNING HIGHLIGHTS :

    Learned to connect a React frontend with a Spring Boot REST API
    Implemented CRUD operations with H2 in-memory DB
    Added form validation using simple JavaScript regex
    Understood how to structure a full-stack project cleanly
    Focused on clean UI + clear code, making it easy to maintain and extend