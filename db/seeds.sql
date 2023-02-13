USE employee_db;
INSERT INTO department (dept_name) VALUES ('HR'), ('Engineering'), ('Sales');
INSERT INTO role (title, salary, dept_id) VALUES ('Human Resources Manager', 75000, 1), ('Engineer', 100000, 2), ('Sales Person', 60000, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jimmy', 'Jonh', 1, null), ('John', 'Jimmy', 2, 1), ('Sally', 'Sales', 3, 1);