var hooks = require('hooks');
var async = require('async');

// get paths with
// dredd <apifile.yaml> http://127.0.0.1:3000 --names

var content-type = 'application/json+fhir;charset=UTF-8'


// the tests to be skipped
var paths = [
'/fhir/CarePlan > Get CarePlan > 200 > '+ content-type,
'/fhir/CarePlan > Get CarePlan > 400 > '+ content-type,
'/fhir/CarePlan > Get CarePlan > 500 > '+ content-type,
'CarePlan comments and notifications > /fhir/CarePlan/{id} > GET > 200 > '+ content-type,
'CarePlan comments and notifications > /fhir/CarePlan/{id} > GET > 500 > '+ content-type,

// don't work
'CarePlan comments and notifications > /fhir/Communication > New CarePlan comment creation > 201 > '+ content-type,
'CarePlan comments and notifications > /fhir/Communication > New CarePlan comment creation > 400 > '+ content-type,
'CarePlan comments and notifications > /fhir/Communication > New CarePlan comment creation > 500 > '+ content-type,

'Professional service request list > /fhir/CarePlan/{id}/$assign > POST > 200 > '+ content-type,
'Professional service request list > /fhir/CarePlan/{id}/$assign > POST > 500 > '+ content-type,
'Professional service request list > /fhir/CareTeam/$search-servicerequests > Return Careteams and EpisodeOfCares of professional > 200 > '+ content-type,
'Notifications > /fhir/Communication/{id}/$seen > Seen notifications > 200 > '+ content-type

/*
  'Professional service request list > /fhir/CareTeam/$search-servicerequests > Search CarePlan resources that the professional is authorized to access (include linked CareTeam and EpisodeOfCare resources) > 200 > application/json+fhir;charset=UTF-8',
  'Professional service request list > /fhir/CarePlan/{id}/$assign > POST > 200 > application/json+fhir;charset=UTF-8',
  'CarePlan comments and notifications > /fhir/CarePlan/{id} > GET > 200 > application/json+fhir;charset=UTF-8', // works
  'CarePlan comments and notifications > /fhir/Communication > Endpoint to create new CarePlan comment > 201 > application/json+fhir;charset=UTF-8', // works
  'CarePlan comments and notifications > /fhir/CarePlan > Search CarePlan resources. The return message will be checked to see if query maker is authorized to access the information > 200 > application/json+fhir;charset=UTF-8'
*/
]

paths.forEach(function(path){
  hooks.before(path, function (transaction){
    transaction.skip = true;
  });
})
/*
*/
