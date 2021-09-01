const express = require('express');
const router = express.Router();
const db = require('./../../db/connection');




//create a select all departments route  / router.get 
router.get('/departments', (req, res) => {
    const sql = `SELECT * FROM departments`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

//create a delete / router.delete
router.delete('/department/:id', (req, res) => {
    const sql = `DELETE FROM departments WHERE id = ?`;
    const params = [req.params.id];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.statusMessage(400).json({ error: res.message });
        } else if (!result.affectedRows) {
            res.json({
                message: 'Department not found'
            });
        } else {
            res.json({
                message: 'deleted',
                changes: result.affectedRows,
                id: req.params.id
            });
        }
    });
});


//create a route to add/ router. post
router.post('/department', ({ body }, res) => {

    const sql = `INSERT INTO departments (dept_name) VALUES (?)`;
    const params = [body.dept_name];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: body
        });
    });
});


//create a route to get an id / router.get
router.get('/department/:dept_name', (req, res) => {
    const sql = `SELECT id FROM departments WHERE dept_name = ?`;
    const params = [req.params.dept_name];

    db.query(sql, params, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});


//export routes 
module.exports = router;