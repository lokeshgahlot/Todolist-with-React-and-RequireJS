require.config({
  paths: {
    'react': 'react.min',
    'react-dom': 'react-dom.min'
  }
});

(function() {
  'use strict';
  var wrap = function() {
  };

  if (typeof define === 'function' && define.amd) {
    define('start', [
      'main.babelify'
    ], wrap);
  }
})(this);
