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
// // Create initialization function
// function init() {
//     inquirer
//         .prompt(questions)
//         .then((responses) => writeToFile(generateHTML(responses)));
// }

// // Call init
// init();


const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./src/page-template.js');

const teamMembers = [];


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