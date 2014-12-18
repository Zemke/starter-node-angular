var gulp = require('gulp');

var clean = require('gulp-clean');
var concat = require('gulp-concat');

var baseDirs = {
  app: './',
  dist: './dist/'
};

var publicDirs = {
  js: 'public/js/',
  css: 'public/css/',
  img: 'public/img/'
};

var files = {
  js: [baseDirs.app + 'js/**/*.js'],
  css: [baseDirs.app + 'css/**/*.css']
};

var concatFilenames = {
  js: 'js.js',
  css: 'css.css'
};

gulp.task('clean', function() {
  return gulp.src(baseDirs.dist).pipe(clean());
});

gulp.task('dev:concatjs', function () {
  return gulp.src(files.js)
    .pipe(concat(concatFilenames.js))
    .pipe(gulp.dest(baseDirs.app + publicDirs.js));
});

gulp.task('dev:concatcss', function () {
  return gulp.src(files.css)
    .pipe(concat(concatFilenames.css))
    .pipe(gulp.dest(baseDirs.app + publicDirs.css));
});

gulp.task('default', ['dev:concatjs', 'dev:concatcss']);