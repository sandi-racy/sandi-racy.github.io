var gulp = require('gulp');
var browserify = require('gulp-browserify');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function(){
  gulp.src('src/js/app.js')
    .pipe(browserify())
    .pipe(gulp.dest('js'));

  gulp.src('src/sass/app.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest('css'));
});

gulp.watch('src/js/*.js', ['default']);
gulp.watch('src/sass/*.scss', ['default']);
