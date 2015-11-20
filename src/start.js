require.config({
  paths: {
    'react': 'react.min',
    'react-dom': 'react-dom.min',
    'firebase': 'firebase.min',
    'reactfire': 'reactfire.min'
  },
  shim: {
    'firebase': {exports: 'Firebase'},
    'reactfire': {exports: 'reactfire'}
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
