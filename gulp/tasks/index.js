module.exports = function() {
  'use strict';

  var gulp = require('gulp');
  var env = process.env.NODE_ENV;

  require('./jade')();
  require('./sass')();
  require('./script')();
  require('./babel')();
  require('./express')();
  require('./clean')();

  var config = require('./config')();

  // *************** watch task **********************
  gulp.task('watcher', function() {
    gulp.watch(config.htmlWatcherSrc, ['generate-html'], function() {
      console.log('HTML file changed, rebuilding...');
    });

    gulp.watch(config.cssWatcherSrc, ['generate-css'], function() {
      console.log('CSS file changed, rebuilding...');
    });

    gulp.watch(config.jsWatcherSrc, ['generate-js'], function() {
      console.log('JS file changed, rebuilding...');
    });
  });

  // end watch

  // *************** generate task **********************
  gulp.task('generate-js', ['script', 'babel-es6'], function() {
    console.log('generate-js....');
  });

  gulp.task('generate-css', ['sass'], function() {
    console.log('generate-css....');
  });

  gulp.task('generate-html', ['jade'], function() {
    console.log('generate-html....');
  });

  gulp.task('generate',['generate-html', 'generate-css', 'generate-js'], function() {
    console.log('generate....');
  });

  // end generate

  // *************** environment task **********************
  gulp.task('environment', function() {
    console.log('-----------------------------');
    console.log('environment = ', env);
    console.log('-----------------------------');
  });
  // end environment

  // *************** server task **********************
  gulp.task('server',['environment', 'generate', 'express', 'watcher'], function() {
    console.log('server....');
  });
  // end server
};
