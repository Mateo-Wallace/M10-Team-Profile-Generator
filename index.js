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

// Checks if an input is a number
const numValidation = (name) => {
  var valid = +name
  // Check if input is 'NaN'. If not, returns true
  return ((valid.toString() !== 'NaN') ? true : 'Not a number. Try again.')
}

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
    validate: numValidation,
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

const managerQuestions = [
  {
    name: 'office',
    type: 'input',
    message: 'What is the Managers Office Number?',
    validate: numValidation,
  }
];

const engineerQuestions = [
  {
    name: 'gitHub',
    type: 'input',
    message: 'What is the Engineers GitHub username?',
  }
];

const internQuestions = [
  {
    name: 'school',
    type: 'input',
    message: 'What School did the Intern go to?',
  }
];

const newMemberQuestion = [
  {
    name: 'newMember',
    type: 'list',
    message: 'Would you like to add a New Team Member?',
    choices: ['Yes', 'No'],
  }
]


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
function addNewMember(initData, employeeData) {
  inquirer
    .prompt(newMemberQuestion)
    .then((response) => {
      console.log(`Add New Member works! You chose: ${response.newMember}`);
      // addNewMember(initData, response);
    })
}

// Asks questions only required of Manager
function callManager(initData) {
  inquirer
    .prompt(managerQuestions)
    .then((response) => {
      console.log('call Manager works');
      addNewMember(initData, response);
    })
}

// Asks questions only required of Engineer
function callEngineer(initData) {
  inquirer
    .prompt(engineerQuestions)
    .then((response) => {
      console.log('call Engineer works');
      addNewMember(initData, response);
    })
}

// Asks questions only required of Intern
function callIntern(initData) {
  inquirer
    .prompt(internQuestions)
    .then((response) => {
      console.log('call Intern works');
      addNewMember(initData, response);
    })
}

// Asks basic employee questions.
function init() {
  inquirer
    .prompt(initQuestions)
    // Redirects to specific questions based on employee role
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
          break;
        default:
          console.log(`response.role is not targeting anything. It is returning: ${response.role}`)
      }
    });
}

// Start the entire application
init();