DROP DATABASE IF EXISTS department;
DROP DATABASE IF EXISTS role;
DROP DATABASE IF EXISTS employee;

USE employee;


CREATE TABLE department (
    id INTEGER PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INTEGER PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL (10,2) NOT NULL,
    department_id INTEGER,
    FOREIGN KEY(name), REFERENCES department(id) ON DELETE SET NULL
); 

CREATE TABLE employee (
    id INTEGER PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER
);