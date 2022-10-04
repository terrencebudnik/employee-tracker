const inquirer = require('inquirer'); 


inquirer
    .prompt([
    {
        type: 'list',
        message: "What would you like to do?",
        name: 'start', 
        options: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
    }
])
    .then((data)=> {

        console.log('success')
    })
