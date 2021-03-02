const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DB_URI,
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