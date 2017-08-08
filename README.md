# oda-kapa-api

[![swagger-api validator-badge](https://raw.githubusercontent.com/gellati/oda-kapa-api/master/oda-kapa-express/kapa-api/kapa-api.yaml)](./oda-kapa-express/kapa-api/kapa-api.yaml)

## Overview

Documenting the ODA KaPA API with Swagger (OpenAPI). The API description is in the folder kapa-api. The API documentation can be read online here and also be downloaded and read by running a local server.

## Configuration

Install necessary node packages with

    npm install

Install swagger globally with the following command

    npm install -g swagger

(you might need to do this with suitable permissions depending on your system)

## Running documentation locally

The documentation can be viewed locally by running
    npm run start

or equivalently (as configured in package.json)

    node app.js

The web documentation can be seen on http://localhost:8989/docs as can be seen on the web. On http://localhost:8989/api-docs in different data formats.

Editor can be run with

    npm run edit

This folder contains swagger running on an express server.


## Tests

Testing of the Swagger documentation is done with [Dredd](https://github.com/apiaryio/dredd).

Install Dredd globally with

    npm install -g dredd

Installation currently works for Linux, fails for Cygwin/Windows 7.

Tests currently run against oda fhir service and they require an authorization token to run.

Run tests with

    dredd <name of swagger file> <server url>

Tests can also be run by simply typing

    dredd

in the directory where the `dredd.yml` configuration file is located.

Connection to the fhir service requires authentication. This is done with a hook in the `hook.coffee` file, whose location is in the hooks directory. The location needs to be defined in the `dredd.yml` file. The hook authentication file's contents are the following:

    hooks = require 'hooks'
    hooks.beforeEach (transaction) -> transaction.request.headers['Authorization'] = "Bearer eyJ..."

where `eyJ...` is the authorization token. You have to create your own authorization hook file, including the token.


## Configuration

Location of the api file can be modified in the `app.js` and `package.json` files (at least according to [this](https://github.com/swagger-api/swagger-node/issues/373))

The app.js file contains the variables `configDir` and `swaggerFile` which can be used to define the location and name of own swagger file.

In the `package.json` file the environmental variable `swagger_swagger_fileName` should be set to the directory where the swagger file is located.

This makes it possible to edit the swagger file directly in a browser-based editor.


## Development and todos

Current issues/todos:
- not all get requests work, problem with parameters?
- documenting websocket responses
- content of post requests
- custom operation paths that don't seem to work
  - CareTeam/$search-servicerequests
  - CarePlan/{id}/$assign
  - Communication/$search
- GET parameters which are not accepted
   - basedOn/based-on in $search
   - subject in CarePlan
   - sender, patient, basedOn in Communication
- tests that pass, but what do they mean?
- (optional, if using express server) automate server restarts with gulp/webpack
