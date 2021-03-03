const db = require('../models/model.js');
const { constructURI, encodeCode } = require('../../URIMethods.js');

const searchController = {};

searchController.getAll = (req, res, next) => {
  console.log('Getting all politicians.');

  db.query('SELECT * FROM politicians', (error, response) => {
    if (error) return next(error);

    res.locals = response.rows;
    return next();
  });
}

// Given the output of a query to the Google Civic Info API, deconstruct off of it the array of political offices and array of political officials. Produce a SQL prepared statement containing the relevant values from each to insert into the politicans table.
const assembleSql = (obj) => {
  const {offices, officials} = obj;
  let str = '';
  
  // iterate over offices
  for(let i = 0; i < offices.length; i += 1){
    // iterate over officials who hold that office
    for (let j = 0; j < offices[i].officialIndices.length; j++) {
      const k = offices[i].officialIndices[j];

      str += '('
      str += '\'' + offices[i].name + '\', ';
      str += '\'' + offices[i].divisionId + '\', ';
      str += '\'' + officials[k].name + '\', ';
      str += '\'' + officials[k].party + '\', ';
      str += officials[k].photoUrl ? '\'' + officials[k].photoUrl + '\', ': 'null, ';
      str += officials[k].urls ? '\'' + officials[k].urls[0] + '\', ' : 'null, ';
      str += '\'' + officials[k].phones[0] + '\', ';
      str += officials[k].emails ? '\'' + officials[k].emails[0] + '\'' : 'null';
      str += '), \n'
    }
 }
 str = str.slice(0, -3);
 str += '\n'

 return str;
}

searchController.getByAddress = (req, res, next) => {
  console.log('Getting by address. Req.body:', req.body);

  /*
  const {address} = req.body;

  const params = {
    key: process.env.CIVIC_INFO_KEY,
    address: encodeCode(address)
  }
  const paramString = constructURI(params);

  fetch('https://www.googleapis.com/civicinfo/v2/representatives?' + paramString)
    .then(res => res.json())
    .then(data => {
      dataReturn = assembleSql(data)

      const query = `INSERT INTO politicians (
        office, 
        division, 
        name,   
        party,  
        photo,  
        website,
        phone,
        email
      ) 
      VALUES
      ` + dataReturn + 'RETURNING *;'
    
      db.query(query, (err, res) => {
        if (err) console.log('ERROR performing data insertion.', err);
        else console.log('Result of data insertion:', res.rows);
      })
    })
    .catch(err => console.error('Error querying Google Civic Info API.', err));
  */

  // placeholder for now: get all politicians in database
  db.query('SELECT * FROM politicians', (error, response) => {
    if (error) return next(error);

    res.locals = response.rows;
    return next();
  });
}

module.exports = searchController;