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

Editor can be run with

    npm run edit

Current issues:
- tests not working
- what is the value of `testPath` when tests actually work? (check this first)
- set environment variable for test script in package.json
- ? should test variable be set in app.js ?


## tests

run tests with

    npm test

or

    swagger project test


## configuration

location of the api file can be modified in the `app.js` and `package.json` files (at least according to [this](https://github.com/swagger-api/swagger-node/issues/373))
