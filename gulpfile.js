
'use strict';

// VARIABLES
var gulp = require('gulp'),
  gutil  = require('gulp-util'),
  minify = require('gulp-minify'),
  notify = require('gulp-notify'),
  coffee = require('gulp-coffee'),
  livereload = require('gulp-livereload');


// COFFEE
gulp.task('coffee', function() {
  return gulp.src( 'src/*.coffee')
    .pipe(coffee({
      bare: true
    }).on('error', gutil.log))
    .pipe(gulp.dest( 'dist/'))
    .pipe(minify())
    .pipe(gulp.dest( 'dist/'))
    .pipe(notify({
      message: 'coffee compiled'
    }));
});


gulp.task('listen_task', function() {

  livereload.listen();

  gulp.watch( 'dist/*.js').on('change', livereload.changed);
  gulp.watch( 'example/*.html').on('change', livereload.changed);

  gulp.watch( 'src/*.coffee',     ['coffee']        );
});

gulp.task('default', ['listen_task']);