'use strict';

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it("should return temperture as 20", function() {
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });

  it("should return temperature as 21", function() {
    thermostat.up();
    expect(thermostat.getCurrentTemp()).toEqual(21);
  });
});
