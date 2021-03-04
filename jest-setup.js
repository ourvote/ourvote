module.exports = async () => {
  global.testServer = await require('./server/server.js');
};

/*
To use this config, add the following to package.json:

  "jest": {
    "globalSetup": "./jest-setup.js",
    "globalTeardown": "./jest-teardown.js"
  },
*/
