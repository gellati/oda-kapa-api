var hooks = require('hooks');
var async = require('async');

// comment out the tests to be skipped
var paths = [
  'Professional service request list > /fhir/CareTeam/$search-servicerequests > Search CarePlan resources that the professional is authorized to access (include linked CareTeam and EpisodeOfCare resources) > 200 > application/json+fhir;charset=UTF-8',
  'Professional service request list > /fhir/CarePlan/{id}/$assign > POST > 200 > application/json+fhir;charset=UTF-8',
  'CarePlan comments and notifications > /fhir/CarePlan/{id} > GET > 200 > application/json+fhir;charset=UTF-8', // works
  'CarePlan comments and notifications > /fhir/Communication > Endpoint to create new CarePlan comment > 201 > application/json+fhir;charset=UTF-8', // works
  'CarePlan comments and notifications > /fhir/CarePlan > Search CarePlan resources. The return message will be checked to see if query maker is authorized to access the information > 200 > application/json+fhir;charset=UTF-8'
]

/*
paths.forEach(function(path){
  hooks.before(path, function (transaction){
    transaction.skip = true;
  });
})
*/
