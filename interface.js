document.addEventListener("DOMContentLoaded", () => {

  // const updateTemperature() = () => {
  //   document.querySelector('#temperature').innerText = thermostat.temperature;
  // }

  const thermostat = new Thermostat();
  document.querySelector('#temperature').innerText = thermostat.temperature;

  document.querySelector('#temp_up').addEventListener('click', () => {
    thermostat.upTemperature();
    document.querySelector('#temperature').innerText = thermostat.temperature;
  })  

  document.querySelector('#temp_down').addEventListener('click', () => {
    thermostat.downTemperature();
    document.querySelector('#temperature').innerText = thermostat.temperature;
  }) 

  document.querySelector('#temp_reset').addEventListener('click', () => {
    thermostat.reset();
    document.querySelector('#temperature').innerText = thermostat.temperature;
  })

  document.querySelector('#PSM_on').addEventListener('click', () => {
    thermostat.switchPowerSavingModeOn();
    document.querySelector('#power-saving-status').innerText = 'on';
    document.querySelector('#temperature').innerText = thermostat.temperature;
  })

  document.querySelector('#PSM_off').addEventListener('click', () => {
    thermostat.switchPowerSavingModeOff();
    document.querySelector('#power-saving-status').innerText = 'off';
    document.querySelector('#temperature').innerText = thermostat.temperature;
  })
})