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

## Questions for class

- What goes in `src/`