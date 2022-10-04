const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;
const app = express();


const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'office_db'
  },
  console.log(`Connected to the office_db database.`)
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

inquirer
  .prompt([
    {
      type: 'list',
      message: "What would you like to do?",
      name: 'start',
      options: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
    }
  ]);

