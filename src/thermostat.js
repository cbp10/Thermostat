function Thermostat() {
  this.temperature = 20
  this.MIN_TEMP = 10
  this.powerSavingMode = true
};

Thermostat.prototype.getCurrentTemp = function () {
  return this.temperature
};

Thermostat.prototype.up = function () {
  return this.temperature += 1;
};

Thermostat.prototype.down = function () {
  if (this.temperature <= this.MIN_TEMP) {
    return this.MIN_TEMP
  } else {
    return this.temperature -= 1
  }
};

Thermostat.prototype.isPowerSavingOn = function () {
  return this.powerSavingMode
};

Thermostat.prototype.switchPowerSavingMode = function() {
  this.powerSavingMode = !this.powerSavingMode;
};
