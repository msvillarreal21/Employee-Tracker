const express = require('express');
const { restoreDefaultPrompts } = require('inquirer');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');


//create a route to get all roles
router.get('/roles', (req, res) => {
    const sql = `SELECT * FROM roles.id, title, departments.depart_name AS department, salary FROM roles LEFT JOIN departments
    on roles.department_id = departments.id;`;
    db.query(sql, (err, rows) => {
        if(err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json ({ 
            message: "success",
            data: rows
        });
    });
});

//create a route to get an id for employee roles
router.get('/role/:title', (req, res) => {
    const sql = `SELECT id FROM roles WHERE title = ?`;
    const params = [req.body.title];

    db.query(sql, params, (err, rows) => {
        if(err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json ({ 
            message: "success",
            data: rows
        });
    });
});


//create a route to delete a role
router.delete('/roles/:id', (req, res) => {
    const sql = `DELETE FROM roles WHERE id = ?`;
    const params = [req.params.id];

    db.query(sql, params, (err, rows) => {
        if(err) {
            res.status(500).json({ error: err.message });
        } else if (!result.affectedRows) {
            res.json ({
                message: "No role selected"
            });
        } else {
            res.json ({
                message: 'Role deleted',
                changes: result.affectedRows,
                id: req.params.id
            });
        }

    });
});



//create route to add employee role
router.post('/role', ({ body }, res) => {
    const error = inputCheck( body, 'title', 'salary', 'department_id');
    if (errors) {
        res.status(400).json({ error: err.message });
        return;
    }
    const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`;
    const params = [body.title, body.salary, body.department_id];

    db.query(sql, params, (err, rows) => {
        if(err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json ({ 
            message: "success",
            data: rows
        });
    });
});
    

//export routes
module.exports = router;