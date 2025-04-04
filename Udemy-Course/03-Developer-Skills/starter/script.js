// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;
// if (x === 23) console.log(23);

// const calcAge = birthYear => 2037 - birthYear;

// configured user-snippet to make "cl" automatically print console.log();

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temps1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temps2 = [7, -6, -4, -15, 'error', 32, 45, 13, 15, 4, 24, 13];
// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temps?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

/*
const calcTempAmplitude = function (temps) {
  let maxTemp = temps[0];
  let minTemp = temps[temps.length - 1];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > maxTemp) maxTemp = curTemp;
    if (curTemp < minTemp) minTemp = curTemp;
    // if (typeof temps[i] !== 'number') continue;
  }
  return maxTemp - minTemp;
};

const amplitude = calcTempAmplitude(temps1);
console.log(amplitude);
*/

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitude = function (temps1, temps2) {
  const mergedTemps = temps1.concat(temps2);
  let maxTemp = mergedTemps[0];
  let minTemp = mergedTemps[mergedTemps.length - 1];
  for (let i = 0; i < mergedTemps.length; i++) {
    const curTemp = mergedTemps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > maxTemp) maxTemp = curTemp;
    if (curTemp < minTemp) minTemp = curTemp;
    // if (typeof temps[i] !== 'number') continue;
  }
  console.log(mergedTemps);
  return maxTemp - minTemp;
};

const amplitude = calcTempAmplitude(temps1, temps2);
console.log(amplitude);
