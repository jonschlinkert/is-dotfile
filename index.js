/*!
 * is-dotfile <https://github.com/regexps/is-dotfile>
 *
 * Copyright (c) 2015 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var dotfileRe = require('dotfile-regex');

module.exports = function isDotfile(fp) {
  return dotfileRe().test(fp);
};
