// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
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
    type: "input",
    message: "Enter the contribution guidelines for your README:",
    name: "contribution",
  },
  {
    type: "input",
    message: "Enter the test instructions for your README:",
    name: "test",
  },
  
];

// TODO: Create a function to write README file
function writeToFile() {
  inquirer.prompt(questions)
  .then((response) =>
  fs.appendFile(`${(response.name.toUpperCase())}'s-README.md`, `# ${(response.title)}\n## Description\n${(response.description)}\n`, (err) =>
  err ? console.error(err) : console.log('README Created!')))
}
    
// TODO: Create a function to initialize app
function init() {
  writeToFile()
}

// Function call to initialize app
init();
