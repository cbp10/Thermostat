'use strict';

describe("using thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it("should return temperature of 20", function() {
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });

  it("should increase the temperature by 1", function() {
    thermostat.up();
    expect(thermostat.getCurrentTemp()).toEqual(21);
  });

  it("should decrease the temperature by 1", function() {
    thermostat.down();
    expect(thermostat.getCurrentTemp()).toEqual(19);
  });

});
