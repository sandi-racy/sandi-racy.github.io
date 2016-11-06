var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('default', function(){
  gulp.src('src/js/app.js')
    .pipe(browserify())
    .pipe(gulp.dest('js'))
});

gulp.watch('src/js/*.js');
