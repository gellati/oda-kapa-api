var gulp = require('gulp')

gulp.task("default", function(){
  gulp.watch(["kapa-api/kapa-api.yaml", "index.html"], ["swagger"])
});
