module.exports = function() {
  'use strict';
  var gulp = require('gulp');
  var gp = require('gulp-load-plugins')({lazy: true});
  var config = require('./config')();
  var babel = require('gulp-babel');

  var src = config.babelSrc;
  var dest = config.babelDest;
  // var env = config.env;

  gulp.task('babel-es6', function() {
    gulp.src(src)
      .pipe(gp.sourcemaps.init())
      .pipe(babel())
      .pipe(gp.sourcemaps.write('.'))
      .pipe(gulp.dest(dest));
  });
};
