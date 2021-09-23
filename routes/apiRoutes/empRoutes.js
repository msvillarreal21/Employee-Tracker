const cTable = require('console.table');
const connection = require('./../../config/connection');

class Employee
{
constructor(id,fn,ln,rid,mid)
{
this.id=id;
this.fn=fn;
this.ln=ln;
this.rid=rid;
this.mid=mid;
}
getID()
{
    return this.id;
}
getfirstName()
{
    return this.fn;
}
getLastName()
{
    return this.ln;
}
getrid()
{
    return this.rid;
}
getMgrID()
{
    return this.mid;
}
ViewEmployee(connection)
{
    let sqlQuery =`Select e.id AS ID,CONCAT(e.first_name,' ', e.last_name) AS NAME, 
    CONCAT(m.first_name,' ',m.last_name) AS MANAGER,
    r.title AS TITLE, r.salary AS SALARY, d.name AS DEPARTMENT
    from employee e LEFT JOIN employee m ON  m.id=e.manager_id
    inner JOIN role r inner JOIN Department d ON r.id=e.role_id AND d.id=r.department_id ORDER BY E.ID ASC`;
    connection.query(sqlQuery, (err, res) => {
    if (err) {throw err}
     console.table(res);
})
}
ViewEmployeeByMgr(connection)
{
    let sqlQuery =`Select e.id AS ID,CONCAT(e.first_name,' ', e.last_name) AS EmployeeNAME, 
    CONCAT(m.first_name,' ',m.last_name) AS MANAGER
    from employee e LEFT JOIN employee m ON m.id=e.manager_id
    ORDER BY e.ID ASC`;
    connection.query(sqlQuery, (err, res) => {
    if (err) {throw err}
     console.table(res);
})
}
ViewEmployeeByDpt(connection)
{
    let sqlQuery =`Select e.id AS ID,CONCAT(e.first_name,' ', e.last_name) AS NAME, 
    d.name AS DEPARTMENT from employee e LEFT JOIN role r ON r.id=e.role_id LEFT JOIN department d ON d.id=r.department_id ORDER BY e.ID ASC`;
    connection.query(sqlQuery, (err, res) => {
    if (err) {throw err}
     console.table(res);
})
}
addEmployee(connection,fn,ln,rID,mgrID)
{
    let emp=[];
    emp.push(fn);
    emp.push(ln);
    emp.push(rID);
    emp.push(mgrID);
    console.log(emp)
    let sqlQuery=`INSERT INTO Employee(first_name,last_name,role_id,manager_id) VALUES (?,?,?,?)`;
    connection.query(sqlQuery,emp ,(err, res) => {
        if (err) throw err;});
}
DeleteEmp(connection,employeeID){
    connection.query(`DELETE FROM employee WHERE id = ${employeeID}`, (err, res) => {
        console.table(response);
});
}

updateMgr(connection,newMgr,oldMgr)
{
    connection.query(
        `UPDATE employee SET manager_id = ${newMgr} WHERE id = ${oldMgr}`, (err, res) => {
          if (err) throw err;
        }
      )
}
}
module.exports=Employee;