// TODO: Include packages needed for this application
const inquier = require("inquirer") 
const fs = require("fs")
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: import the generateMarkdown function from utils/generateMarkdown.js

// TODO: Write code to get user input, generate markdown, and save it to a file.
function startApp (){
    inquier.prompt([
       {
           type: "input",
           name: "title",
           message: "What is the name of your application?"

       },
       {
        type: "input",
        name: "description",
        message: "Please give a breif description of your application."

    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install you project?"

    },
    {
        type: "input",
        name: "Usage",
        message: "Provide instructions and examples for use?"

    },
    {
        type: "input",
        name: "Credits",
        message: "List your collaborators, if any."

    },
    {
        type: "list",
        name: "License",
        message: "Select the Licenses you use.",
        choices: ["Apatche","MIT","Modzilla","ISC","none"]

    },
    {
        type: "input",
        name: "Features",
        message: "Does your project have any features? Please list those here"

    },
    {
        type: "input",
        name: "Tests",
        message: "Please add any tests here."

    },
    {
        type: "input",
        name: "Github",
        message: "Please add you GitHub Username"

    },
    {
        type: "input",
        name: "Email",
        message: "Please enter and email that you can be reached at."

    },
    
    ]).then(response => {
        fs.writeFileSync("readmeGen.md",generateMarkdown(response))
    })
}
startApp();