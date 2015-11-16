;(function() {
  'use strict';
  var express = require('express');
  // var port = process.env.NODE_PORT;
  var proxyPort = process.env.NODE_PROXY_PORT;

  // expressApp is the main server object
  var expressApp = module.exports = express();

  // var router = express.Router();

  expressApp.use(express.static('../dest'));

  expressApp.get('/', function(req, res) {
    res.sendfile('../dest/index.html');
  });

  expressApp.listen(proxyPort, function(req, res) {
    console.log('run....');
  });

})();

