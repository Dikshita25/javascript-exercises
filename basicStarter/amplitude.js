// PROBLEM 1:
// we work for a company building a smart home thermometer. Out most recent taks is this: Given an array of temps of one day, calculcate th temp amplitude. keep in mind that somethimes there might be sensor errors

const temp = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// Understang the problem
// what is temp amplitude? // differnece between highest and lowest temp
// how to compute max and min temp?
// what does sensor error look like? and what to do when it appears? // String here as error

// Breaking up the problem
// How to ignore the sensor errors?
// Find the max value in temp array
// find the min value
// Subtract max and min value (amplitude) and return it

// Starting with the problem

// const calcTempAmplitude = function(temp) {
//   let maxTemp = temp[0];
//   let minTemp = temp[0];

//   for (let i = 0; i < temp.length; i++) {
//     const curTemps = temp[i];
//     if (typeof curTemps !== 'number') continue;

//     if (curTemps > maxTemp) maxTemp = curTemps;
//     if (curTemps < minTemp) minTemp = curTemps;
//   }
//   console.log(maxTemp, minTemp);
//   return maxTemp - minTemp;
// };
// const amplitude = calcTempAmplitude(temp);
// console.log(amplitude);

// Problem 2 : 2 arrays of temps
// With  2arrays . should we implement same functionality twice? no merge the 2 arrays

//merge 2 arrays?
const temp1 = [3, -2, -9, -1, 'error', 9, 13, 23, 15, 14, 9, 5];
const temp2 = [3, -2, -6, -1, 'error'];

const temps = temp1.concat(temp2);
console.log(temps);

const calcTempAmplitudeNew = function(summedArray) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemps = temps[i];
    if (typeof curTemps !== 'number') continue;

    if (curTemps > max) max = curTemps;
    if (curTemps < min) min = curTemps;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitudeNew(temp);
console.log(amplitude);
