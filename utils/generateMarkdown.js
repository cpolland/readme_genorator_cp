// TODO: Add code to generate markdown for README given a data object parameter containing the user input.
function getLicenseBadge (License){
  if(License === "Apatche"){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

    `
  } else if(License === "MIT"){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if(License === "Modzilla"){
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else if(License === "ISC"){
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  } else if(License === "none"){
    return 'No License'
  }
}



function generateMarkdown(data) {
  return `# ${data.title}
  ${getLicenseBadge(data.License)}
  # Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Credits](#credits)
5. [Liscene](#liscene)
6. [Features](#features)
7. [Tests](#tests)
8. [Questions](#questions)
## Description 
  ${data.description}
## Installation
 ${data.installation}
## Usage 
  ${data.Usage}
  ## Credits 
  ${data.Credits}
## Liscene
  ${data.License}
## Features 
  ${data.Features}
## Tests 
  ${data.Tests}
## Questions
${data.Github}
${data.Email}
`;
}

module.exports = generateMarkdown;
