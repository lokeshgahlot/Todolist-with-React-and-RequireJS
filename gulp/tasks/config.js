module.exports = function() {
  'use strict';

  var config = {
    src: '../src/',
    dest: '../dest/',
    env: process.env.NODE_ENV,
    pory: process.env.NODE_PORT,
    portProxy: ''
  };

  // js
  config.jsSrc = [  config.src + '**/*.js',
                    '!' + config.src + '**/*.ignore.js',
                    '!' + config.src + '**/bower_components/**/src/**/*.js',
                    '!' + config.src + '**/*.babelify.js'
                  ];
  config.jsDest =  config.dest + 'js/';

  // Babel
  config.babelSrc = config.src + '**/*.babelify.js';
  config.babelDest =  config.dest + 'js/';

  //sass
  config.sassSrc = config.src +   '**/sass/combine.sass';
  config.sassDest = config.dest + 'css/';

  // jade
  config.jadeSrc = config.src +   '**/*.jade';
  config.jadeDest = config.dest;

  // images
  config.spriteSrc = config.src +   '**/*.svg';
  config.spriteDest = config.dest + 'svg/';
  config.spriteCSSDest = config.dest + 'css/sprite.css';

  config.cssWatcherSrc = [config.src + '**/*.sass'];
  config.htmlWatcherSrc = [config.jadeSrc];
  config.jsWatcherSrc = [config.src + '**/*.js'];
  config.imageWatcherSrc = [config.src + '**/*.svg'];

  return config;
};
