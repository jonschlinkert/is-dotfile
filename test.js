/*!
 * is-dotfile <https://github.com/regexps/is-dotfile>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var isDotfile = require('./');

it('should return false when the file is not a dotfile', function () {
  assert.equal(isDotfile('a/b/c/d/e.js'), false);
  assert.equal(isDotfile('a/b.c.d/e.js'), false);
  assert.equal(isDotfile('a/b.js'), false);
  assert.equal(isDotfile('a/.b/c/a.js'), false);
  assert.equal(isDotfile('.gitignore/foo'), false);
});

it('should return true when the file is a dotfile', function () {
  assert.equal(isDotfile('a/b/c/d/.gitignore'), true);
  assert.equal(isDotfile('a/.b/c/.gitignore'), true);
  assert.equal(isDotfile('a/.gitignore'), true);
  assert.equal(isDotfile('.gitignore'), true);
  assert.equal(isDotfile('/.gitignore'), true);
});
