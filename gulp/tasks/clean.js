module.exports = function() {
  'use strict';
  var gulp = require('gulp');
  // var gp = require('gulp-load-plugins')({lazy: true});
  var config = require('./config')();
  var rimraf = require('gulp-rimraf');

  // var src = config.src + '**/*.jade';
  var dest = config.dest;
  // var env = config.env;

  gulp.task('clean', function() {
    gulp.src(dest)
      .pipe(rimraf({ force: true }));
  });
};
