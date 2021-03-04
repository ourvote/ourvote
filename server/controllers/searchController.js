const fetch = require('node-fetch');
const db = require('../models/model.js');
const { constructURI, encodeCode } = require('../../URIMethods.js');

// insert additional ' before apostrophes to escape them (this is one of a few escaping methods recognized by SQL)
const escapeQuotes = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "'" || str[i] === '"') {
      str = str.slice(0, i) + "'" + str.slice(i);
      i++;
    }
  }
  return str;
};

const arrayToSqlList = array => {
  const values = array.reduce((accm, curr) => {
    accm += '\'' + escapeQuotes(curr) + '\', ';
    return accm;
  }, '');

  // slice off trailing comma and space
  // wrap list of values in parentheses
  return '(' + values.slice(0, -2) + ')';
}

// TODO: refactor assembleSQL to use arrayToSqlList
// Given the output of a query to the Google Civic Info API, deconstruct off of it the array of political offices and array of political officials. Produce a SQL prepared statement containing the relevant values from each to insert into the politicans table.
const assembleSql = (obj) => {
  const {offices, officials} = obj;
  let str = '';

  // iterate over offices
  for(let i = 0; i < offices.length; i += 1){
    // iterate over officials who hold that office
    for (let j = 0; j < offices[i].officialIndices.length; j++) {
      const k = offices[i].officialIndices[j];

      // add values to list for each column, escaping any quotation marks they might contain
      str += '('
      str += '\'' + escapeQuotes(offices[i].name) + '\', ';
      str += '\'' + escapeQuotes(offices[i].divisionId) + '\', ';
      str += '\'' + escapeQuotes(officials[k].name) + '\', ';
      str += '\'' + escapeQuotes(officials[k].party) + '\', ';
      str += officials[k].photoUrl ? '\'' + officials[k].photoUrl + '\', ': 'null, ';
      str += officials[k].urls ? '\'' + officials[k].urls[0] + '\', ' : 'null, ';
      str += '\'' + officials[k].phones[0] + '\', ';
      str += officials[k].emails ? '\'' + escapeQuotes(officials[k].emails[0]) + '\'' : 'null';
      str += '), \n'
    }
 }
 str = str.slice(0, -3);

 return str;
}

const searchController = {};

searchController.getAll = (req, res, next) => {
  console.log('Getting all politicians.');

  db.query('SELECT * FROM politicians', (error, response) => {
    if (error) return next(error);

    res.locals.pols = response.rows;
    return next();
  });
}

// If record already exists, don't update or duplicate it; do nothing.
// TODO: Decide which fields (all?) we might want to update for records that already exist.
searchController.upsertByAddress = (req, res, next) => {
  const {address} = req.query;
  console.log(`Upserting by address: ${address}`);

  // query external API for politicians at that address
  // insert those politicians into our database if they aren't already present
  const params = {
    key: process.env.CIVIC_INFO_KEY,
    address,
  }
  const paramString = constructURI(params);

  fetch('https://www.googleapis.com/civicinfo/v2/representatives?' + paramString)
    .then(res => res.json())
    .then(data => {
      // get list of politician names off data
      const names = [];
      data.officials.forEach(official => names.push(official.name));
      res.locals.names = names;

      const polsInfo = assembleSql(data);
      // inserting with ON CONFLICT clause to prevent duplicate records
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
      ` + polsInfo + `
      ON CONFLICT (name) DO NOTHING
      RETURNING name;`;

      db.query(query, (error, response) => {
        if (error) {
          console.log('Database error.', error);
          return next(error);
        }

        if (response.rows.length) {
          console.log('New politicians added to database:', response.rows);
        }

        return next();
      })
    })
    .catch(err => console.error('Error querying Google Civic Info API.', err));
};

// given an array of names, return an array of politicans from the database
searchController.getByNames = (req, res, next) => {
  const namesListSql = arrayToSqlList(res.locals.names);

  const query = 'SELECT * FROM politicians WHERE name IN ' + namesListSql;
  db.query(query, (error, response) => {
    if (error) return next(error);

    res.locals.pols = response.rows;
    return next();
  });
};

module.exports = searchController;