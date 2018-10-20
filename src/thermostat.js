function Thermostat() {
  this.temperature = 20
  this.MIN_TEMP = 10
  this.powerSavingMode = true
  this.maxTemperature = 25
};

Thermostat.prototype.getCurrentTemp = function () {
  return this.temperature
};

Thermostat.prototype.up = function () {
  this.maxTemp()
  if (this.temperature >= this.maxTemperature) {
    return this.maxTemperature
  } else {
    return this.temperature += 1;
  }
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

Thermostat.prototype.maxTemp = function() {
  if (this.powerSavingMode) {
    this.maxTemperature = 25
  } else {
    this.maxTemperature = 32
  }
};

Thermostat.prototype.resetTemp = function () {
  this.temperature = 20
};
