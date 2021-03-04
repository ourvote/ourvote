const db = require('../server/models/model.js');
const { searchController, helpers } = require('../server/controllers/searchController.js')
const {
  escapeQuotes,
  arrayToSqlList,
  assembleSql
} = helpers;

describe('Database unit tests', () => {

  beforeAll(()=> {
    // prevent executing tests on the wrong database
    if (process.env.NODE_ENV !== 'test') {
      console.log(`Must run tests in a testing environment only. Current environment: ${process.env.NODE_ENV}. Aborting...`);
    }
    else console.log(`Running unit tests on database in ${process.env.NODE_ENV} environment.`);

    // TODO: use async/await to ensure this executes
    db.query('TRUNCATE politicians RESTART IDENTITY CASCADE', (error, response) => {
      if (error) console.log('Problem truncating test db:', error);
      console.log('Truncated mock db');
    });

    /*
      TRUNCATE: empties all data from the tables listed
      RESTART IDENTITY: resets serial counts
      CASCADE: deletes any foreign keys implicated in RESTART IDENTITY
    */
  })

  // TODO: how to properly close the server. app.close() only prevents new connections; it doesn't terminate the current ones. Look into packages such as http-terminator. Look into terminal commands.
  afterAll(() => {
    // app.close();
    // todo: make port 3000 gracefully exit its process
    db.end();
  });

  // TODO: use async/await to ensure the assertions get checked
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

  describe('Helper functions', () => {
    describe('escapeQuotes', () => {
      it('should escape apostrophes within the string by inserting an extra apostrophe', () => {
        const result = escapeQuotes("Commonwealth's Attorney");

        expect(result).toEqual("Commonwealth''s Attorney");
      })

      it('should not escape pairs of double quotes within the string', () => {
        const result = escapeQuotes(`Gerald "Gerry" O'Connelly`);

        expect(typeof result).toEqual('string');
        expect(result).toEqual(`Gerald "Gerry" O''Connelly`);
      })
    });

    describe('arrayToSqlList', () => {
      it('should convert an array of strings to a SQL-formatted list of values', () => {
        const result = arrayToSqlList(['Joe Biden', 'President', 'joe@potus.org']);

        expect(result).toEqual("('Joe Biden', 'President', 'joe@potus.org')")
      })
    });

    describe('assembleSql', () => {
      const apiJsonResp = {
        "offices": [
          {
            "name": "President of the United States",
            "divisionId": "ocd-division/country:us",
            "levels": [
              "country"
            ],
            "roles": [
              "headOfState",
              "headOfGovernment"
            ],
            "officialIndices": [
              0
            ]
          },
        ],
        "officials": [
          {
            "name": "Joseph R. Biden",
            "address": [
              {
                "line1": "1600 Pennsylvania Avenue Northwest",
                "city": "Washington",
                "state": "DC",
                "zip": "20500"
              }
            ],
            "party": "Democratic Party",
            "phones": [
              "(202) 456-1111"
            ],
            "urls": [
              "https://www.whitehouse.gov/"
            ],
            "channels": [
              {
                "type": "Twitter",
                "id": "potus"
              }
            ]
          }
        ],      
      }

      it('should turn a JSON object into a SQL-formatted list of values', () => {
        const result = assembleSql(apiJsonResp);

        expect(typeof result).toEqual('string');
        expect(result).toEqual(
          "('President of the United States', 'ocd-division/country:us', 'Joseph R. Biden', 'Democratic Party', null, 'https://www.whitehouse.gov/', '(202) 456-1111', null)"
        )
      })
    });
  })
  
  
  describe('Politicians table', () => {
    // TODO: use async/await to ensure the assertions get checked
    it('should should have the right columns', () => {
      const query = `SELECT COLUMN_NAME
      FROM INFORMATION_SCHEMA.COLUMNS
      WHERE TABLE_NAME = 'politicians'
      ORDER BY ORDINAL_POSITION;`;
  
      db.query(query, (error, response) => {
        if (error) console.log('Problem querying for columns in politicians table:', error);
  
        expect(response.rows).toHaveLength(9);
        expect(response.rows).toEqual(['users', 'prev_registrations', 'elections', 'roles', 'donors', 'politicians', 'pols_roles', 'donations', 'candidates']);
      });
    })

    xit('should be able to write perfectly shaped data', () => {
      // write perfectly shaped data to the database
      // run a SELECT
      // it should return that data
    })

    xit('should be able to read from the database', () => {
     
    })
  
    xit('should increment serial _id when a new record is written', () => {
     
    })
  
    xit('should obey null constraints', () => {
     
    })

    xit('should obey unique constraint on "name"', () => {
     
    })
  })

  xdescribe('searchController.getAll', () => {
    xit('should return as many rows as exist on "politicians"', () => {
     
    })

    xit('', () => {
     
    })
  })

  xdescribe('searchController.upsertByAddress', () => {
    xit('should query Google Civic Info API with address sent on request query', () => {
     
    })

    xit('should return a list of politician names at res.locals.names', () => {
     
    })
    
    xit('should add politicians to database only if they are not already present', () => {
     
    })

    xit('', () => {
     
    })
  })

  xdescribe('searchController.getByNames', () => {
    xit('should return a politician record for every name passed on res.locals.names', () => {
     
    })

    xit('should return a list of politician names at res.locals.names', () => {
     
    })
    
    xit('should add politicians to database only if they are not already present', () => {
     
    })

    xit('', () => {
     
    })
  })

});
  
/*
  Sample JSON response from database if you select Biden:

  {
    "_id": 1,
    "name": "Joseph R. Biden",
    "office": "President of the United States",
    "division": "ocd-division/country:us",
    "date_elected": null,
    "party": "Democratic Party",
    "website": "https://www.whitehouse.gov/",
    "phone": "(202) 456-1111",
    "email": null,
    "election_id": null,
    "photo": null,
    "fec": null,
    "crp": null
}

*/