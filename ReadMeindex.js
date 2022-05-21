Const generateReadMe = require('./ReadMe');
const githubApi = require('./github');
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

inquirer;
const promptUser = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'username',
                message: 'What is your GitHub username?'
            },
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your project?'
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please describe your project.'
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What are the steps required to install your project?'
            },
            {
                type: 'input',
                name: 'usage',
                message: 'What is the usage of your project?'
            },
            {
                type: 'input',
                name: 'license',
                message: 'What is the license of your project?'
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'What are the contribution guidelines?'
            },
            {
                type: 'input',
                name: 'tests',
                message: 'What are the tests for your project?'
            },
        ])
        .then(function (answers) {
            return answers;
        });
};

async functin init() {
    try {
        const answers = await promptUser();
        const data = await githubApi.getUser(answers.username);
        const readMe = generateReadMe(answers, data);
        await writeFileAsync('README.md', readMe);
        console.log('Successfully wrote to README.md');
    }
}

init ();