$(document).ready(function() {
  var thermostat = new Thermostat();
  updateDisplay();

  $('#up').on('click', function() {
    thermostat.up();
    updateDisplay();
  });

  $('#down').on('click', function() {
    thermostat.down();
    updateDisplay();
  });

  $('#reset').on('click', function() {
    thermostat.resetTemp();
    updateDisplay();
  });

  $('#mode').on('click', function() {
    thermostat.switchPowerSavingMode()
    updateDisplay()
  })

  function updateDisplay() {
    $('#temperature').text(thermostat.getCurrentTemp());
    $('#usage-level').attr('class', thermostat.currentUsage())
    $('#mode').attr('class', `psm-${thermostat.isPowerSavingOn()}`)
  }







})
