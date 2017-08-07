var gulp = require('gulp')
//var livereload = require('gulp-livereload')
//livereload({ start: true })

var browserSync = require('browser-sync').create();
var superstatic = require('superstatic');

gulp.task('browsersync', ['default'], function(){
  browserSync.init({
    proxy: "localhost:8989/docs",
    port: 5000,
    notify: true
  });
});


/*
  port: 8000,
  server: {
    baseDir: 'dist',
    middleware: superstatic() // Will automatically read your superstatic.json config file
  }
});
*/



//gulp.task('serve', function() {
//});
