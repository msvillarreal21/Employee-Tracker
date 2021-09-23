const cTable = require('console.table');
class Role{
    constructor(id,title,salary,did)
    {
        this.id=id;
        this.title=title;
        this.salary=salary;
        this.did=did;
    }
    getID()
    {
        return this.id;
    }
    getTitle()
    {
        return this.title;
    }
    getSalary()
    {
        return this.salary;
    }
    getDid()
    {
        return this.did;
    }
    ViewRoles(connection)
    {
        let sqlQuery =`Select r.id AS ID, 
        r.title AS TITLE, r.salary AS SALARY, d.name AS DEPARTMENT
        from Role r LEFT JOIN Department d ON  r.department_id=d.id ORDER BY r.ID ASC`;
        connection.query(sqlQuery, (err, res) => {
        if (err) {throw err}
         console.table(res);
    })
    }
    addRole(connection,title,salary,dept)
{
    let role=[];
    role.push(title);
    role.push(salary);
    role.push(dept);
    let sqlQuery=`INSERT INTO role(title,salary,department_id) VALUES (?,?,?)`;
    connection.query(sqlQuery,role ,(err, res) => {
        if (err) throw err;});
}
updateRole(connection,newID,oldRole)
{
    connection.query(
        `UPDATE employee SET role_id = ${newID} WHERE id = ${oldRole}`, (err, res) => {
          if (err) throw err;
        }
      )
}

}
module.exports=Role;