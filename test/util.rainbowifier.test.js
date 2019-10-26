'use strict';

var rewire = require('rewire');
var chai = require('chai');
var sinon = require('sinon');

chai.config.includeStack = true;
chai.use(require('sinon-chai'));

var assert = chai.assert;
var eq = assert.equal;
var ok = assert.ok;
var nok = assert.notOk;

describe('util/rainbowifier.js test suite', function() {
  var module;
  var sut;

  beforeEach(function(done) {
    module = rewire('../lib/util/rainbowifier');
    sut = module.getInstance();
    done();
  });

  afterEach(function(done) {
    module = null;
    sut = null;
    done();
  });

  describe('rainbowify - method tests', function() {

    it('should return expected colorized string for each string passed in', function() {

      var expected = [  '\u001b[38;5;25ma\u001b[0m',
                        '\u001b[38;5;26ma\u001b[0m',
                        '\u001b[38;5;27ma\u001b[0m',
                        '\u001b[38;5;31ma\u001b[0m',
                        '\u001b[38;5;33ma\u001b[0m',
                        '\u001b[38;5;37ma\u001b[0m',
                        '\u001b[38;5;38ma\u001b[0m',
                        '\u001b[38;5;39ma\u001b[0m',
                        '\u001b[38;5;44ma\u001b[0m',
                        '\u001b[38;5;45ma\u001b[0m',
                        '\u001b[38;5;247ma\u001b[0m',
                        '\u001b[38;5;248ma\u001b[0m',
                        '\u001b[38;5;249ma\u001b[0m',
                        '\u001b[38;5;250ma\u001b[0m',
                        '\u001b[38;5;251ma\u001b[0m',
                        '\u001b[38;5;252ma\u001b[0m',
                        '\u001b[38;5;253ma\u001b[0m',
                        '\u001b[38;5;254ma\u001b[0m',
                        '\u001b[38;5;255ma\u001b[0m',
                        '\u001b[38;5;25ma\u001b[0m',
                        '\u001b[38;5;26ma\u001b[0m',
                        '\u001b[38;5;27ma\u001b[0m',
                        '\u001b[38;5;31ma\u001b[0m',
                        '\u001b[38;5;33ma\u001b[0m',
                        '\u001b[38;5;37ma\u001b[0m',
                        '\u001b[38;5;38ma\u001b[0m',
                        '\u001b[38;5;39ma\u001b[0m',
                        '\u001b[38;5;44ma\u001b[0m',
                        '\u001b[38;5;45ma\u001b[0m',
                        '\u001b[38;5;247ma\u001b[0m',
                        '\u001b[38;5;248ma\u001b[0m',
                        '\u001b[38;5;249ma\u001b[0m',
                        '\u001b[38;5;250ma\u001b[0m',
                        '\u001b[38;5;251ma\u001b[0m',
                        '\u001b[38;5;252ma\u001b[0m',
                        '\u001b[38;5;253ma\u001b[0m',
                        '\u001b[38;5;254ma\u001b[0m',
                        '\u001b[38;5;255ma\u001b[0m',
                        '\u001b[38;5;25ma\u001b[0m',
                        '\u001b[38;5;26ma\u001b[0m',
                        '\u001b[38;5;27ma\u001b[0m',
                        '\u001b[38;5;31ma\u001b[0m',
                        '\u001b[38;5;33ma\u001b[0m']; //starts over on item 43

      var actual = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'.split('');

      for (var i = 0; i < actual.length; i++) {
        eq(expected[i], sut.rainbowify(actual[i]));
      }
    });

  });
});
