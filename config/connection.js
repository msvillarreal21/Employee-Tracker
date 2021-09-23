const mysql = require('mysql2');
require('dotenv').config();

//connect to database
const connection = mysql.createConnection (
    {
        host:'localhost',
        //Your Mysql username,
        user: 'root',
        //Your Mysql password,
        password: 'A1P12J2021!',
        database: 'challenge'
    },
    console.log('Connected to the challenge database.')
);

module.exports = connection;