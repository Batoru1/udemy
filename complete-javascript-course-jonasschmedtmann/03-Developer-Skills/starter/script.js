// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;

// const calcAge = birthYear => 2037 - birthYear;

// const calcTip = anyBill =>
//   (50 <= anyBill) & (anyBill <= 300) ? anyBill * 0.15 : anyBill * 0.2;

// console.log(calcAge(1991));

// //video
// //video

//PROBLEM1
//we work for a company building a smart home thermometer. Our most recent task is tgis: "Given an array temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error"

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//1) Understanding the problem
//-what is temperature amplitude?Answer:difference between highest and lowest temps
//-how compute max and min temps?
//- what's a sensor error and what to do when it occurs

//2) Breaking up into subproblems
//-how to ignore errors?
//-find max value in temps array
//-find min value in temps array
//-subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//PROBLEM2
//function should receive two arrays of temperatures

//1) understanding the problem
//-with 2 arrays , should we implement functionallity twice?NO! Just merge two arrays
//2) breaking up into subproblems
//-how to merge two arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(min, max);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

//61 debugging with the console and breakpoints
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    //c FIX bug
    value: Number(prompt('Degrees celsius')),
  };

  //B) find the bug
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// a) identify bug
console.log(measureKelvin());
