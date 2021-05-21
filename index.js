// Packages Required
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Questions to ask for README
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
        type: "list",
        name: "license",
        message: "Choose a license for your README from the list below.",
        choices: ["Apache", "BSD-3-Clause", "BSD-2-Clause", "MIT", "none"],
    },
    {
        type: "input",
        name: "year",
        message: "What year the project was created.",
    },
    {
        type: "input",
        name: "name",
        message: "What is your name.",
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub name?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },   
]

//Function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log("Successfully created README.md")
    );
}

//Function to initialize the generator 
const init = async () => {
    try {
        const answers = await inquirer.prompt(questions);
        const readme = generateMarkdown(answers);
        writeToFile("README.md", readme);
    } catch (err) {
        console.log(err);
    }
}

init()

