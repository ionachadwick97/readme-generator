// functions for areas of readme that are optional
// installation
function generateInstallation(installation) {
  return `
## Installation Guide
${installation}
`;
}

// usage
function generateUsage(usage) {
  return `
## User Guide
${usage}
`;
}

// contributors
function generateContributors(contributors) {
  return `
## Contributors
${contributors}
`;
}

// testing
function generateTest(tests) {
  return `
## Testing
${tests}
`;
}

// function to generate markdown for README
function generateMarkdown(data) {
// title
return `# ${data.title}

## Description
${data.description}

## Contents
[Installation](#installation)
[User Guide](#user guide)
[Licence](#licence)
[Contributors](#contributors)
[Testing](#testing)
[Questions](#questions)

${data.installation !== '' ? generateInstallation(data.installation) : ''}
${data.usage !== '' ? generateUsage(data.usage) : ''}
## License
${data.license}
${data.contributors !== '' ? generateContributors(data.contributors) : ''}
${data.tests !== '' ? generateTest(data.tests) : ''}
## Questions
For more questions contact: 
${data.username}
${data.email}
`;
}

// export function
module.exports = generateMarkdown;