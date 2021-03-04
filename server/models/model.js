const { Pool } = require('pg');

let connectionString = '';
if (process.env.NODE_ENV = 'test') {
  connectionString = process.env.TEST_DB;
}
else connectionString = process.env.DB_URI;

const pool = new Pool({
  connectionString,
  max: 3,     // # of concurrent connections allowed per client
  idleTimeoutMillis: 1000, // close idle clients after 1 second
  connectionTimeoutMillis: 1000, // return an error after 1 second if connection could not be established
});

module.exports = {
  query: (text, params, callback) => {
    // console.log('Executing query ', text);
    return pool.query(text, params, callback);
  },
}