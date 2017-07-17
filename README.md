# oda-kapa-api

testing the use of swagger for documentation purposes

the folder oda-kapa-hapi contains swagger running on a hapi server, oda-kapa-express contains swagger running on an express server.

in both folders, install necessary node packages with

    npm install

install swagger globally with the following command

    npm install -g swagger

(you might need to do this with suitable permissions depending on your system)

Code under work is in oda-kapa-express.

ok so far
- editor works
- have Dredd tests that work

Editor can be run with

    npm run edit

Current issues:
- tests that pass, but what do they mean?
- put mock data into tests
- automate server restarts with gulp

old todo-issues
- what is the value of `testPath` when tests actually work? (check this first)
- set environment variable for test script in package.json
- ? should test variable be set in app.js ?


## tests

Tests are run with [Dredd](https://github.com/apiaryio/dredd).

Install Dredd with

    npm install -g dredd

Installation currently works for Linux, fails for Cygwin/Windows

Maker server run with

    node app.js

Then run tests with

    dredd <name of swagger file> <server url>



run tests with

    npm test

or

    swagger project test


## configuration

location of the api file can be modified in the `app.js` and `package.json` files (at least according to [this](https://github.com/swagger-api/swagger-node/issues/373))

The app.js file contains the variables `configDir` and `swaggerFile` which can be used to define the location and name of own swagger file.

In the `package.json` file the environmental variable `swagger_swagger_fileName` should be set to the directory where the swagger file is located.

This makes it possible to edit the swagger file directly in a browser.
