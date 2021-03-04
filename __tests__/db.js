const fs = require('fs');
const path = require('path');
const db = require('../server/models/model.js');
const app = require('../server/server.js');

// nodemon -r dotenv/config server/server.js &

/*
test database in Elephant
in model, check node environment. if TEST, use the test db uri

afterAll(async () => await db.end());

//in model.js
db.end = pool.end.bind(pool)
*/

describe('Database unit tests', () => {

  beforeAll(()=> {
    // prevent executing tests on the wrong database
    if (process.env.NODE_ENV !== 'test') {
      console.log(`Must run tests in a testing environment only. Current environment: ${process.env.NODE_ENV}. Aborting...`);
    }
    else console.log(`Running unit tests on database in a secure testing environment. NODE_ENV: ${process.env.NODE_ENV}`);

    // db.query('TRUNCATE politicians RESTART IDENTITY CASCADE', (error, response) => {
    //   if (error) console.log('Problem truncating test db:', error);
    // });

    /*
      TRUNCATE: empties all data from the tables listed
      RESTART IDENTITY: resets serial counts
      CASCADE: deletes any foreign keys implicated in RESTART IDENTITY
    */
  })

  // TODO: how to properly close the server. app.close() only prevents new connections; it doesn't terminate the current ones. Look into packages such as http-terminator. Look into terminal command "losf -i 3000"
  // afterAll(() => {
  //   app.close();
  // });

  it('Test database should have the right tables', () => {
    const query = `SELECT table_name
    FROM information_schema.tables
    WHERE table_schema='public'
    AND table_type='BASE TABLE';`;

    db.query(query, (error, response) => {
      if (error) console.log('Problem truncating test db:', error);

      expect(response.rows).toHaveLength(9);
      expect(response.rows).toEqual(['users', 'prev_registrations', 'elections', 'roles', 'donors', 'politicians', 'pols_roles', 'donations', 'candidates']);
    });
  })

  // before all
    // initialize a locally hosted mock database
    // get the real tables from the real database (but not their data)
    // write them to a .sql file in this folder
    // execute that file to add those tables and columns to the mock database
  
  describe('Politicians table', () => {
    xit('Should be able to write perfectly shaped data', () => {
      // write perfectly shaped data to the database
      // run a SELECT
      // it should return that data
    })

    xit('Should be able to read from the database', () => {
     
    })
  
    xit('Should prevent writing multiple records with the same name', () => {
     
    })
  
    xit('Should increment serial _id', () => {
     
    })
  
    xit('', () => {
     
    })
  })

  describe('searchController.getAll', () => {
    xit('Should return as many rows as exist on "politicians"', () => {
     
    })

    xit('', () => {
     
    })
  })

  describe('searchController.upsertByAddress', () => {
    xit('Should return as many rows as exist on "politicians"', () => {
     
    })

    xit('', () => {
     
    })
  })
})