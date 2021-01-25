// const for inquirer
const inquirer = require("inquirer");
const fs = require("fs");


// libs
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const teamMembers = [];


//HTML
function init() {
    initializeHTML();
    addMember();
};

// create functions
function addMember() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter team member's name.",
        },
        {
            type: "list",
            name: "role",
            message: "Please select team member's role.",
            choices: [
                "Engineer",
                "Intern",
                "Manager"
            ]
        },
        {
            type: "number",
            name: "id",
            message: "Please enter team member's id."
        },
        {
            type: "input",
            name: "email",
            message: "Please enter team member's email address."
        }

    ])
        .then(function({name, role, id, email}) {
            let roleInfo = "";
            if (role === "Engineer") {
                roleInfo = "GitHub username";
            } else if (role === "Intern") {
                roleInfo = "school name";
            } else {
                roleInfo = "office number";
            }
            inquirer.prompt([{
                name: "roleInfo",
                message: `Enter team member's ${roleInfo}`,
            },
            {
                type: "list",
                name: "addMembers",
                message: "Would you like to add more team members?",
                choices: [
                    "yes",
                    "no"
                ],
            }])
            .then(function({roleInfo, addMembers}) {
                let newMember;
                if (role === "Engineer") {
                    newMember = new Engineer(name, id, email, roleInfo);
                } else if (role === "Intern") {
                    newMember = new Intern(name, id, email, roleInfo);
                } else {
                    newMember = new Manager(name, id, email, roleInfo);
                }
                teamMembers.push(newMember);
                addHTML(newMember)
                .then(function() {
                    if (addMembers === "yes") {
                        addMember();
                    } else {
                        finalizeHTML();
                    }
                })
            })
        })
};


// HTML part 2
function initializeHTML() {
    const html = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
        <title>Team Profile</title>
        <style>
            .row {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                margin-top: 20px;
                margin-bottom: 20px;
            }
            
            .card {
                padding: 20px;
                border-radius: 6px;
                background-color: white;
                color: powderblue;
                margin: 20px;
            }
            
            .text {
                padding: 20px;
                border-radius: 6px;
                background-color: white;
                color: black;
                margin: 20px;
            }
            
            .col {
                flex: 1;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark justify-content-center align-items-center">
            <span class="navbar-brand mb-0 h1"><h1>My Team Profile</h1></span>
        </nav>
        <div class="row">`;

        // dist for rendered output (html)
            
    fs.writeFile("./dist/teamprofile.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
}

// Add members function and HTML part 3
function addHTML(member) {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";
        if(role === "Engineer") {
            const gitHub = member.getGithub();
            data = `<div class="card text-white bg-info mb-3 justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header">
                <h4>${name}</h4>
            </div>
            <div class="col card-header">
                <i class="fas fa-laptop"></i>
                <h4>${role}</h4>
            </div>
            <ul class="list-group list-group-flush text">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}<a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${gitHub}">${gitHub}<a></li>
            </ul>
        </div>`;
        } else if (role === "Intern") {
            const school = member.getSchool();
            data = `<div class="card text-white bg-info mb-3 justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header">
                <h4>${name}</h4>
            </div>
            <div class="col card-header">
                <i class="fas fa-university"></i>
                <h4>${role}</h4>
            </div>
            <ul class="list-group list-group-flush text">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}<a></li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
        </div>`;
        } else if (role === "Manager") {
            const officeNumber = member.getOfficeNumber();
            data = `<div class="card text-white bg-info mb-3 justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header">
                <h4>${name}</h4>
            </div>
            <div class="col card-header">
                <i class="fas fa-trophy"></i>
                <h4>${role}</h4>
            </div>
            <ul class="list-group list-group-flush text">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}<a></li>
                <li class="list-group-item">Office Number: ${officeNumber}</li>
            </ul>
        </div>`;
        }
        // dist for rendered output (html)
        fs.appendFile("./dist/teamprofile.html", data, function (err) {
            if(err) {
                return reject(err);
            };
            return resolve();
        });
    });
}

function finalizeHTML() {
    const html = ` </div>
    </div>
    
    </body>
    </html>`;

// dist for rendered output (html)

    fs.appendFile("./dist/teamprofile.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    })
}            
            
// close it out

init();
