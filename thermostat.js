class Thermostat {
  constructor() {
    this.thermostat = 20;
    this.PowerSavingMode = true;
  }

  getTemperature() {
    return this.thermostat;
  }
  
  up() {
    if(this.PowerSavingMode === true && this.thermostat < 25) {
      return this.thermostat += 1;
    } else if (this.PowerSavingMode === false && this.thermostat < 32) {
      return this.thermostat += 1;
    } else {
      return this.thermostat;
    }
  }

  down() {
    return this.thermostat -= 1;
  }

  setPowerSavingMode(boolean) {
    return this.PowerSavingMode = boolean;
  }

  reset() {
    return this.thermostat = 20;
  }

  currentEnergyUsage() {
    if(this.thermostat < 18) {
      return 'low-usage';
    } else if (this.thermostat >= 18 && this.thermostat <= 25) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
  }
};

module.exports = Thermostat;
