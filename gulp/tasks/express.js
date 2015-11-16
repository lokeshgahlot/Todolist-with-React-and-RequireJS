module.exports = function() {
  'use strict';
  var gulp = require('gulp');
  var browserSync = require('browser-sync');
  var gp = require('gulp-load-plugins')({lazy: true});
  var config = require('./config')();

  var src = config.src;
  var dest = config.dest;
  // var env = config.env;

  console.log('config.proxyPort', config.proxyPort);

  var proxyPort = process.env.NODE_PROXY_PORT;
  var port = process.env.NODE_PORT;

  var startBrowserSync = function() {
    if (browserSync.active) {
      return;
    }

    var options = {
          proxy: 'localhost:' + proxyPort,
          port: port,
          files: [ dest + '**.*' ],
          ghostMode: {
            clicks: true,
            location: false,
            forms: true,
            scroll: true
          },
          injectChanges: true,
          logFileChanges: true,
          logLevel: 'debug',
          logPrefix: 'gulp-patterns',
          notify: true,
          reloadDelay: 200,
          startPath: 'index.html',
          browser: 'Google Chrome Canary'
        };
    browserSync(options);
  };

  gulp.task('browser-sync', ['nodemon'], function() {
    startBrowserSync();
  });

  gulp.task('nodemon', function() {

    return gp.nodemon({ script: 'server/index.js', ext: 'html js css' })
    .on('start', function() {
      console.log('Starting Express on port: ' + proxyPort);
      startBrowserSync();
    })
    .on('restart', function() {
      console.log('Restarting Express on port: ' + proxyPort);
      startBrowserSync();
    })
    .on('crash', function() {
      console.log('Express server encountered a problem. Attempting to reload...');
    });
  });

  gulp.task('express', ['browser-sync'], function() {
    // Run Express server
  });
};
