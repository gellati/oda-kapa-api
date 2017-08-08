'use strict';

var SwaggerUI = require('swagger-tools/middleware/swagger-ui');
var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();

var SWAGGERPORT = 8989;

var config = {
  appRoot: __dirname, // required config
// use these two lines to define location of own swagger file
//  configDir: __dirname + '/config/swagger',
  swaggerFile: __dirname + '/kapa-api/kapa-api.yaml'
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  app.use(SwaggerUI(swaggerExpress.runner.swagger));

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || SWAGGERPORT;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/docs');
  }
});
