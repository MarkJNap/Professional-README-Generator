// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// Array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the Title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Give a description of your project:",
    name: "description",
  },
  {
    type: "input",
    message: "Enter the installation instructions for your project:",
    name: "installation",
  },
  {
    type: "input",
    message: "Explain the usage of this application:",
    name: "usage",
  },
  {
    type: "list",
    message: "Select the license you have for your project:",
    name: "license",
    choices: [
      "Apache_license_2.0",
      "Artistic_license_2.0",
      "Boost_Software_License_1.0",
      "BSD_2-clause_license",
      "BSD_3-clause_license",
      "Creative_Commons_license",
      "Do_What_The_F*ck_You_Want_To_Public_License",
      "Eclipse_Public_License_1.0",
      "Eclipse_Public_License_2.0",
      "GNU_Affero_General_Public_License_v3.0",
      "GNU_General_Public_License_v2.0",
      "GNU_General_Public_License_v3.0",
      "GNU_Lesser_General_Public_License_v2.1",
      "GNU_Lesser_General_Public_License_v3.0",
      "ISC",
      "MIT",
      "Mozilla_Public_License_2.0",
      "SIL_Open_Font_License_1.1",
      "The_Unlicense",
      "zLib_License",
    ],
  },
  {
    type: "input",
    message: "Enter the contribution guidelines:",
    name: "contribution",
  },
  {
    type: "input",
    message: "Enter test instructions:",
    name: "test",
  },
  {
    type: "input",
    message: "Type your github username:",
    name: "username",
  },
  {
    type: "input",
    message: "Enter your email to contant you for questions:",
    name: "email",
  },
];

// Function to write README file
function writeToFile() {
  inquirer.prompt(questions).then((data) => {
    let filename = data.title.toUpperCase().split(" ").join("_");
    fs.appendFile(
      `./GeneratedReadmes/${filename}-README.md`,
      generateMarkdown(data),
      (err) => (err ? console.error(err) : console.log("Successfully created your README!"))
    );
  });
}

// Function to initialize app
function init() {
  writeToFile();
}

// Function call to initialize app
init();
