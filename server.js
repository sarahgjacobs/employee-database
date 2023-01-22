const mysql = require('mysql2');
const inquirer = require('inquirer');
const PORT = 3006;

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'employee_db',
  });
  
  connection.connect(err => {
    if (err) throw err;
    console.log("WELCOME TO PAWNEE CITY HALL EMPLOYEE TRACKER");
    startMenu();
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
            addManager()
        } else if (answer.direction === 'View all roles') {
            addEngineer()
        } else if (answer.direction === 'View all employees') {
            addIntern()
        } else if (answer.direction === 'Add a department') {
            addIntern()
        }else if (answer.direction === 'Add a role') {
            addIntern()
        }else if (answer.direction === 'Add an employee') {
            addIntern()
        }else if (answer.direction === 'Update an employee role') {
            addIntern()
        } else {
            writeHTML();
        }
})
};
