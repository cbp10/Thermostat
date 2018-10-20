'use strict';

describe("using thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it("should return temperature of 20", function() {
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });

  it("should increase the temperture by 1", function() {
    thermostat.up();
    expect(thermostat.getCurrentTemp()).toEqual(21);
  });

});
