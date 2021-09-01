const db = require('./db/connection');
const express = require ('express');
const Routes = require('./routes');
const {startApp} = require('./runApp'); //add route to start inquirer/console.table



const PORT = process.env.PORT || 3001;
const app = express ();

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', Routes);


//Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

//connect the server after DB connection
db.connect(err => {
  if (err) throw err;
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

});

startApp();