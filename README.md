# oda-kapa-api

## Overview

Testing the use of swagger for documentation purposes.

The folder oda-kapa-hapi contains swagger running on a hapi server, oda-kapa-express contains swagger running on an express server.

in both folders, install necessary node packages with

    npm install

install swagger globally with the following command

    npm install -g swagger

(you might need to do this with suitable permissions depending on your system)

Code under work is in oda-kapa-express.

ok so far
- editor works
- have Dredd tests that work
- can make get request to fhir service



Editor can be run with

    npm run edit

Current issues:
- not all get requests work, problem with parameters?
- content of post requests
- paths that don't seem to work
  - $search-servicerequests
- GET parameters which are not accepted
   - basedOn/based-on in $search
   - subject in CarePlan
   - sender, patient, basedOn in Communication
- tests that pass, but what do they mean?
- automate server restarts with gulp



## Tests

Tests are done with [Dredd](https://github.com/apiaryio/dredd).

Install Dredd with

    npm install -g dredd

Installation currently works for Linux, fails for Cygwin/Windows

Tests currently run against oda fhir service, but a small express server also exists for mock testing.

Maker server run with

    node app.js

Then run tests with

    dredd <name of swagger file> <server url>

Tests can also be run by simply typing

    dredd

in the directory where the `dredd.yml` configuration file is located.

Connection to the fhir service is done with a hook in the `hook.coffee` file, whose location is defined in the `dredd.yml` file. Its contents are the following:

    hooks = require 'hooks'
    hooks.beforeEach (transaction) -> transaction.request.headers['Authorization'] = "Bearer eyJ..."

where `eyJ...` is the authorization token.


## Configuration

Location of the api file can be modified in the `app.js` and `package.json` files (at least according to [this](https://github.com/swagger-api/swagger-node/issues/373))

The app.js file contains the variables `configDir` and `swaggerFile` which can be used to define the location and name of own swagger file.

In the `package.json` file the environmental variable `swagger_swagger_fileName` should be set to the directory where the swagger file is located.

This makes it possible to edit the swagger file directly in a browser.
