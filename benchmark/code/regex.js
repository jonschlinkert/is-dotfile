
var dotfileRe = require('dotfile-regex');

module.exports = function isDotfile(fp) {
  return dotfileRe().test(fp);
};
