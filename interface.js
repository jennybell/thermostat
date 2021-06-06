'use strict';

document.addEventListener("DOMContentLoaded", () => {
 


   const updateTemperature = () => {
     document.querySelector('#temperature').innerText = thermostat.temperature;
     document.querySelector('#temperature').className = thermostat.currentEnergyUsage();
    }

  const thermostat = new Thermostat();
  updateTemperature();

  document.querySelector('#temp_up').addEventListener('click', () => {
    thermostat.upTemperature();
    updateTemperature()
  })  

  document.querySelector('#temp_down').addEventListener('click', () => {
    thermostat.downTemperature();
    updateTemperature();
  }) 

  document.querySelector('#temp_reset').addEventListener('click', () => {
    thermostat.reset();
    updateTemperature();
  })

  document.querySelector('#PSM_on').addEventListener('click', () => {
    thermostat.switchPowerSavingModeOn();
    document.querySelector('#power-saving-status').innerText = 'ON';
    updateTemperature();
  })

  document.querySelector('#PSM_off').addEventListener('click', () => {
    thermostat.switchPowerSavingModeOff();
    document.querySelector('#power-saving-status').innerText = 'OFF';
    updateTemperature();
  })
})