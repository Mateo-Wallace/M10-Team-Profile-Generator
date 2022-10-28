// // Determine required modules, including custom local modules
// const fs = require('fs');
// const inquirer = require('inquirer');
// const generateHTML = require('./src/generateHTML');

// // Create Questions for user
// const questions = [
//     {
//         type: 'input',
//         message: 'What is the EMPLOYEE ID?',
//         name: 'employeeId',
//     },
// ];
// // Create write to file function
// function writeToFile(src) {
//     fs.writeFile('./dist/index.html', src, (err) =>
//         err ? console.error(err) : console.log('HTML file saved as index.html in src folder')
//     )
// }

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./src/generateHTML');

const teamMembers = [];



// Questions
// init questions
const initQuestions = [
  {
    name: 'role',
    type: 'list',
    message: 'What type of Employee would you like to add?',
    choices: ['Manager', 'Engineer', 'Intern'],
  },
  {
    name: 'name',
    type: 'input',
    message: 'What is their name?',
  },
  {
    name: 'id',
    type: 'input',
    message: 'What is their Id number?',
    validate: (name) => {
      // converts input into a number. if they typed in a letter the number will return 'NaN'
      var valid = +name
      // Check if value is 'NaN'. If not, returns true
      return ((valid.toString() !== 'NaN') ? true : 'Not a number. Try again.')
    },
  },
  {
    name: 'email',
    type: 'input',
    message: 'What is their email?',
    validate: (email) => {
      // valid checks if email contains the correct characters
      var valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      // if valid is true, returns true. if not. returns a notification to try again
      return (valid ? true : 'Invalid Email. Try again.');
    }
  },
];

// employee questions
const managerQuestions = [
  {
    name: 'office number',
    type: 'input',
    message: 'What is the Managers Office Number?',
  }
]
// manager questions

// engineer questions

// intern questions





// function for creating manager - inquirer questions
// take those questions and create a new Manager with the user provided answers
// push that new Manager to the team members array

// follow the same pattern for each type of employee
// build a function for them that uses inquirer


// STRUCTURING IT

// start with manager function, since every team needs a manager
// at the end of manager function, call a createTeam function

// this function would simply ask the user which type of employee they would like to add, based on their choice, run the correesponding function

// at the end, use fs to write file while sending the team array over to the function you brought in from page-template.js

function callManager(initData) {
  inquirer
    .prompt(managerQuestions)
    .then((response) => {
      console.log('initManager works')
    })
}

function callEngineer(initData) {
  inquirer
    .prompt(engineerQuestions)
    .then((response) => {
      console.log('initManager works')
    })
}

function callIntern(initData) {
  inquirer
    .prompt(internQuestions)
    .then((response) => {
      console.log('initManager works')
    })
}

// Create initialization function
function init() {
  inquirer
    .prompt(initQuestions)
    .then((response) => {
      switch (response.role) {
        case 'Manager':
          console.log('Manager chosen. Sending to callManager()');
          callManager(response);
          break;
        case 'Engineer':
          console.log('Engineer chosen. Sending to callEngineer()')
          callEngineer(response);
          break;
        case 'Intern':
          console.log('Intern chosen. Sending to callIntern()')
          callIntern(response);
        default:
          console.log(`response.role is not targeting anything. It is returning: ${response.role}`)
      }
    });
}

// Call init
init();