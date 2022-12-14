-- USE office_db;
DROP DATABASE IF EXISTS employeeTracker_DB;
CREATE DATABASE employeeTracker_DB;
USE employeeTracker_DB;

CREATE TABLE department (
   id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
   id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
   title VARCHAR(30) NOT NULL,
   salary DECIMAL NOT NULL,
   department_id INT NOT NULL,
   FOREIGN KEY (department_id)
   REFERENCES department(id)
);

CREATE TABLE employee (
   id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
   first_name VARCHAR(30) NOT NULL,
   last_name VARCHAR(30) NOT NULL,
   role_id INT NOT NULL,
   manager_id INT REFERENCES employee(id),
   FOREIGN KEY (role_id) 
   REFERENCES role(id)
);