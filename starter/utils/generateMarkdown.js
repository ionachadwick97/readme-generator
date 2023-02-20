// function to generate markdown for README
function generateMarkdown(data) {
// title
return `# ${data.title}

## Description

${data.description}

## Contents

[Installation](#installation)

[Usage](#usage)

[Licence](#licence)

[Contributors](#contributors)

[Testing](#testing)

[Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Licence

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