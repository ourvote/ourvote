const fetch = require('node-fetch');
const db = require('../models/model.js');

const authController = {};

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
  let { id, email, name } = res.locals.data;
  name = `'${name}'`;
  id = `'${id}'`;
  email = `'${email}'`;
  res.locals.name = name;
  const insertUser = `
    INSERT INTO users (name, password, email)
    VALUES (${name}, ${id}, ${email})
    ON CONFLICT (name) DO NOTHING
  `;

  db.query(insertUser, (err, result) => {
    if (err) return next(err);
    console.log('result: ', result);
    return next();
  });
};

authController.fetchDbData = (req, res, next) => {
  const name = res.locals.name;
  console.log('name:',name)
  const query = `SELECT * FROM users WHERE name=${name}`;
  db.query(query, (error, response) => {
    if(error) console.log('error: ', error);
    res.locals.userInfo = response.rows[0];
    return next();
  });
}

module.exports = authController;

/**
 * response.fields[0]._id;
 * response.fields[1].name;
 * response.fields[2].address;
 * response.fields[3].party;
 * response.fields[4].password;
 * response.fields[5].email;
 */
