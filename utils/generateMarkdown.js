
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answers) {
  let licenseBadge;

  switch (answers.license) {
    // Choose badge depending on answer chosen by user
    case "Apache":
      licenseBadge = `![Badge](https://img.shields.io/badge/License-${answers.license}-orange)`
      break;
    case "BSD-3-Clause":
      licenseBadge = `![Badge](https://img.shields.io/badge/License-${answers.license}-brightgreen)`
      break;
    case "BSD-2-Clause":
      licenseBadge = `![Badge](https://img.shields.io/badge/License-${answers.license}-green)`
      break;
    case "MIT":
      licenseBadge = `![Badge](https://img.shields.io/badge/License-${answers.license}-blue)`
      break;
    // If no License Information is chosen
    case "none":
      licenseBadge = "";
      break;
  };
  return licenseBadge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(answers) {
  let licenseLink;

  switch (answers.license) {
    case "Apache":
      licenseLink = `![${answers.license}](https://www.apache.org/licenses/LICENSE-2.0)`
      break;
    case "BSD-3-Clause":
      licenseLink = `![${answers.license}](https://opensource.org/licenses/BSD-3-Clause)`
      break;
    case "BSD-2-Clause":
      licenseLink = `![${answers.license}](https://opensource.org/licenses/BSD-2-Clause)`
      break;
    case "MIT":
      licenseLink = `![${answers.license}](https://opensource.org/licenses/MIT)`
      break;
    case "none":
      licenseLink = ""
      break;
  };
  return licenseLink;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(answers) {
  const licenseLink = renderLicenseLink(answers);
  let licenseInfo;

  switch(answers.license) {
    // Apache License Information
    case "Apache":
      // License statement
      licenseInfo = `- This application is covered by the ![${answers.license}](${licenseLink}) license. \n \
      
      Copyright ${answers.year} ${answers.name}

      Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.`
      break;
    // BSD-3-Clause License Information
    case "BSD-3-Clause":
      // License statement
      licenseInfo = `This application is covered by the ![${answers.license}](${licenseLink}) license. \n \
      
      Copyright ${answers.year} ${answers.name}

      Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      
      2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
      
      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`
      break;
    // BSD-2-Clause License Information
    case "BSD-2-Clause":
      // License statement
      licenseInfo = `- This application is covered by the ![${answers.license}](${licenseLink}) license. \n \
      
      Copyright ${answers.year} ${answers.name}

      Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      
      2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`
      break;
    // MIT License
    case "MIT":
      // License statement
      licenseInfo = `- This application is covered by the ![${answers.license}](${licenseLink}) license. \n \
      
      Copyright ${answers.year} ${answers.name}

      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
      break;
    // If no License Information is chosen
    case "none":
      licenseInfo = ""
      break;
  };
  return licenseInfo;
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const licenseBadge = renderLicenseBadge(answers);
  const licenseInfo = renderLicenseSection(answers);

  // Markdown file layout
  return `# ${answers.title}

[![Badge](https://img.shields.io/badge/GitHub-${answers.github}-blueviolet?style=flat-square&logo=appveyor)](https://github.com/${answers.github}) ${licenseBadge}

## Table of Contents 

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Description

- ${answers.description}

## Installation

- Go to [Github Repo](https://github.com/${answers.github})
- ${answers.installation}

## Usage

- ${answers.usage}

## Contributing

- ${answers.contribution}

## Tests

- ${answers.test}

## License

${licenseBadge}

${licenseInfo}


## Questions

- Created by: ${answers.name}

### Contact Information
- GitHub User Name: [${answers.github}](https://github.com/${answers.github})
- Email directly at ${answers.email}

`;

};

module.exports = generateMarkdown;
