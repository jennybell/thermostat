class Thermostat {
 constructor() {
   
    this.powerSavingMode = true;
    this.MINIMUM_TEMPERATURE = 10;
    this.DEFAULT_TEMPERATURE = 20;
    this.PSM_ON_MAXIMUM_TEMPERATURE = 25;
    this.PSM_OFF_MAXIMUM_TEMPERATURE = 32;
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
    this.HIGH_ENERGY_USAGE_LIMIT = 25;
    this.temperature = this.DEFAULT_TEMPERATURE;
 }
  getCurrentTemperature() {
    return this.temperature
  }

  upTemperature(){
    if (this.isMaximumTemperature()) {
    return;
  } 
  this.temperature += 1
  }

  downTemperature() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature -= 1
  }

  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }

  isMaximumTemperature() {
    if (this.isPowerSavingModeOn() === true ) {
    return this.temperature === this.PSM_ON_MAXIMUM_TEMPERATURE;
    } 
    return this.temperature === this.PSM_OFF_MAXIMUM_TEMPERATURE;
  }


  isPowerSavingModeOn() {
    return this.powerSavingMode === true
  }

  switchPowerSavingModeOff() {
    this.powerSavingMode = false;
  }

  switchPowerSavingModeOn() {
    this.powerSavingMode = true;
  }

  reset() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  }

  currentEnergyUsage() {
    if(this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
      return "low-usage";
    } else if (this.temperature <= this.HIGH_ENERGY_USAGE_LIMIT) {
      return "medium-usage";
    } else {
      return "high-usage";
    }
  }

}