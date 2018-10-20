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
    expect(thermostat.isPowerSavingOn()).toEqual(true);
  });

  it("should be able to switch power saving mode", function() {
    expect(thermostat.isPowerSavingOn()).toEqual(true);
    thermostat.switchPowerSavingMode()
    expect(thermostat.isPowerSavingOn()).toEqual(false);
  });

  it("should not exceed max temp of 25 when power saving on", function() {
    for (var i = 0; i < 6; i++) {
          thermostat.up();
    }
    expect(thermostat.getCurrentTemp()).toEqual(25);
  });

  it("should not exceed max temp of 32 when power saving off", function() {
    thermostat.switchPowerSavingMode()
    for (var i = 0; i < 13; i++) {
          thermostat.up();
    }
    expect(thermostat.getCurrentTemp()).toEqual(32);
  });

  it("should be able to reset temperature", function() {
    thermostat.up()
    thermostat.resetTemp()
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });

  it("should return low usage for temperature < 18", function() {
    for (var i = 0; i < 5; i++) {
          thermostat.down();
    }
    expect(thermostat.currentUsage()).toEqual("low-usage")
  });

  it("should return medium usage for 18 < temperature < 25", function() {
    expect(thermostat.currentUsage()).toEqual("medium-usage")
  });

  it("should return medium usage for temperature >= 25", function() {
    for (var i = 0; i < 5; i++) {
          thermostat.up();
    }
    expect(thermostat.currentUsage()).toEqual("high-usage")
  });
});
