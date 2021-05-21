// External Package
const axios = require('axios');

// Use API to call for github avatar
const api = {
    async githubPic(answers) {
        try { let response = await axios
        
        // Pull user API information
        .get(`https://api.github.com/users/${answers.github}`);
        // Return Data
        return response.data;

        } catch (error) {
        console.log(error);
        }
    }
};

module.exports = api;