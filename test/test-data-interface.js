'use strict';

var main = require('../main');

var testDataInterface = function(fn) {
  return fn(new Date());
};

exports.testDataInterface = function(test) {
  test.expect(14);

  test.ok(testDataInterface(main.getTimeInterval) != null);
  test.ok(testDataInterface(main.getTimeInterval).length > 0);

  test.ok(testDataInterface(main.getSanskritName) != null);
  test.ok(testDataInterface(main.getSanskritName).length > 0);

  test.ok(testDataInterface(main.getEnglishName) != null);
  test.ok(testDataInterface(main.getEnglishName).length > 0);

  test.ok(testDataInterface(main.getShortDescription) != null);
  test.ok(testDataInterface(main.getShortDescription).length > 0);

  test.ok(testDataInterface(main.getRupaDescription) != null);
  test.ok(testDataInterface(main.getRupaDescription).length > 0);

  test.ok(testDataInterface(main.getVishvanathDescription) != null);
  test.ok(testDataInterface(main.getVishvanathDescription).length > 0);

  test.ok(testDataInterface(main.getLongDescription) != null);
  test.ok(testDataInterface(main.getLongDescription).length > 0);

  test.done();
};