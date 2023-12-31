const readMe = data => {
    return `# ${data.title}
    ![Badge](http://img.shields.io/badge/license-${data.license}-green.svg)
    
## Description 
${data.description}
//never had a table of contents before lol
## Table of Contents 
*[Installation](#installation)
*[Usage](#usage)
*[Contribution](#contribute)
*[Test](#test)
*[License](#license)


## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribute}

## Test
${data.test}

## License
${data.license}

`};

module.exports = readMe;
