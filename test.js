/*!
 * is-dotfile <https://github.com/regexps/is-dotfile>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT License
 */

'use strict';

require('mocha');
var assert = require('assert');
var isDotfile = require('./');

describe('is-dotfile', function() {
  var truthy = [
    'a/b/c/d/e.js',
    'a/b.js',
    'a/.git/c/a.js',
    '.github/contributor.md',
    '.git/foo',
  ].forEach(function(filepath) {
    it('should be false: ' + filepath, function() {
      assert(!isDotfile(filepath));
    });
  });

  var falsey = [
    '.git',
    '.travis.yml',
    '.editorconfig',
    '/.git',
    'a/b.c.d/e.js/.git',
    'a/.b/c/.gitignore',
    'a/.gitignore',
    'a/b/c/d/.gitignore',
  ].forEach(function(filepath) {
    it('should be true: ' + filepath, function() {
      assert(isDotfile(filepath));
    });
  });
});
