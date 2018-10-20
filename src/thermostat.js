function Thermostat() {
  this.temperature = 20
};

Thermostat.prototype.getCurrentTemp = function () {
  return this.temperature
};
