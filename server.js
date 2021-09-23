const connection = require("./config/connection")
const chalk = require('chalk');
const figlet = require('figlet');
const cTable = require('console.table');
const inquirer = require("inquirer");

const Employee = require('./routes/apiRoutes/empRoutes')
const Department = require("./routes/apiRoutes/deptRoutes");
const Role = require("./routes/apiRoutes/roleRoutes")
//========================================================//
//================== CONNECTING TO DB ====================//
//========================================================//
connection.connect((error) => {
    if (error) throw error;
    app();
});

//========================================================//
//======================= HEADER =========================//
//========================================================//
const header = () => {
    console.log(``);
    console.log(chalk.magenta.bold(`====================================================================================`));
    console.log(chalk.yellowBright.bold(`************************************************************************************`));

    console.log(chalk.magenta.bold(`====================================================================================`));

    console.log(``);
    console.log(chalk.yellowBright.bold(figlet.textSync('Employee Tracker')));
    console.log(``);
    console.log(`                                                            ` + chalk.magenta.bold('Created By: Maria Villarreal'));
    console.log(``);
    console.log(chalk.magenta.bold(`====================================================================================`));
    console.log(chalk.yellowBright.bold(`************************************************************************************`));
    console.log(chalk.magenta.bold(`====================================================================================`));
}

const tHeader = (heading) => {
    console.log(``);
    console.log(``);
    console.log(chalk.yellowBright.bold(`====================================================================================`));
    console.log(`                              ` + chalk.magenta.bold(heading));
    console.log(chalk.yellow.bold(`====================================================================================`));
}
//========================================================//
//==================== PROMPT USER =======================//
//========================================================//
function promptUser() {
    inquirer.prompt(
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                "VIEW ALL EMPLOYEES",
                "VIEW ALL DEPARTMENTS",
                "VIEW ALL ROLES",
                "VIEW EMPLOYEES BY MANAGER",
                "VIEW EMPLOYEES BY DEPARTMENT",
                "ADD A DEPARTMENT",
                "ADD A ROLE",
                "ADD AN EMPLOYEE",
                "UPDATE AN EMPLOYEE'S ROLE",
                "UPDATE EMPLOYEE'S MANAGERS",
                "DELETE DEPARTMENT",
                "DELETE ROLE",
                "DELETE AN EMPLOYEE",
                "VIEW TOTAL BUDGET OF A DEPARTMENT",
                "EXIT"
            ]

        }).then(question => {
            if (question.choice === "VIEW ALL EMPLOYEES") {
                tHeader("View All Employees");
                let emp = new Employee(1, "a", "b", 1, 2);
                emp.ViewEmployee(connection);
                promptUser();
            }
            else if (question.choice === "VIEW ALL ROLES") {

                tHeader("View All Roles");
                let role = new Role(1, "a", 2, 100, 2);
                role.ViewRoles(connection);
                promptUser();
            }
            else if (question.choice === "VIEW ALL DEPARTMENTS") {
                tHeader("View Departments")
                let dept = new Department("abc");
                dept.ViewDepartment(connection);

                promptUser();


            }
            else if (question.choice === "VIEW EMPLOYEES BY MANAGER") {
                tHeader("View Employees BY Manager");
                let emp = new Employee(1, "a", "b", 1, 2);
                emp.ViewEmployeeByMgr(connection);
                promptUser();

            }
            else if (question.choice === "VIEW EMPLOYEES BY DEPARTMENT") {
                tHeader("View Employees BY Departments");
                let emp = new Employee(1, "a", "b", 1, 2);
                emp.ViewEmployeeByDpt(connection);
                promptUser();
            }
            else if (question.choice === "ADD A DEPARTMENT") {
                addDept();
            }
            else if (question.choice === "ADD A ROLE") {
                addRole();
            }
            else if (question.choice === "ADD AN EMPLOYEE") {
                addEmp();
            }
            else if (question.choice === "UPDATE AN EMPLOYEE'S ROLE") {
                updateRole();
            }
            else if (question.choice === "UPDATE EMPLOYEE'S MANAGERS") {
                UpdateMgr();

            }
            else if (question.choice === "DELETE ROLE") {
                removeRole();
            }
            else if (question.choice === "DELETE AN EMPLOYEE") {
                removeEmployee();
            }
            else if (question.choice === "DELETE DEPARTMENT") {
                deleteDept();
            }
            else if (question.choice === "VIEW TOTAL BUDGET OF A DEPARTMENT") {
                BUDGET();
            }
            else if (question.choice === "EXIT") {
                process.exit();

            }
            console.log(``);

        })
}


//ASK FOR DEPARTMENT NAME
const addDept = () => {
    inquirer.prompt({

        type: "input",
        name: "deptName",
        message: "Enter the new Department Name"
    }).then(Response => {
        tHeader("Add New Department")
        let dept = new Department(Response.deptName);
        dept.AddDepartment(connection, dept.getDeptName());
        console.log(``);
        console.log(chalk.magenta.bold('Sucessfully New Department is Added'));
        console.log(``);
        promptUser();
    })
}
const deleteDept = () => {
    var depts = [];
    let sqlQuery = `Select name from department`;
    connection.query(sqlQuery, (err, res) => {
        if (err) throw err;
        for (let i = 0; i < res.length; i++) {
            depts.push(res[i].name);
        }
        inquirer.prompt({
            type: "list",
            name: "Departments",
            message: "Choose the Department you would like to delete?",
            choices: depts
        }).then(response => {
            for (let i = 0; i < depts.length; i++) {
                if (response.Departments == depts[i]) {
                    let dept = new Department(response.Departments);
                    dept.DeleteDepartment(connection, dept.getDeptName())
                    break;
                }
            }
            console.log(``);
            console.log(chalk.magenta.bold('New Department is Sucessfully Deleted'));
            console.log(``);
            promptUser();
        })
    });
}

////////////Employee 
const addEmp = () => {
    const emp = [];

    inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: "Enter Employee's First Name?",
            validate: firstName => {
                if (firstName) {
                    return true;
                } else {
                    console.log('Please enter a first name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'lastName',
            message: "Enter Employee's Last Name?",
            validate: lastName => {
                if (lastName) {
                    return true;
                } else {
                    console.log('Please enter a last name');
                    return false;
                }
            }
        }
    ]).then(response => {
        emp.push(response.firstName);
        emp.push(response.lastName)
        var roles = [];
        let sqlQuery = `Select title from role`;
        connection.query(sqlQuery, (err, res) => {
            if (err) throw err;
            for (let i = 0; i < res.length; i++) {
                roles.push(res[i].title);
            }
            inquirer.prompt({
                type: "list",
                name: "role",
                message: "Choose the Role you would like to choose for this employee?",
                choices: roles
            }).then(response => {
                let sqlQuery = `Select id from role where title="` + response.role + `"`;
                connection.query(sqlQuery, (err, res) => {
                    if (err) throw err;
                    emp.push(res[0].id)
                })
                var mgr = [];
                let sql = `Select first_name as MANAGER from employee`;
                connection.query(sql, (err, res) => {
                    if (err) throw err;
                    for (let i = 0; i < res.length; i++) {
                        mgr.push(res[i].MANAGER);
                    }
                    inquirer.prompt({
                        type: "list",
                        name: "mgr",
                        message: "Choose the Manager you would like to choose for this employee?",
                        choices: mgr
                    }).then(response => {
                        let sqlQuery = `Select id as mgrID from employee where first_name="` + response.mgr + `"`;
                        connection.query(sqlQuery, (err, res) => {
                            if (err) throw err;
                            emp.push(res[0].mgrID)
                            console.log(emp)
                            let e = new Employee(1, emp[0], emp[1], emp[2], emp[3]);
                            console.log(e)
                            e.addEmployee(connection, e.getfirstName(), e.getLastName(), e.getrid(), e.getMgrID());
                            console.log(``);
                            console.log(chalk.magenta.bold('New Employee is Sucessfully Added'));
                            console.log(``);

                            promptUser();
                        })
                    })
                });
            });
        });
    });
}

//addRole
const addRole = () => {
    let role = [];
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: "Enter Position Title: ",
            validate: title => {
                if (title) {
                    return true;
                } else {
                    console.log('Please enter a Title');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'salary',
            message: "Enter Salary: ",
            validate: salary => {
                if (salary) {
                    return true;
                } else {
                    console.log('Please enter a salary');
                    return false;
                }
            }
        }]).then(response => {
            role.push(response.title);
            role.push(response.salary);
            let dept = [];
            let sqlQuery = `Select name from department`;
            connection.query(sqlQuery, (err, res) => {
                if (err) throw err;
                for (let i = 0; i < res.length; i++) {
                    dept.push(res[i].name);
                }

                inquirer.prompt({
                    type: "list",
                    name: "depts",
                    message: "Choose the Department you would like to choose for this position?",
                    choices: dept
                }).then(response => {
                    let sqlQuery = `Select id from department where name="` + response.depts + `"`;
                    connection.query(sqlQuery, (err, res) => {
                        if (err) throw err;
                        role.push(res[0].id)
                        let r = new Role(1, role[0], role[1], role[2]);
                        r.addRole(connection, r.getTitle(), r.getSalary(), r.getDid())
                        console.log(``);
                        console.log(chalk.magenta.bold('New Position is Sucessfully Added'));
                        console.log(``);
                        promptUser();
                    })
                });
            });
        });



}
///update

const updateRole = () => {
    let employees = [];
    connection.query(`SELECT id, first_name, last_name
        FROM employee`, (err, res) => {
        res.forEach(element => {
            employees.push(`${element.id} ${element.first_name} ${element.last_name}`);
        });
        let job = [];
        connection.query(`SELECT id, title FROM role`, (err, res) => {
            res.forEach(element => {
                job.push(`${element.id} ${element.title}`);
            });
            inquirer
                .prompt([
                    {
                        name: "update",
                        type: "list",
                        message: "Choose the employee whose role is to be updated:",
                        choices: employees
                    },
                    {
                        name: "role",
                        type: "list",
                        message: "Choose employee's job position",
                        choices: job
                    }
                ])
                .then(response => {
                    let idCode = parseInt(response.update);
                    let roleCode = parseInt(response.role);
                    let r = new Role(1, "Dad", 332, 1)
                    r.updateRole(connection, roleCode, idCode)
                    promptUser();

                })
        })
    })
}//end update function

const UpdateMgr = () => {
    let employees = [];
    connection.query(`SELECT id, first_name, last_name
  FROM employee`, (err, res) => {
        res.forEach(element => {
            employees.push(`${element.id} ${element.first_name} ${element.last_name}`);
        });

        inquirer
            .prompt([
                {
                    name: "update",
                    type: "list",
                    message: "Choose the employee whose manager is to be updated:",
                    choices: employees
                },
                {
                    name: "manager",
                    type: "list",
                    message: "Choose employee's new manager",
                    choices: employees
                }
            ])
            .then(response => {
                let idCode = parseInt(response.update);
                let managerCode = parseInt(response.manager);
                let e = new Employee(1, "SDad", "Ds", 1, 2);
                e.updateMgr(connection, managerCode, idCode);
                promptUser();

            })
    })
}

const BUDGET=()=>
{
    const bonusTable = `SELECT e.id, e.first_name, e.last_name, role.title, role.salary ,d.name, CONCAT(m.first_name,' ',m.last_name) AS manager FROM employee e LEFT JOIN employee m ON m.id = e.manager_id JOIN role JOIN department d on role.department_id = d.id and e.role_id = role.id`

    let dpt = [];
  connection.query(`SELECT * FROM department`, (err, res) => {
    res.forEach(element => {
      dpt.push(element.name);
    })
    inquirer
      .prompt(
        {
          name: "budget",
          type: "list",
          message: "Choose which department budget you want to see:",
          choices: dpt
        }
      )
      .then(response => {
        connection.query(`SELECT salary FROM (${bonusTable}) AS managerSubTable WHERE name = "${response.budget}"`, (err, resp) => {
          let sum = 0;
          resp.forEach(element => {
            sum += element.salary;
          })
          connection.query(`SELECT name FROM department WHERE name = "${response.budget}"`, (err, res) => {
            if (err) throw err;
            console.table(res);
            console.log(`budget of $${sum}`)
            
          })
        })
      })
  })
}


const removeEmployee = () => {
    //Create a variable that holds all of the current employees so dynamically the choices of inquirer are updated.
    let activeEmployees = [];
    connection.query(`SELECT id, first_name, last_name
    FROM employee`, (err, res) => {
        res.forEach(element => {
            activeEmployees.push(`${element.id} ${element.first_name} ${element.last_name}`);
        });
        inquirer
            .prompt({
                name: "remove",
                type: "list",
                message: "What employee would you like to remove?",
                choices: activeEmployees
            })
            .then(response => {

                let employeeID = parseInt(response.remove)
                let e = new Employee(1, "AD", "Ds", 1, 1)
                e.DeleteEmp(connection, employeeID);

                promptUser();
            })
    })
}

const removeRole = () => {
    let sql = `SELECT role.id, role.title FROM role`;

    connection.query(sql, (error, response) => {
      if (error) throw error;
      let roleNamesArray = [];
      response.forEach((role) => {roleNamesArray.push(role.title);});

      inquirer
        .prompt([
          {
            name: 'chosenRole',
            type: 'list',
            message: 'Which role would you like to remove?',
            choices: roleNamesArray
          }
        ])
        .then((answer) => {
          let roleId;

          response.forEach((role) => {
            if (answer.chosenRole === role.title) {
              roleId = role.id;
            }
          });

          let sql =   `DELETE FROM role WHERE role.id = ?`;
          connection.query(sql, [roleId], (error) => {
            if (error) throw error;
            console.log(chalk.redBright.bold(`====================================================================================`));
            console.log(chalk.greenBright(`Role Successfully Removed`));
            console.log(chalk.redBright.bold(`====================================================================================`));
        promptUser();
        });
        });
    });
  };




//========================================================//
//==================== START APP =========================//
//========================================================//
const app = () => {
    header();
    promptUser();
}