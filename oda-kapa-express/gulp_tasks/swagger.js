var gulp = require('gulp')
var yaml = require('js-yaml')
var path = require('path')
var fs = require('fs')
var resolve = require('json-refs').resolveRefs;
var nodemon = require('nodemon')
let RELOAD_DELAY = 500;

gulp.task("swagger", function(){
//  var doc = yaml.safeLoad(fs.readFileSync(path.join(__dirname, "kapa-api/index.yaml")))
  let called = false;

  return nodemon({
    script: 'app.js',
    watch: ['kapa-api/kapa-api.yaml', 'index.html', 'app.js']
  })
  .on('start', function onStart(){
    if(!called){callback();}
    called = true;
  })
  .on('restart', function onRestart(){
    setTimeout(function reload(){
      browserSync.reload({
        stream: false
      });
    }, RELOAD_DELAY);
  });


/*
  var root = yaml.load(fs.readFileSync('kapa-api/kapa-api.yaml').toString());
  var options = {
    processContent: function(content){
    return yaml.load(content);
    }
  };

  resolve(root, options).then(function(results){
    console.log(yaml.dump(results.resolved));
  })
*/
/*
  fs.writeFileSync(
    path.join(__dirname, "kapa-api.json"),
    JSON.stringify(doc, null, " ")
    );
*/
});
