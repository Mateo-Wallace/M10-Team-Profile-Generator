# Notes

## Setup of Project

- Created repo
- Edited gitignore to have this line of code at the top
    ```
    #CUSTOM IGNORES FOR PROJECT
    node_modules/
    .DS_Store/
    # removed dist
    # removed .vuepress/dist
    ```
- Ran the following commands to initialize the npms and dependencies
    - `npm init` generates package.json
    - `npm i inquirer@8.2.4` installs inquirer
    - `npm install --save-dev jest@24.8.0` installs jest
- Created basic file structure
- Added js files for employee, intern, engineer, manager to lib tab
    - Added equivalents in __tests__ folder
- Added generateHTML.js to src folder

## Day 1 Progress

- In index.js added basic structure of functions
    - init, write to file, questions
    - linked generateHTML
- Wrote basic generateHTML function in src folder
- Able to print a test index.html to dist folder

## Day 2 Progress

- Fully styled test.html
- Added Seth Wooten startup code
- Copied code from Employee.js to other files in lib
    - Edited them to extend employee and super employee
    - Added selectors and functions based on employee type
- Wrote tests based on Employee.test.js from [Ryan Ellingson](https://github.com/RyanEllingson/Team-Profile-Generator/blob/master/test/Employee.test.js)
    - No other code looked at aside from this test
- All tests written and everything passing

## Questions for class

- What goes in `src/`