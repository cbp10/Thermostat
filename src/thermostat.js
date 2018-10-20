function Thermostat() {
  this.temperature = 20
};

Thermostat.prototype.getCurrentTemp = function () {
  return this.temperature
};

Thermostat.prototype.up = function () {
  return this.temperature += 1;
};

Thermostat.prototype.down = function () {
  return this.temperature -= 1
};
