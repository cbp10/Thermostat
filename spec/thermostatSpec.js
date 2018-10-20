'use strict';

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it("should return temperature as 20", function() {
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });

  it("should return temperature as 21", function() {
    thermostat.up();
    expect(thermostat.getCurrentTemp()).toEqual(21);
  });

  it("should return temperature as 19", function() {
    thermostat.down();
    expect(thermostat.getCurrentTemp()).toEqual(19);
  });

  it("should have a minimum temperature of 10", function() {
    for (var i = 0; i < 11; i++) {
          thermostat.down();
    }
    expect(thermostat.getCurrentTemp()).toEqual(10);
  });

  it("should return whether or not it is in power saving mode", function() {
    console.log(thermostat)
    expect(thermostat.isPowerSavingOn()).toEqual(true);
  });

  it("should be able to switch power saving mode", function() {
    expect(thermostat.isPowerSavingOn()).toEqual(true);
    thermostat.switchPowerSavingMode()
    expect(thermostat.isPowerSavingOn()).toEqual(false);
  });
});
