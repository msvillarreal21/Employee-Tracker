--Add employee information into table--
INSERT INTO employees (first_name, last_name, manager_id, role_id)
VALUES ('John', 'Doe', 1 , 1);
INSERT INTO employees (first_name, last_name, manager_id, role_id)
VALUES ('Mike', 'Chan', 2 , 1);
INSERT INTO employees (first_name, last_name, manager_id, role_id)
VALUES ('Ashley', 'Rodriguez', 3, 2);
INSERT INTO employees (first_name, last_name, manager_id, role_id)
VALUES ('Kevin', 'Tupik', 4, 2 );
INSERT INTO employees (first_name, last_name, manager_id, role_id)
VALUES ('Malia', 'Brown', 5, 2);
INSERT INTO employees (first_name, last_name, manager_id, role_id)
VALUES ('Sarah', 'Lourd', null, 3);
INSERT INTO employees (first_name, last_name, manager_id, role_id)
VALUES ('Tom', 'Allen', null ,3);
INSERT INTO employees (first_name, last_name, manager_id, role_id)
VALUES ('Christian', 'Eckenrode', null, 3);

--Add roles to table--
INSERT INTO roles (title, salary, department_id)
VALUES ('Sales Lead', 100000, 1);
INSERT INTO roles (title, salary, department_id)
VALUES ('Lead Engineer', 120000, 2);
INSERT INTO roles (title, salary, department_id)
VALUES ('Lawyer', 190000, 3);
INSERT INTO roles (title, salary, department_id)
VALUES ('Software Engineer', 120000, 2);
INSERT INTO roles (title, salary, department_id)
VALUES ('Salesperson', 80000, 1);
INSERT INTO roles (title, salary, department_id)
VALUES ('Accountant', 125000, 4);
INSERT INTO roles (title, salary, department_id)
VALUES ('Legal team lead', 250000, 3);
INSERT INTO roles (title, salary, department_id)
VALUES ('Lead Engineer', 150000, 2);

--Add departments to table--
INSERT INTO departments (dept_name)
VALUES ('Sales');
INSERT INTO departments (dept_name)
VALUES('Engineering');
INSERT INTO departments (dept_name)
VALUES('Finance');
INSERT INTO departments (dept_name)
VALUES('Legal');