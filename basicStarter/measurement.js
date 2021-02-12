const measureKelvin = function() {
  const measurement = {
    type: 'temp',
    unit: 'Celsium',

    // prompts convert value to String always
    // value: Number(prompt('Degress celsius: '))
    value: 10
  };
  // console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

const calcTempAmplitudeBug = function(t1, t2) {
  const temps = t1.concat(t2);

  console.log(temps);
  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemps = temps[i];
    if (typeof curTemps !== 'number') continue;

    if (curTemps > max) max = curTemps;
    if (curTemps < min) min = curTemps;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitude);
