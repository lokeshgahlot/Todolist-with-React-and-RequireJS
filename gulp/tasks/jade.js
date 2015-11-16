module.exports = function() {
  'use strict';

  var gulp = require('gulp');
  var gp = require('gulp-load-plugins')({lazy: true});
  var config = require('./config')();

  var src = config.src + '**/*.jade';
  var dest = config.dest;
  var env = config.env;

  var jadeTask = function() {
    return gulp.src(src)
      .pipe(gp.plumber())
      .pipe(gp.sourcemaps.init())
      .pipe(gp.jade({pretty: env === 'prod' ? false : true}))
      .pipe(gp.flatten())
      .pipe(gp.sourcemaps.write())
      .pipe(gulp.dest(dest));
  };

  gulp.task('jade', function() {
    return jadeTask();
  });
};
