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
    - `npm i jest@24.9.0` installs jest
- Created basic file structure