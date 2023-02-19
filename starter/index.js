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
        message: 'What is your project title?'
    },
    // Description
    {
        type: 'input',
        name: 'description',
        message: 'Please put your project description'
    },
    // Installation guide
    {
        type: 'input',
        name: 'installatiion',
        message: 'What are the steps to install your product?'
    },
    // Usage
    {
        type: 'input',
        name: 'usage',
        message: 'How is your product used?'
    },
    // License (multiple choice)
    {
        type: 'list',
        choices: ['MIT', 'GPL', 'GNU', 'Bsd-2-Clause'],
        name: 'license',
        message: 'What is your project license type?'
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
function writeToFile(fileName, data) {
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
            console.log(answers);
            const markdown = generateMarkdown(answers);
            console.log(markdown);
        });
}

// function call to initialize program
init();