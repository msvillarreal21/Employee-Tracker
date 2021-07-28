const mysql = require('mysql2');

//connect to database
const db = mysql.createConnection (
    {
        host:'localhost',
        //Your Mysql username,
        user: 'root',
        //Your Mysql password,
        password: 'A1P12J2021!',
        database: 'challange'
    },
    console.log('Connected to the challenge database.')
);

module.exports = db;