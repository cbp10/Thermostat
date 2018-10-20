'use strict';

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it("should return temperture as 20", function() {
    expect(thermostat.getCurrentTemp()).toEqual(20)
  });
});
