module.exports = function() {
  'use strict';

  var gulp = require('gulp');
  var gp = require('gulp-load-plugins')({lazy: true});
  var config = require('./config')();

  var src = config.jsSrc;
  var dest = config.jsDest;
  var env = config.env;

  var scriptTask = function() {
    return gulp.src(src)
    .pipe(gp.plumber())
    .pipe(gp.sourcemaps.init())
    .pipe(gp.flatten())
    .pipe(gp.sourcemaps.write())
    .pipe(gulp.dest(dest));
  };

  gulp.task('script', function() {
    return scriptTask();
  });

};
