'use strict';

describe('Thermostat', () => {
  
let thermostat;

beforeEach(() => {
  thermostat = new Thermostat();
});  

describe('temperature', () => {
  
  it('starts at 20 degrees', () => {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases temperature with an up function', () => {
    thermostat.upTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases temperature with a down function', () => {
    thermostat.downTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has a minimum temperature of 10 degrees', () => {
    for (let i = 1; i <= 11; i++) {
      thermostat.downTemperature()
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('resets temperature to 20', ()=> {
    for (let i = 1; i <= 2; i++) {
    thermostat.upTemperature()
    }
    thermostat.reset()
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

});


describe('power saving mode', () => {

  it('power saving mode defaults to on', ()=> {
    expect(thermostat.isPowerSavingModeOn()).toBe (true);
  })
   
  it('power saving mode can switch off', ()=> {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe (false);
  })

  it('power saving mode can switch back on', ()=> {
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe (true);
  })

  it('has a maximum temperature of 25 degrees when power saving mode is on', () => {
    for (let i = 1; i <= 6; i++) {
      thermostat.upTemperature()
    }
    expect(thermostat.getCurrentTemperature()).toEqual(25);
  });

  it('has a max temp of 32 degrees when power saving mode is off', () => {
    thermostat.switchPowerSavingModeOff();
    for (let i = 1; i <= 13; i++) {
      thermostat.upTemperature()
    }
    expect(thermostat.getCurrentTemperature()).toEqual(32);
  });

});



describe('showing energy usages', () => {
    
  it('shows current energy usage as low-usage when below 18 ', () => {
    for (let i = 1; i <= 3; i++) {
      thermostat.downTemperature()
    }
    expect(thermostat.currentEnergyUsage()).toEqual("low-usage")
  });

  it('shows current energy usage as medium-usage when 25 ', () => {
    for (let i = 1; i <= 5; i++) {
      thermostat.upTemperature()
    }
    expect(thermostat.currentEnergyUsage()).toEqual("medium-usage")
  });

  it('shows current energy usage as high-usage when over 25 ', () => {
    thermostat.powerSavingMode = false;
    for (let i = 1; i <= 6; i++) {
      thermostat.upTemperature()
    }
    expect(thermostat.currentEnergyUsage()).toEqual("high-usage")
  });

});

});