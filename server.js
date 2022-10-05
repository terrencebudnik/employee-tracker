const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'employeeTracker_DB'
  }
);

db.connect(function (err) {
  if (err) throw err
  console.log("MySQL Connected")
  menu()
})

const menu = () => {
  return inquirer.prompt([
    {
      name: 'start',
      type: 'list',
      message: "What would you like to do?",
      choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"],
    },
  ]).then(function (answer) {
    switch (answer.start) {
      case "View all departments":
        console.log(answer.start)
        viewAllDepartments()
        break;

      case "View all roles":
        console.log(answer.start)
        viewAllRoles()
        break;

      case "View all employees":
        console.log(answer.start)
        viewAllEmployees()
        break;

      case "Add a department":
        console.log(answer.start)
        addDepartment()
        break;

      case "Add a role":
        console.log(answer.start)
        addRole()
        break;

      case "Add an employee":
        console.log(answer.start)
        addEmployee()
        break;
    }
  });
}

const viewAllDepartments = () => {
  const query = "SELECT * FROM department"
  db.query(query,
    function (err, res) {
      if (err) throw err
      console.table(res)
      menu()
    })
}


const viewAllRoles = () => {
  const query = "SELECT * FROM role"
  db.query(query,
    function (err, res) {
      if (err) throw err
      console.table(res)
      menu()
    })
}

const viewAllEmployees = () => {
  const query = "SELECT * FROM employee"
  db.query(query,
    function (err, res) {
      if (err) throw err
      console.table(res)
      menu()
    })
}

const addDepartment = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "addDepartment",
      message: "What department do you want to add?"
    }]).then(function (res) {
      const query = "INSERT INTO department SET ?"
      db.query(
        query, {
        name: res.addDepartment
      }
      )
      console.log(`Added ${res.addDepartment} to departments`)
      menu()
    })
}

const addRole = () => {
  // roleName, roleSalary, roleDepartment
  inquirer.prompt([
    {
      type: "input",
      name: "roleName",
      message: "What is the name of this role?"
    },
    {
      type: "input",
      name: "roleSalary",
      message: "What is the salary for this role?"
    },
    {
      type: "input",
      name: "roleId",
      message: "What is the department ID for this role?"
    }
  ]).then(function (res) {
    // update query for role
    const query = "INSERT INTO role SET ?"
    db.query(
      query, {
      // update for roleName, roleSalary, roleDepartment
      title: res.roleName,
      salary: res.roleSalary,
      department_id: res.roleId
    }
    )
    console.log(`Added ${res.addRole} to role`)
    menu()
  })
}

const addEmployee = () => {
  // roleName, roleSalary, roleDepartment
  inquirer.prompt([
    {
      type: "input",
      name: "employeeFirstName",
      message: "What is the first name of this employee?"
    },
    {
      type: "input",
      name: "employeeLastName",
      message: "What is the last name for this employee?"
    },
    {
      type: "input",
      name: "employeeRoleId",
      message: "What is the department ID for this employee?"
    },
    {
      type: "input",
      name: "managerId",
      message: "What is the manager's ID for this employee?"
    }

  ]).then(function (res) {
    // update query for role
    const query = "INSERT INTO employee SET ?"
    db.query(
      query, {
      // update for roleName, roleSalary, roleDepartment
      first_name: res.employeeFirstName,
      last_name: res.employeeLastName,
      role_id: res.employeeRoleId,
      manager_id: res.managerId

    }
    )
    console.log(`Added ${res.addEmployee} to employee`)
    menu()
  })
}
