// node modules required
const inquirer = require('inquirer');
const fs = require('fs');
const generateTeam = require('./scr/htmltemplate.js');

// lib modules required
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// array for answers to questions used to build objects for manager, engineer and intern
const employees = [];


// questions function generates prompts for the user to select answers
function questions() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is your role?",
        choices: ["Manager", "Intern", "Engineer"],
      },
      // the first 3 questions apply to manager, intern and engineer roles
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your employee I.D.?",
      },
      // if the intern role was selected the user is promted with the following question
      {
        type: "input",
        name: "school",
        message: "What school do you attend?",
        when: (answers) => answers.role === "Intern",
      },
      // if the engineer role was selected the user is promted with the following question
      {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
        when: (answers) => answers.role === "Engineer",
      },
      // if the manager role was selected the user is promted with the following question
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
        when: (answers) => answers.role === "Manager",
      },
      // after the question set has been completed for 1 employee, the user is asked if they would like to add another employee
      {
        type: "list",
        name: "addorstop",
        message: "Who you like to add an employee?",
        choices: ["Yes", "No I am finished"],
      },
    ])
    // depending on the selected roled is given to the corresponding class
    .then(function (answers) {
      if (answers.role === "Intern") {
        const intern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );
        employees.push(intern);
      }

      if (answers.role === "Engineer") {
        const engineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.github
        );

        employees.push(engineer);
      }

      if (answers.role === "Manager") {
        const manager = new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNumber
        );

        employees.push(manager);
      }

      // if the user selected more employees need to be added, the questions() function is called again
      if (answers.addorstop === "Yes") {
        questions();
      } else {
        // once all the employees have been entered the team.html is created
        fs.writeFile('./dist/index.html', generateTeam(employees), (err) => {
          if (err) {
            return console.log(err);
          }
          console.log("It worked!");
        });
      }
    });
}

questions();