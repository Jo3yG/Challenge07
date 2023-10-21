const readMe = data => {
    return `# ${data.title}
    ![License](http://img.shields.io/badge/license-${data.license}-blue.svg)
    
## Description 
${data.description}
//never had a table of contents before lol
## Table of Contents 
*[Installation](#installation)
*[Usage](#usage)
*[Contribution](#contribution)
*[Test](#test)
*[License](#license)


## Installation
${data.install}

## Usage
${data.usage}

## Contribution
${contribution}

## Test
${data.test}

## License
${data.license}

`};

module.exports = readMe;
