// Function that returns a license badge and its link based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadgeLink(license) {
  if (!license) {
    return "";
  } else {
    switch (license) {
      case "Apache_license_2.0":
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;

      case "Artistic_license_2.0":
        return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`;

      case "Boost_Software_License_1.0":
        return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;

      case "BSD_2-clause_license":
        return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;

      case "BSD_3-clause_license":
        return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;

      case "Creative_Commons_license":
        return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;

      case "Do_What_The_F*ck_You_Want_To_Public_License":
        return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;

      case "Eclipse_Public_License_1.0":
        return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;

      case "Eclipse_Public_License_2.0":
        return `[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)`;

      case "GNU_Affero_General_Public_License_v3.0":
        return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;

      case "GNU_General_Public_License_v2.0":
        return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;

      case "GNU_General_Public_License_v3.0":
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;

      case "GNU_Lesser_General_Public_License_v2.1":
        return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)`;

      case "GNU_Lesser_General_Public_License_v3.0":
        return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;

      case "ISC":
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;

      case "MIT":
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;

      case "Mozilla_Public_License_2.0":
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;

      case "SIL_Open_Font_License_1.1":
        return `[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)`;

      case "The_Unlicense":
        return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;

      case "zLib_License":
        return `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`;

      default:
        return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else {
    return `This project uses the License:
    "${(license).split('_').join(' ')}"`;
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  <base target="_blank">

  # ${data.title}
  
  ${renderLicenseBadgeLink(data.license)}

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
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadgeLink(data.license)}

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
