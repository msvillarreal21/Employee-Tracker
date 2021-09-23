-- Add departments to table--
INSERT INTO department (name)
VALUE ('Sales');
INSERT INTO department (name)
VALUE('Engineering');
INSERT INTO department (name)
VALUE('Finance');
INSERT INTO department (name)
VALUE('Legal');

-- Add roles to table--
INSERT INTO role (title, salary, department_id)
VALUE ('Sales Lead', 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ('Lead Engineer', 120000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ('Lawyer', 190000, 4);
INSERT INTO role (title, salary, department_id)
VALUE ('Software Engineer', 120000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ('Salesperson', 80000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ('Accountant', 125000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ('Legal team lead', 250000, 4);


-- Add employee information into table--
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ('John', 'Doe', null , 1);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ('Mike', 'Chan', null , 2);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ('Ashley', 'Rodriguez', null, 3);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ('Kevin', 'Tupik', 1, 4 );
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ('Malia', 'Brown', 4, 5);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ('Sarah', 'Lourd', 1, 6);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ('Tom', 'Allen', 2 ,7);

