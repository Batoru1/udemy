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

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// let tips = [];
// let totals = [];

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(bills[i] + tips[i]);
// }

// console.log(tips, totals);

//bonus

//expression
// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // sum = sum + arr[i];
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

//declaration
// function calcAverage(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // sum = sum + arr[i];
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }

//arrow

// const calcAverage = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // sum = sum + arr[i];
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(calcAverage(totals));

////////////////////////////////////////////////////////
///////////Repeating coding  assignments Part1//////////
////////////////////////////////////////////////////////

//Values and variables

const country = 'Lithuania';
const continent = 'Europe';
let population = 2.8;

// console.log(country, continent, population);

//Data types

const isIsland = false;
let language;

console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
);

//let const and var
language = 'lithuanian';
console.log(typeof language);

//Baasic Operators

console.log(population / 2);
console.log(++population);
// population++;
// console.log(population);
console.log(population > 6);
console.log(population < 33);

const description2 =
  country +
  ' is in ' +
  continent +
  ", and it's " +
  population +
  ' million people speak ' +
  language;
console.log(description2);

//Strings and template literalls

const description1 = `${country} is in ${continent}, and it's ${population} million peoplee speak ${language}`;
console.log(description1);

//Taking decissions:if/else Statements

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million bellow average`
  );
}

//type conversion and coercion

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

//Equality Operators: == vs. ===

// let numNeighbours = Number(
//   prompt('How many neighbour countries does your country have?')
// );
// if (numNeighbours === 1) {
//   console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//   console.log('More than 1 border');
// } else {
//   console.log('No borders');
// }

//Logical Operators

if ((language === 'english') & (population < 50) & !isIsland) {
  console.log(`you should live in ${country}`);
} else {
  console.log(`${country} doesn't meet your criteria`);
}
console.log(!isIsland);

//The switch statement

switch (language) {
  case 'chinese ||  mandarin':
    console.log('MOST number of native speakers!');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('even better language!');
}

//The conditional(ternary) operator

// population > 33
//   ? console.log(`${country}'s population is above average`)
//   : console.log(`${country}'s population is below average`);

console.log(
  `${country}'s population is ${population > 33 ? 'above' : 'below'} average`
);
