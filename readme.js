const readMe = data => {
    return `# ${data.title}
    ![Badge](http://img.shields.io/badge/license-${data.license}-green.svg)
    
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
${data.installation}

## Usage
${data.usage}

## Contribution
${dat.contribute}

## Test
${data.test}

## License
${data.license}

`};

module.exports = readMe;
