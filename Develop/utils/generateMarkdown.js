// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else {
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
}

// TODO: Create a function that returns the license link FIX THIS
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  } else {
    return `(https://opensource.org/licenses/${license})`;
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else {
    return `${license}`;
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  <base target="_blank">
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project uses the License
  [${renderLicenseSection(data.license)}](${renderLicenseLink(data.license)})

  ## Contribution 
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  If you would like more information you can check out my GitHub at: 
  [${data.username}](https://github.com/${data.username})
  Or if you have any further questions send an email to:
  ${data.email}

  ---
`;
}

module.exports = generateMarkdown;
