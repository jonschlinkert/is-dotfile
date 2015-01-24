'use strict';

var Suite = require('benchmarked');

var suite = new Suite({
  result: true,
  fixtures: 'fixtures/*.js',
  add: 'code/*.js',
  cwd: __dirname
});

suite.run();