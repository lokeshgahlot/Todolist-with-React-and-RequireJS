module.exports = function() {
  'use strict';
  var gulp = require('gulp');
  var gp = require('gulp-load-plugins')({lazy: true});
  var svgSprite = require('gulp-svg-sprites');
  var config = require('./config')();

  var src = config.spriteSrc;
  var dest = config.spriteDest;

  // var env = config.env;

  gulp.task('sprites', function() {
    return gulp.src(src)
      .pipe(gp.plumber())
      .pipe(svgSprite({
          preview: false,
          cssFile: config.spriteCSSDest
        }))
      .pipe(gp.flatten())
      .pipe(gulp.dest(dest));
  });
};
