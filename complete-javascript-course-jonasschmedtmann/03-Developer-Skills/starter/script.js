// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;

// const calcAge = birthYear => 2037 - birthYear;

// const calcTip = anyBill =>
//   (50 <= anyBill) & (anyBill <= 300) ? anyBill * 0.15 : anyBill * 0.2;

// console.log(calcAge(1991));

// //video
// //video

//PROBLEM
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

const calcTempAmplitude = function () {};
