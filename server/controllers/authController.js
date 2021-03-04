const fetch = require('node-fetch');
const db = require('../models/model.js');

const authController = {};

authController.fetchData = (req, res, next) => {
  console.log('fetching: ', req.body);
}

// function to fetch data from Google's api using access token from modal
authController.fetchGoogle = (req, res, next) => {
  const token = 'Bearer ' + req.body.access_token;
  fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
    headers: {
      Authorization: token
    }
  })
    .then(data => data.json())
    .then(data => {
      res.locals.data = data;
      return next();
    })
    .catch(err => console.log('error: ', err));
};

// function to insert user into DB
authController.postData = (req, res, next) => {
  const { id, email, name } = res.locals.data;

  const insertUser = `
    INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
    ON CONFLICT (name) DO NOTHING
    RETURNING name
  `;
  const params = [ name, email, id ];

  db.query(insertUser, params, (err, result) => {
    if (err) return next(err);
    return next();
  });
};

module.exports = authController;
