// function to generate markdown for README
function generateInstallation(installation) {
  return `
## Installation Guide
${installation}
`;
}

function generateUsage(usage) {
  return `
## User Guide
${usage}
`;
}

function generateContributors(contributors) {
  return `
## Contributors
${contributors}
`;
}

function generateTest(tests) {
  return `
## Testing
${tests}
`;
}

function generateMarkdown(data) {
return `# ${data.title}
## Description
${data.description}
## Contents

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

module.exports = generateMarkdown;