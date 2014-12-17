var gulp = require('gulp');

var clean = require('gulp-clean');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');

var bases = {
 app: './',
 dist: 'dist/',
};

var paths = {
 scripts: ['public/js/**/*.js'],
 libs: ['public/libs/**/*'],
 styles: ['styles/**/*.css'],
 index: ['public/index.jade'],
 views: ['public/views/**/*.jade'],
 images: ['public/img/**/*'],
 backends: ['app/**/*', 'config/**/*', 'server.js', 'bower.json', 'package.json', 'gulpfile.js'],
};

// Delete the dist directory
gulp.task('clean', function() {
 return gulp.src(bases.dist)
  .pipe(clean());
});

// Process scripts and concatenate them into one output file
gulp.task('scripts', function() {
 gulp.src(paths.scripts, {cwd: bases.app})
 .pipe(jshint())
 .pipe(jshint.reporter('default'))
 .pipe(uglify())
 .pipe(concat('app.min.js'))
 .pipe(gulp.dest(bases.dist + 'public/js'));
});

// Imagemin images and ouput them in dist
gulp.task('imagemin', ['clean'], function() {
 gulp.src(paths.images, {cwd: bases.app})
 .pipe(imagemin())
 .pipe(gulp.dest(bases.dist + 'public/img'));
});

// Copy all other files to dist directly
gulp.task('copy', ['clean'], function() {
 // Copy index
 gulp.src(paths.index, {cwd: bases.app})
 .pipe(gulp.dest(bases.dist + 'public'));

 // Copy views
 gulp.src(paths.views, {cwd: bases.app})
 .pipe(gulp.dest(bases.dist + 'public/views'));

 // Copy styles
 gulp.src(paths.styles, {cwd: bases.app})
 .pipe(gulp.dest(bases.dist + 'public/css'));

 // Copy lib scripts, maintaining the original directory structure
 gulp.src(paths.libs, {cwd: bases.app + '**'})
 .pipe(gulp.dest(bases.dist));

 // Copy back-end files
 gulp.src(paths.backends, {cwd: bases.app + '**'})
 .pipe(gulp.dest(bases.dist));
});

// A development task to run anytime a file changes
gulp.task('watch', function() {
 gulp.watch(bases.app + '**', ['scripts', 'copy']);
});

// Define the default task as a sequence of the above tasks
gulp.task('default', ['clean', 'scripts', 'imagemin', 'copy']);