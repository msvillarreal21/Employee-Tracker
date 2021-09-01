const express = require('express');
const router = express.Router();
const db = require('./../../db/connection');


//create a route to get all employees
router.get('/employees', (req, res) => {
    const sql = `SELECT employees.id, emplolyees.first_name, employees.last_name roles.title AS department, roles.salary AS salary, 
    concat(man.first_name, '', man.last_name) AS manager FROM employees emp 
    LEFT JOIN employees.mananager ON manager.id = employee.man_id
    LEFT JOIN roles on employee.role_id = roles.id 
    LEFT JOIN departments ON roles.department_id = departments.id`;
    db.query(sql, (err, rows) => {
        if(err) {
            res.status(500).json({ error: err.message });
            return;
        } 
        res.json({
            message: 'success',
            data: rows
        });
    });
});


//create a route to get an id for employees
router.get('/employees/:first_name/:last_name', (req, res) => {
    const sql =`SELECT id FROM employees WHERE first_name = ? AND last_name = ?`;
    const params = [req.params.first_name, req.params.last_name];

    db.query(sql, params, (err, rows) => {
        if(err) {
            res.status(500).json({ error: err.message });
            return;
        } 
        res.json({
            message: 'success',
            data: rows
        });
    }); 
});



//create a route to delete an employee
router.delete ('/employee/:id', (req, res) => {
    const sql= `DELETE FROM employees WHERE id = ?`;
    const params = [req.body.id];

    db.query (sql, params, (err, result) => {
        if (err) {
            res.status(400).json ({ error: err.message })
        } else if (!result.affectedRows) {
            res.json({
                message: 'Employee not fount'
            });
        } else {
            res.json ({
                message: 'Employee deleted ',
                changes: result.affectedRows,
                id: req.params.id
            });
        }
    });
});



//create route to add employyes 
router.post('/employee', ({body} ,res) => {
const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;

const params = [body.first_name, body.last_name, body.role_id, body.manager_id];

db.query(sql, params, (err, result) => {
    if (err) {
        res.status(400).json({ error: err.message });
        return;
    }
    res.json ({
        message: 'success',
        data: body
         });
    });
});


// create route to edit roles
router.put('/employee-role/:id', (req, res) => {
    const sql = `UPDATE employees SET role_id = ? WHERE id = ?`;
    const params = [req.body.role_id, req.params.id];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
        } else if (!result.affectedRows) {
            res.json({
                message: 'Employee not found'
            });
        } else {
            res.json({
                message: 'success',
                data: req.body,
                changes: result.affectedRows
            });
        }
    });
});

//export
module.exports = router;