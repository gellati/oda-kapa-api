var gulp = require('gulp')

gulp.task("default", function(){ // }['browsersync'], function(){
//    livereload.listen();
    //  gulp.watch("kapa-api/index.yaml", ["swagger"])
    gulp.watch(['kapa-api/kapa-api.yaml', 'index.html', 'app.js'], ["browsersync"])

//    watch: ['kapa-api/kapa-api.yaml', 'index.html', 'app.js']

});
