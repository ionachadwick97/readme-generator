const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    // Title
    {
        type: 'input',
        name: 'title',
        message: 'What is the product title?'
    },
    // Description
    {
        type: 'input',
        name: 'description',
        message: 'Please describe the product: '
    },
    // Installation guide
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps to install the product?'
    },
    // Usage
    {
        type: 'input',
        name: 'usage',
        message: 'How is the product used?'
    },
    // License (multiple choice)
    {
        type: 'list',
        choices: ['MIT', 'GPL', 'GNU', 'Bsd-2-Clause'],
        name: 'license',
        message: 'What type of licence is being used??'
    },
    // Contributing
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to your product?'
    },
    // Tests
    {
        type: 'input',
        name: 'tests',
        message: 'What tests can be run on the product?'
    },
    // Questions
    // GitHub username
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?'
    },
    // email address
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
];

// function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Success!');
        }
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            const markdown = generateMarkdown(answers)
            writeToFile(markdown)
        });
}

// function call to initialize program
init();