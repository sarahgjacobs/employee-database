const mysql = require('mysql2');
const inquirer = require('inquirer');
const PORT = 3006;

// app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));


const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'ineedanap',
    database: 'employee_db',
  });
  
  connection.connect(err => {
    if (err) throw err;
    console.log("Welcome to the Company's database:");
    promptMenu();
  });

const promptMenu = () => {
    inquirer.prompt({
        name: 'menu',
        type: 'list',
        choices: [
            'View all departments', 
            'View all roles', 
            'View all employees', 
            'Add a department', 
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Done'
        ]
    }).then(answer => {
        if(answer.direction === 'View all departments'){
            viewDepartment()
        } else if (answer.direction === 'View all roles') {
            viewRoles()
        } else if (answer.direction === 'View all employees') {
            viewEmployees()
        } else if (answer.direction === 'Add a department') {
            addDepartment()
        }else if (answer.direction === 'Add a role') {
            addRole()
        }else if (answer.direction === 'Add an employee') {
            addEmployee()
        }else if (answer.direction === 'Update an employee role') {
            updateEmployee()
        } else {
            connection.end();
        }
})
};

const viewDepartment = () => {

    promptMenu();
}
