/*jshint -W030 */
(function() {
  'use strict';
  var HappitReporter = require('./lib/happit-reporter').HappitReporter;

  HappitReporter.$inject = ['baseReporterDecorator', 'formatError', 'config'];

  module.exports = {
    'reporter:happit': ['type', HappitReporter]
  };

})();
