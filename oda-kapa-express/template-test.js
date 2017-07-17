var stt = require('swagger-test-templates')
var swagger = require('./kapa-api/kapa-api.yaml')

var config = {
  assertionFormat: 'should',
  testModule: 'request',
  pathName: ['/Communication'],
  statusCodes: ['200']
}

var tests = stt.testGen(swagger, config);
