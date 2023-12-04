'use strict';

//48 looping backwards and loops in loops

// const listOfNeighbours = [
//   ['Canada', 'Mexico'],
//   ['Spain'],
//   ['Norway', 'Sweden', 'Russia'],
// ];
// for (let i = 0; i < listOfNeighbours.length; i++)
//   for (let y = 0; y < listOfNeighbours[i].length; y++)
//     console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

//49 the While Loop

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const populations = [10, 1441, 332, 83];
// // const percentages2 = [];
// // for (let i = 0; i < populations.length; i++) {
// //   // const perc = percentageOfWorld1(populations[i]);
// //   // percentages2.push(perc);
// //   percentages2.push(percentageOfWorld1(populations[i]));
// // }
// // console.log(percentages2);

// const percentages3 = [];
// let i = 0;
// while (i < populations.length) {
//   percentages3.push(percentageOfWorld1(populations[i]));
//   i++;
// }
// console.log(percentages3);

//coding challenge 4

// from codin challenge 2
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// // const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

// this challenge

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log(tips, totals);

//bonus
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals));
