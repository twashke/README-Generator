// Global Variables
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("utils");
const generateMarkdown = require("./utils/generateMarkdown.js")

// Questions for User Input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Give a description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Enter any installation instructions.",
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage information for the project.",
    },
    {
        type: "input",
        name: "contribution",
        message: "Include any contribution guidelines.",
    },
    {
        type: "input",
        name: "test",
        message: "Include test instructions.",
    },
    {
        type: "input",
        name: "name",
        message: "What is your GitHub name?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt = questions;
}

// Function call to initialize app
init();
