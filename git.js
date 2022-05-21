const axios = require('axios');

const githubAPI = {
    license: (license) => {
        return axios.get(`https://api.github.com/licenses/${license}`)
            .then(res => {
                return res.data.name;
            })
            .catch(err => {
                return 'Invalid license';
            });
    }

    return axios
    .get(licednseURl)
    .then(function (response) {
        const {body} = response.data;
        return response.data.name;
    });

    data: (username) => {
        const queryUrl = `https://api.github.com/users/${username}`;
        return axios.get(queryUrl)
        .get(queryUrl)
        .then(function (response) {
            const { avatar_url } = response.data[0].actor;
            const {email} = response.data[0].payload.commits[0].author;

            return {
                avatar_url,
                email
            };
        }
   
