var gulp = require('gulp')

gulp.task("watch", function(){
  gulp.watch("kapa-api/index.yaml", ["swagger"])
});