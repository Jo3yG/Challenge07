// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Write a description for your Project',
      name:'description',
    },
    {
      type: 'input',
      message: 'Input the installation instructions if any',
      name:'installation',
    },
    {
        type: 'input',
        message: 'Input instructions and examples of your project',
        name:'installation',
      },
      {
        type: 'input',
        message: 'Input how other developers can contribute to your Project',
        name:'contribute',
      },
      {
        type: 'input',
        message: 'Input any tests written for the application of your Project and possible examples on how to run them.',
        name:'contribute',
      },
      {
        type: 'list',
        message: "Would you like a license for your Project?",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    }
  ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
