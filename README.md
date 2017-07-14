# oda-kapa-api

testing the use of swagger for documentation purposes

the folder oda-kapa-hapi contains swagger running on a hapi server, oda-kapa-express contains swagger running on an express server.

in both folders, install necessary node packages with

    npm install

install swagger globally with the following command

    npm install -g swagger

(you might need to do this with suitable permissions depending on your system)

## tests

run tests with

    npm test

or

    swagger project test


## configuration

location of the api file can be modified in the `app.js` and `package.json` files (at least according to [this](https://github.com/swagger-api/swagger-node/issues/373))
