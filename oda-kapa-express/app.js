'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app; // for testing

function toJSON(obj) {
  return new Buffer(JSON.stringify(obj, null, 2));
}

var basePath = '/v1'

var config = {
  appRoot: __dirname // required config
// use these two lines to define location of own swagger file
//  configDir: __dirname + '/config/swagger',
//  swaggerFile: __dirname + '/kapa-api/kapa-api.yaml'


//  testPath: __dirname + '/test'
};


//console.log(config.appRoot)
//console.log(config.configDir)


SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

//  app.post(basePath + '/Communication', (req, res) =>{
//    const doc = req.body;
//  })

  app.get(basePath + '/Communication', (req, res) => {
    res.set('Content-type', 'application/json')
    res.status(200).send(toJSON([{
        'id': 'hello',
        'category': 'world'
    }]));
  });

  app.get(basePath + '/CarePlan', (req, res) => {
    res.set('Content-type', 'application/json')
    res.status(200).send(toJSON({
      'Comm': 'hello'
    }));

  });



//  app.get(basePath + '/CarePlan/$search-servicerequests', (req, res) => {
//  })


  var port = process.env.PORT || 10010;
  app.listen(port);



  if (swaggerExpress.runner.swagger.paths['/Communication']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + basePath + '/Communication');
  }



});
