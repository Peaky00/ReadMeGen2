// index.mjs
import inquirer from 'inquirer';
import fs from 'fs/promises'; // Use the ESM version of 'fs'

// Function to generate the README content based on user input
function generateREADME(answers) {
  // Create the README content using the provided answers
  // You should replace these placeholders with actual user input
  const readmeContent = `
# ${answers.projectTitle}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## License
${answers.license}

## Tests
${answers.tests}

## Questions
- GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
- Email: ${answers.email}
`;

  return readmeContent;
}

// Define Inquirer prompts for user input
const prompts = [
  {
    type: 'input',
    name: 'projectTitle',
    message: 'Enter the project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a project description:',
  },
  // Add more prompts for other sections (installation, usage, contributing, tests, githubUsername, email).
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'None'],
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// Prompt the user for input
inquirer.prompt(prompts).then((answers) => {
  // Generate the README content using the provided answers and the template
  const readmeContent = generateREADME(answers);

  // Write the README file
  fs.writeFile('README.md', readmeContent, (err) => {
    if (err) {
      console.error('Error writing README.md:', err);
    } else {
      console.log('README.md has been generated successfully!');
    }
  });
});
