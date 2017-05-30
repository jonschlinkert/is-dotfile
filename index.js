/*!
 * is-dotfile <https://github.com/jonschlinkert/is-dotfile>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

var dotfileRegex = require('dotfile-regex');

module.exports = function(str) {
  return dotfileRegex().test(str);
};
