const Thermostat = require('./thermostat');
const thermostat = new Thermostat();

describe('Thermostat and it\'s methods', () => {
  it('returns the current temperature', () => {
    expect(thermostat.getTemperature()).toBe(20);
  });

  it('increases temperature by 2 and returns the current temperature', () => {
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(22);
  });

  it('decreases temperature by 1 and returns the current temperature', () => {
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(21);
  });

  it('when PSM is on, increases temp to max 25 and returns the current temperature', () => {
    thermostat.setPowerSavingMode(true); // PSM is now on, max temperature is 25
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    };
    expect(thermostat.getTemperature()).toBe(25);
  });

  it('when PSM is of, increases temp by 1 and returns the current temperature', () => {
    thermostat.setPowerSavingMode(false);
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(26);
  });

  it('returns current energy usage', () => {
    expect(thermostat.currentEnergyUsage()).toBe('high-usage');
  });

  it('when PSM is off, increases temp to max 32 and returns the current temperature', () => {
    thermostat.setPowerSavingMode(false); // PSM is now off, max temperature is 32
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    };
    expect(thermostat.getTemperature()).toBe(32);
  });
  
  it('resets the temperature back to 20', () => {
    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
  });

  it('returns current energy usage', () => {
    expect(thermostat.currentEnergyUsage()).toBe('medium-usage');
  });
});
