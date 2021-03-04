const fetch = require('node-fetch');
const db = require('../models/model.js');

const authController = {};

authController.fetchGoogle = (req, res, next) => {
  console.log('fetching: ', req.body);
  const token = 'Bearer ' + req.body.access_token;
  console.log(token);
  fetch('https://www.googleapis.com/auth/userinfo.profile', {
    headers: {
      Authorization: token
    }
  })
  .then(data => console.log('data: ', data.json()))
  .then(data => console.log(data));

};

module.exports = authController;
