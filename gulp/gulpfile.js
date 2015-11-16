'use strict';
var argv = require('yargs').argv;

process.env.NODE_ENV = argv.env || process.env.NODE_ENV || 'dev';
process.env.NODE_PORT = argv.env || process.env.NODE_PORT || '8080';
process.env.NODE_PROXY_PORT = argv.env || process.env.NODE_PROXY_PORT || '3030';

require('./tasks')();
