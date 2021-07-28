INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
('John', 'Doe', 1 , 1),
('Mike', 'Chan', 2 , 1),
('Ashley', 'Rodriguez', 3, 2),
('Kevin', 'Tupik', 4, 2 ),
('Malia', 'Brown', 5, 2),
('Sarah', 'Lourd', 6, 3),
('Tom', 'Allen', 7 ,3),
('Christian', 'Eckenrode', 8, 3);


INSERT INTO roles (title, salary, department_id)
VALUES
('Sales Lead', 100000, 1),
('Lead Engineer', 120000, 2),
('Lawyer', 190000, 3),
('Software Engineer', 120000, 2),
('Salesperson', 80000, 1),
('Accountant', 125000, 4),
('Legal team lead', 250000, 3),
('Lead Engineer', 150000, 2);

INSERT INTO departments (dept_name)
VALUES 
('Sales'),
('Engineering'),
('Finance'),
('Legal');