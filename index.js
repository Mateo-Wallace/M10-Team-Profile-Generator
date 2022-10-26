// Determine required modules, including custom local modules
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');

// Create Questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the EMPLOYEE ID?',
        name: 'employeeId',
    },
];
// Create write to file function
function writeToFile(src) {
    fs.writeFile('./dist/index.html', src, (err) =>
        err ? console.error(err) : console.log('HTML file saved as index.html in src folder')
    )
}
// Create initialization function
function init() {
    inquirer
        .prompt(questions)
        .then((responses) => writeToFile(generateHTML(responses)));
}

// Call init
init();