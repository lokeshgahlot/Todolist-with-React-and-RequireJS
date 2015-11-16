module.exports = function() {
  'use strict';

  var gulp = require('gulp');
  var gp = require('gulp-load-plugins')({lazy: true});

  var config = require('./config')();

  var src = config.sassSrc;
  var dest = config.sassDest;
  var env = config.env;

  var sassTask = function() {
    var config = {};

    switch (env) {
      case 'dev':
        // config.sourceComments = 'map';
        break;
      case 'prod':
        config.outputStyle = 'compressed';
        break;
      default:
        break;
    }

    return gulp.src(src)
      .pipe(gp.plumber())
      .pipe(gp.sourcemaps.init())
      .pipe(gp.sass(config))
      .pipe(gp.autoprefixer('last 3 version'))
      .pipe(gp.flatten())
      .pipe(gp.sourcemaps.write())
      .pipe(gulp.dest(dest));
  };

  gulp.task('sass', function() {
    return sassTask();
  });
};
