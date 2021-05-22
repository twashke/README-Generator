// External Packages Required
const inquirer = require("inquirer");
const fs = require("fs");
const chalk = require("chalk");

// Internal modules
const generateMarkdown = require("./utils/generateMarkdown.js");
const api = require("./utils/api.js");

// Welcome Message

const message = chalk.bgMagenta(`Welcome to the README generator!  First answer questions about the project creator and then enter information about the project`)

// Declaring Questions for README
const questions = [

    // Enter the name of who created the project
    {
        type: "input",
        name: "name",
        message: "Enter your name.",
        // Default to my name for easy use in the future
        // default: "Tiffany Washke",
    },
    // Enter Github user name
    {
        type: "input",
        name: "github",
        message: "What is your GitHub user name?",
        // Default to my GitHub account for easy use in the future
        // default: "twashke",
    },
    // Enter email information
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        // Default to my email for easy use in the future
        // default: "twashke@gmail.com"
    }, 
    // Enter the name of the project
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
    },
    // Enter the description of the project
    {
        type: "input",
        name: "description",
        message: "Give a description of your project.",
    },
    // Enter installation instructions
    {
        type: "input",
        name: "installation",
        message: "Enter any installation instructions.",
    },
    // Enter usage information
    {
        type: "input",
        name: "usage",
        message: "Enter usage information for the project.",
    },
    // Section for GIF or Pictures to include in README
    {
        type: "input",
        name: "image",
        message: "Do you have a GIF or image you would like to add to the README (remember to use the correct file path, if incorrectly entered, GIF or image will not display properly - i.e. ./assets/images/test.png)?",
    },
    // Enter contribution guidelines
    {
        type: "input",
        name: "contribution",
        message: "Include any contribution guidelines.",
    },
    // Enter test information
    {
        type: "input",
        name: "test",
        message: "Include test instructions.",
    },
    // Enter License information
    {
        type: "list",
        name: "license",
        message: "Choose a license for your README from the list below.",
        choices: ["Apache", "BSD_3_Clause", "BSD_2_Clause", "MIT", "LGPLv3", "Mozilla", "none"],
    }, 
    // When was the project created?
    {   
        type: "input",
        name: "year",
        message: "What year was the project created?",
    },
]

//Function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log(chalk.bgMagenta(`Successfully created README.md`))
    );
}

//Function to initialize the generator 
const init = async () => {
    try {
        console.log(message);
        // Answers to come from inquirer prompt
        const answers = await inquirer.prompt(questions);
        // Pull avatar from github
        const image = await api.githubPic(answers);
        // Generate Markdown using answers and avatar
        const readme = generateMarkdown(answers, image);
        // write to file
        writeToFile("./README.md", readme);
    } catch (err) {
        // Console log any error that occurs
        console.log(err);
    }
}

// Run function
init()

