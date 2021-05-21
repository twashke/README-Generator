
// Function to return License Badge (link included in badge)
function renderLicenseBadge(answers) {
  // Declare new variable
  let licenseBadge;
  // Choose badge depending on answer chosen by user
  switch (answers.license) {
    // Badge includes license link 
    case "Apache":
      licenseBadge = `[![Badge](https://img.shields.io/badge/License-${answers.license}-orange)](https://www.apache.org/licenses/LICENSE-2.0)`
      break;
    case "BSD_3_Clause":
      licenseBadge = `[![Badge](https://img.shields.io/badge/License-${answers.license}-brightgreen)](https://opensource.org/licenses/BSD-3-Clause)`
      break;
    case "BSD_2_Clause":
      licenseBadge = `[![Badge](https://img.shields.io/badge/License-${answers.license}-yellow)](https://opensource.org/licenses/BSD-2-Clause)`
      break;
    case "MIT":
      licenseBadge = `[![Badge](https://img.shields.io/badge/License-${answers.license}-blue)](https://opensource.org/licenses/MIT)`
      break;
    case "LGPLv3":
      licenseBadge = `[![Badge](https://img.shields.io/badge/License-${answers.license}-yellowgreen)](https://opensource.org/licenses/LGPL-3.0)`
      break;
    case "Mozilla":
      licenseBadge = `[![Badge](https://img.shields.io/badge/License-${answers.license}-red)](https://opensource.org/licenses/MPL-2.0)`
      break;
    // If no License Information is chosen
    case "none":
      // License Badge returns empty
      licenseBadge = "";
      break;
  };
  return licenseBadge;
};

// Function that returns the license link
function renderLicenseLink(answers) {
  // Declare variable for license link
  let licenseLink;
  // Choose link depending on answer chosen by user
  switch (answers.license) {
    case "Apache":
      licenseLink = `[${answers.license} License](https://www.apache.org/licenses/LICENSE-2.0)`
      break;
    case "BSD_3_Clause":
      licenseLink = `[${answers.license} License](https://opensource.org/licenses/BSD-3-Clause)`
      break;
    case "BSD_2_Clause":
      licenseLink = `[${answers.license} License](https://opensource.org/licenses/BSD-2-Clause)`
      break;
    case "MIT":
      licenseLink = `[${answers.license} License](https://opensource.org/licenses/MIT)`
      break;
    case "LGPLv3":
      licenseLink = `[${answers.license} License](https://opensource.org/licenses/LGPL-3.0)`
      break;
    case "Mozilla":
      licenseLink = `[${answers.license} License](https://opensource.org/licenses/MPL-2.0)`
      break;
    case "none":
      licenseLink = ""
      break;
  };
  return licenseLink;
};

// Function to return license portion of README
function renderLicenseSection(answers) {
  // Declare licenseLink (and function it is from)
  const licenseLink = renderLicenseLink(answers);
  // Declare licenseInfo variable
  let licenseInfo;
  // Choose license information depending on user choice
  switch(answers.license) {
    // Apache License Information
    case "Apache":
      // License statement
      licenseInfo = `This application is covered by the ${licenseLink}. \n \
      
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
    case "BSD_3_Clause":
      // License statement
      licenseInfo = `This application is covered by the ${licenseLink}. \n \
      
      Copyright ${answers.year} ${answers.name}

      Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      
      2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
      
      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`
      break;
    // BSD-2-Clause License Information
    case "BSD_2_Clause":
      // License statement
      licenseInfo = `This application is covered by the ${licenseLink}. \n \
      
      Copyright ${answers.year} ${answers.name}

      Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      
      2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`
      break;
    // MIT License
    case "MIT":
      // License statement
      licenseInfo = `This application is covered by the ${licenseLink}. \n \
      
      Copyright ${answers.year} ${answers.name}

      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
      break;
    // LGPLv3 License
    case answers = "LGPLv3":
        // License statement
        licenseInfo = `This application is covered by the ${licenseLink}.`
        break;
    // MPL-2.0 License Information
    case answers = "Mozilla":
        // License statement
        licenseInfo = `This application is covered by the ${licenseLink}.`
        break;
    // If no License Information is chosen
    case "none":
      licenseInfo = ""
      break;
  };
  return licenseInfo;
};


// Function to generate markdown for README
function generateMarkdown(answers, image) {
  // Declare variables and functions they are from
  const licenseBadge = renderLicenseBadge(answers);
  const licenseInfo = renderLicenseSection(answers);

  // Markdown file layout
  return `# ${answers.title}

[![Badge](https://img.shields.io/badge/GitHub-${answers.github}-blueviolet?style=flat-square&logo=appveyor)](https://github.com/${answers.github}) ${licenseBadge}

## Description

${answers.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage} \ 
\
![${answers.title}](${answers.image})

## Contributing

${answers.contribution}

## Tests

${answers.test}

## License

${licenseInfo}


## Questions

**Contact ${answers.name}**

- **Email directly at** ${answers.email}
- **GitHub User Name:** [${answers.github}](https://github.com/${answers.github})

![Developer Profile Picture](${image.avatar_url}) 

`;

};

module.exports = generateMarkdown;
