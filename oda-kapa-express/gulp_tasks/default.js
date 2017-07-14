var gulp = require('gulp')

gulp.task("default", function(){
  gulp.watch("kapa-api/index.yaml", ["swagger"])
});