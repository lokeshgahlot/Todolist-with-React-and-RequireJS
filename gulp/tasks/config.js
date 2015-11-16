module.exports = function() {
  'use strict';

  var config = {
    src: '../src/',
    dest: '../dest/',
    env: process.env.NODE_ENV,
    pory: process.env.NODE_PORT,
    portProxy: process.env.NODE_PROXY_PORT
  };

  // js
  config.jsSrc = [  config.src + '**/*.js',
                    '!' + config.src + '**/*.ignore.js',
                    '!' + config.src + '**/bower_components/**/src/**/*.js',
                    '!' + config.src + '**/*.min.js',
                    '!' + config.src + '**/*.babelify.js'
                  ];
  config.jsDest =  config.dest + 'js/';

  // Babel
  config.babelSrc = config.src + '**/*.babelify.js';
  config.babelDest =  config.dest + 'js/';

  //sass
  config.sassSrc = config.src +   '**/*.sass';
  config.sassDest = config.dest + 'css/';

  // jade
  config.jadeSrc = config.src +   '**/*.jade';
  config.jadeDest = config.dest;

  config.cssWatcherSrc = [config.sassSrc];
  config.htmlWatcherSrc = [config.jadeSrc];
  config.jsWatcherSrc = [config.src + '**/*.js'];

  return config;
};
