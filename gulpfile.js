var gulp = require('gulp');

var clean = require('gulp-clean');
var concat = require('gulp-concat');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');

var baseDirs = {
  app: './',
  dist: './dist/'
};

var publicDirs = {
  _self: 'public/',
  js: 'public/js/',
  css: 'public/css/',
  img: 'public/img/'
};

var appFiles = {
  js: [baseDirs.app + 'js/**/*.js'],
  css: [baseDirs.app + 'css/**/*.css'],
  index: [baseDirs.app + 'views/index.jade']
};

var concatFilenames = {
  js: 'js.js',
  css: 'css.css'
};

var startupScript = 'server.js';

gulp.task('clean', function() {
  return gulp.src(baseDirs.dist).pipe(clean());
});

gulp.task('dev:concatjs', function () {
  return gulp.src(appFiles.js)
    .pipe(concat(concatFilenames.js))
    .pipe(gulp.dest(baseDirs.app + publicDirs.js));
});

gulp.task('dev:concatcss', function () {
  return gulp.src(appFiles.css)
    .pipe(concat(concatFilenames.css))
    .pipe(gulp.dest(baseDirs.app + publicDirs.css));
});

gulp.task('nodemon', function () {
  nodemon({
      script: baseDirs.app + startupScript,
      ext: 'js',
      ignore: [
        baseDirs.app + 'public/',
        baseDirs.app + 'js/',
        baseDirs.app + 'css/']
    })
    .on('restart', function () {
      console.log('Magic restarted');
    });
});

gulp.task('livereload', ['dev:concatjs', 'dev:concatcss'], function () {
  return gulp.src(appFiles.index)
    .pipe(livereload());
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch([
      appFiles.js,
      appFiles.css,
      baseDirs.app + '**/*.jade',
    ], ['livereload'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('default', ['dev:concatjs', 'dev:concatcss', 'nodemon', 'watch']);