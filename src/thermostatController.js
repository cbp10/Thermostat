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
  });

  function updateDisplay() {
    $('#temperature').text(thermostat.getCurrentTemp());
    $('#usage-level').attr('class', thermostat.currentUsage())
    $('#mode').attr('class', `psm-${thermostat.isPowerSavingOn()}`)
  }

});

$.get('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=' + apikey, function(data) {
	//I think the problem was that we were calling in this file before the passwords file. The order of the scripts would appear to matter.

  $('#outside-temp').text(Math.floor(data.main.temp -273.15) + " C")
  var weather = data.weather[0].description
  	$('#weather').text(weather.charAt(0).toUpperCase() + weather.slice(1))
});
