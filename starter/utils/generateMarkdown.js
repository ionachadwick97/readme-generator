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

## Installation

${data.installation}

## User Guide

${data.usage}

## License

${data.license}

## Contributors

${data.contributors}

## Testing

${data.tests}

## Questions

For more questions contact:

Github: <https://github.com/${data.username}>

Email: ${data.email}
`;
}

// export function
module.exports = generateMarkdown;