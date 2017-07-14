var gulp = require('gulp')
var yaml = require('js-yaml')
var path = require('path')
var fs = require('fs')
var resolve = require('json-refs').resolveRefs;
var shelljs = require('shelljs')


gulp.task("swagger", function(){
//  var doc = yaml.safeLoad(fs.readFileSync(path.join(__dirname, "kapa-api/index.yaml")))
  var root = yaml.load(fs.readFileSync('kapa-api/index.yaml').toString());
  var options = {
    processContent: function(content){
    return yaml.load(content);
    }
  };

  resolve(root, options).then(function(results){
    console.log(yaml.dump(results.resolved));
  })

/*
  fs.writeFileSync(
    path.join(__dirname, "kapa-api.json"),
    JSON.stringify(doc, null, " ")
    );
*/
});