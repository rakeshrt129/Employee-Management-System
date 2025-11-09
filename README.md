EMPLOYEE MANAGEMENT SYSTEM


OVERVIEW : 

The Employee Management System is a simple and user-friendly web application designed to manage employee details in an organization. It allows users to add, view, edit, and delete employee information easily — all from a clean and intuitive web interface.


FEATURES:


1.Add Employee – Add a new employee with ID, name, email, and department.


2.Edit Employee – Update existing employee details easily.


3.Delete Employee – Remove employees from the list instantly.


4.Validation – Prevents invalid input for name, email, or department.


5.Responsive Design – Clean and simple interface that works on all screen sizes.


6.In-Memory Database (H2) – Stores employee data temporarily (no external setup needed).



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


<img width="517" height="491" alt="image" src="https://github.com/user-attachments/assets/9c0ad7ef-a67b-4b86-a456-df045fbd6da0" />




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


1.Learned to connect a React frontend with a Spring Boot REST API
    
    
2.Implemented CRUD operations with H2 in-memory DB


3.Added form validation using simple JavaScript regex
    

4.Understood how to structure a full-stack project cleanly
    
    
5.Focused on clean UI + clear code, making it easy to maintain and extend
