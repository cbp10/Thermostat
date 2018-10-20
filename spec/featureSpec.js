'use strict';

describe("using thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it("should return temperature of 20", function() {
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });


});
