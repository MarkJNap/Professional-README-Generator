// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your Name?",
    name: "name",
  },  
  {
    type: "input",
    message: "What is your Project Title?",
    name: "title",
  },
  {
    type: "input",
    message: "Enter the description for your README:",
    name: "description",
  },
  {
    type: "input",
    message: "Enter the installation instructions for your README:",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter the usage information for your README:",
    name: "usage",
  },
  {
    type: "list",
    message: "Enter license for your README:",
    name: "license",
    choices: ["Academic Free License v3.0", 
    "Apache license 2.0", 
    "Artistic license 2.0", 
    "Boost Software License 1.0", 
    "BSD 2-clause license",
    "BSD 3-clause license",
    "Creative Commons license",
    "Do What The F*ck You Want To Public License",
    "Educational Community License v2.0",
    "Eclipse Public License 1.0",
    "Eclipse Public License 2.0",
    "European Union Public License 1.1",
    "GNU Affero General Public License v3.0",
    "GNU General Public License v2.0",
    "GNU General Public License v3.0",
    "GNU Lesser General Public License v2.1",
    "GNU Lesser General Public License v3.0",
    "ISC",
    "LaTeX Project Public License v1.3c",
    "Microsoft Public License",
    "MIT",
    "Mozilla Public License 2.0",
    "Open Software License 3.0",
    "PostgreSQL License",
    "SIL Open Font License 1.1",
    "University of Illinois/NCSA Open Source License",
    "The Unlicense",
    "zLib License"]
  },
  {
    type: "input",
    message: "Enter the contribution guidelines for your README:",
    name: "contribution",
  },
  {
    type: "input",
    message: "Enter the test instructions for your README:",
    name: "test",
  },  
  {
    type: "input",
    message: "Enter the questions for your README:",
    name: "questions",
  },
  
];

// TODO: Create a function to write README file
function writeToFile() {
  inquirer.prompt(questions)
  .then((data) =>
  fs.appendFile(`${(data.name.toUpperCase())}'s-README.md`, generateMarkdown(data), (err) =>
  err ? console.error(err) : console.log('README Created!')))
}
    
// TODO: Create a function to initialize app
function init() {
  writeToFile()
}

// Function call to initialize app
init();


// ------TODO Clean up License List (remove spaces and sort out links)----------------