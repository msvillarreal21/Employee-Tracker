-- Add employee information into table--
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ('John', 'Doe', 1 , 1);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ('Mike', 'Chan', 2 , 1);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ('Ashley', 'Rodriguez', 3, 2);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ('Kevin', 'Tupik', 4, 2 );
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ('Malia', 'Brown', 5, 2);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ('Sarah', 'Lourd', null, 3);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ('Tom', 'Allen', null ,3);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ('Christian', 'Eckenrode', null, 3);

-- Add roles to table--
INSERT INTO role (title, salary, department_id)
VALUE ('Sales Lead', 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ('Lead Engineer', 120000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ('Lawyer', 190000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ('Software Engineer', 120000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ('Salesperson', 80000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ('Accountant', 125000, 4);
INSERT INTO role (title, salary, department_id)
VALUE ('Legal team lead', 250000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ('Lead Engineer', 150000, 2);

-- Add departments to table--
INSERT INTO department (name)
VALUE ('Sales');
INSERT INTO department (name)
VALUE('Engineering');
INSERT INTO department (name)
VALUE('Finance');
INSERT INTO department (name)
VALUE('Legal');