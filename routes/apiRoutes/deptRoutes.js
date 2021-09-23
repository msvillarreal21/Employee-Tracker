const cTable = require('console.table');

class Department {
    constructor (NAME)
    {
        this.Name=NAME;
    }

    //to get the department name
    getDeptName()
    {
        return this.Name;
    }

    ViewDepartment(connection)
    {
        let sqlQuery =`Select id AS ID,name as DEPARTMENT from department`;
        connection.query(sqlQuery, (err, res) => {
        if (err) {throw err}
         console.table(res);
    })
    }
    
    //Add new Department
    AddDepartment(connection,Name)
    {
        let sqlQuery=`INSERT INTO department (name) VALUES (?);`
        connection.query(sqlQuery, Name,(err, res) => {
            if (err) throw err;});
      }
     
    DeleteDepartment(connection,Name) 
     {
      let sqlQuery= `DELETE FROM DEPARTMENT WHERE name=?`;
      connection.query(sqlQuery,name,(err,res)=>
      {
        if (err) throw err;
      })
     }  
}
    
    
    module.exports=Department;