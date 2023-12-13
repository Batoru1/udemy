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

// //Values and variables

// const country = 'Lithuania';
// const continent = 'Europe';
// let population = 2.8;

// // console.log(country, continent, population);

// //Data types

// const isIsland = false;
// let language;

// console.log(
//   typeof isIsland,
//   typeof population,
//   typeof country,
//   typeof language
// );

// //let const and var
// language = 'lithuanian';
// console.log(typeof language);

// //Baasic Operators

// console.log(population / 2);
// console.log(++population);
// // population++;
// // console.log(population);
// console.log(population > 6);
// console.log(population < 33);

// const description2 =
//   country +
//   ' is in ' +
//   continent +
//   ", and it's " +
//   population +
//   ' million people speak ' +
//   language;
// console.log(description2);

// //Strings and template literalls

// const description1 = `${country} is in ${continent}, and it's ${population} million peoplee speak ${language}`;
// console.log(description1);

// //Taking decissions:if/else Statements

// if (population > 33) {
//   console.log(`${country}'s population is above average`);
// } else {
//   console.log(
//     `${country}'s population is ${33 - population} million bellow average`
//   );
// }

// //type conversion and coercion

// console.log('9' - '5');
// console.log('19' - '13' + '17');
// console.log('19' - '13' + 17);
// console.log('123' < 57);
// console.log(5 + 6 + '4' + 9 - 4 - 2);

// //Equality Operators: == vs. ===

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

// //Logical Operators

// if ((language === 'english') & (population < 50) & !isIsland) {
//   console.log(`you should live in ${country}`);
// } else {
//   console.log(`${country} doesn't meet your criteria`);
// }
// console.log(!isIsland);

// // The switch statement

// switch (language) {
//   case 'chinese ||  mandarin':
//     console.log('MOST number of native speakers!');
//     break;
//   case 'spanish':
//     console.log('2nd place in number of native speakers');
//     break;
//   case 'english':
//     console.log('3rd place');
//     break;
//   case 'hindi':
//     console.log('Number 4');
//     break;
//   case 'arabic':
//     console.log('5th most spoken language');
//     break;
//   default:
//     console.log('even better language!');
// }

// //The conditional(ternary) operator

// population > 33
//   ? console.log(`${country}'s population is above average`)
//   : console.log(`${country}'s population is below average`);

// console.log(
//   `${country}'s population is ${population > 33 ? 'above' : 'below'} average`
// );

////////////////////////////////////////////////////////
///////////Repeating coding  assignments Part2//////////
////////////////////////////////////////////////////////

//functions

// function describeCountry(country, population, capitalCity) {
//   console.log(
//     `${country} has ${population} million people and it's capital city is ${capitalCity}`
//   );
// }

// const countryLit = describeCountry('Lithuania', 2.8, 'Vilnius');
// const countryPol = describeCountry('Poland', 38, 'Warsaw');
// const countryLat = describeCountry('Latvia', 1.8, 'Ryga');

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and it's capital city is ${capitalCity}`;
// }

// const countryLit = describeCountry('Lithuania', 2.8, 'Vilnius');
// const countryPol = describeCountry('Poland', 38, 'Warsaw');
// const countryLat = describeCountry('Latvia', 1.8, 'Ryga');

// console.log(countryLit, countryLat, countryPol);

//Function Declarations vs. Expressions

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const popLit = percentageOfWorld1(2.8);
// const popLat = percentageOfWorld1(1.8);
// const popEst = percentageOfWorld1(1.3);

// console.log(popLit, popLat, popEst);

// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };

// const popPol = percentageOfWorld2(38);
// const popGer = percentageOfWorld2(83);
// const popUsa = percentageOfWorld2(331);

// console.log(popPol, popGer, popUsa);

// //Arrow function
// const percentageOfWorld3 = (population) => (population / 7900) * 100;

// const popTaiw = percentageOfWorld3(23);
// const popDen = percentageOfWorld3(5.8);
// const popUkr = percentageOfWorld3(41);

// console.log(popTaiw, popDen, popUkr);

//Functions calling other functions

//declaration
// function describePopulation(country, population) {
//   return `${country} has ${population} million people, which is about ${percentageOfWorld1(
//     population
//   )}% of world population`;
// }

// console.log(describePopulation('Finland', 5.5));
// console.log(describePopulation('Japan', 126));
// console.log(describePopulation('Netherlands', 17.5));

//expression
// const describePopulation2 = function (country, population) {
//   return `${country} has ${population} million people, which is about ${percentageOfWorld1(
//     population
//   )}% of world population`;
// };

// console.log(describePopulation2('Finland', 5.5));
// console.log(describePopulation2('Japan', 126));
// console.log(describePopulation2('Netherlands', 17.5));

//arrow
// const describePopulation3 = (country, population) =>
//   `${country} has ${population} million people, which is about ${percentageOfWorld1(
//     population
//   )}% of world population`;

// console.log(describePopulation3('Finland', 5.5));
// console.log(describePopulation3('Japan', 126));
// console.log(describePopulation3('Netherlands', 17.5));

//Introduction to arrays

// const populations = [2.8, 33, 331, 23];

// console.log(populations.length === 4);

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];

// console.log(percentages);

//basic array operations(methods)

// const neighboursLit = ['Latvia', 'Poland', 'Belarus', 'Russia'];
// console.log(neighboursLit);

// neighboursLit.push('Utopia');
// console.log(neighboursLit);

// neighboursLit.pop();
// console.log(neighboursLit);

// !neighboursLit.includes('Germany')
//   ? console.log(' Probably not a central European country :D')
//   : console.log('A central European country');

// console.log(neighboursLit.indexOf('Russia'));
// neighboursLit[neighboursLit.indexOf('Russia')] = 'Orckland';
// console.log(neighboursLit);

//introduction to objects

// const myCountry = {
//   country: 'Lithuania',
//   capital: 'Vilnius',
//   language: 'lithuanian',
//   population: 2.8,
//   neighbours: ['Latvia', 'Poland', 'Belarus', 'Russia'],
// };

//Dot vs. Bracket Notation

// console.log(
//   `${myCountry.country} has ${myCountry['population']} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry['capital']}`
// );

// myCountry.population += 2;
// console.log(myCountry.population);

// myCountry['population'] -= 2;
// console.log(myCountry.population);

//Object methods

// myCountry.describe = function () {
//   console.log(
//     `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
//   );
// };

// myCountry.describe();

// myCountry.checkIsland = function () {
//   this.isIsland = !Boolean(this.neighbours.length);
// this.isIsland = this.neighbours.length === 0 ? true : false;
// console.log(this.sIsland);
// };

// myCountry.checkIsland();

// console.log(myCountry);

//iteration the for loop

// for (let i = 1; i <= 50; i++) {
//   console.log(`voter number ${i} is currently voting`);
// }

// //looping arrays breaking and continuing
// function percentageOfWorld12(population) {
//   return (population / 7900) * 100;
// }

// const populations2 = [2.8, 33, 331, 23];

// const percentages2 = [];
// for (let i = 0; i < populations2.length; i++) {
//   percentages2[i] = percentageOfWorld12(populations2[i]);
// }

// console.log(percentages2, percentages);

//looping backwards and loops in loops

// const listOfNeighbours = [
//   ['Canada', 'Mexico'],
//   ['Spain'],
//   ['Norway', 'Sweden', 'Russia'],
// ];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for (let y = 0; y < listOfNeighbours[i].length; y++)
//     console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
// }

//the while loop
// const percentages3 = [];

// let i = 0;
// while (i < populations2.length) {
//   percentages3[i] = percentageOfWorld12(populations2[i]);
//   i++;
// }

// console.log(percentages, percentages2, percentages3);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CODING CHALLANGES REPEAT////////////////////////
//////////////////////////// PART 1/////////////////////////////
///////////////////////////////////////////////////////////////////////////

//Coding challange 1

const massMark1 = 78;
const heightMark1 = 1.69;
const massJohn1 = 92;
const heightJohn1 = 1.95;

const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

const BMIMark1 = massMark1 / heightMark1 ** 2;
const BMIJohn1 = massJohn1 / heightJohn1 ** 2;

const BMIMark2 = massMark2 / heightMark2 ** 2;
const BMIJohn2 = massJohn2 / heightJohn2 ** 2;

console.log(BMIMark1, BMIJohn1, BMIMark2, BMIJohn2);

const markHigherBMI1 = BMIMark1 > BMIJohn1;
const markHigherBMI2 = BMIMark2 > BMIJohn2;

console.log(markHigherBMI1, markHigherBMI2);

//coding challange2

if (BMIMark1 > BMIJohn1) {
  console.log(`Mark's BMI(${BMIMark1}) is higher than John's(${BMIJohn1})!🐳`);
} else {
  console.log(`John's BMI(${BMIJohn1}) is higher than Mark's(${BMIMark1})! 🐋`);
}

if (BMIMark2 > BMIJohn2) {
  console.log(`Mark's BMI(${BMIMark2}) is higher than John's(${BMIJohn2})!🐳`);
} else {
  console.log(`John's BMI(${BMIJohn2}) is higher than Mark's(${BMIMark2})!🐋`);
}

//coding challange 3
const scoreDolphins1 = [96, 108, 89];
const scoreKoalas1 = [88, 91, 110];

const calcAvgD1 =
  (scoreDolphins1[0] + scoreDolphins1[1] + scoreDolphins1[2]) / 3;

const calcAvgK1 =
  (scoreKoalas1[0] + scoreKoalas1[1] + scoreKoalas1[2]) / scoreKoalas1.length;

console.log(calcAvgD1, calcAvgK1);

if (calcAvgD1 > calcAvgK1) {
  console.log(`Dolphins won ${calcAvgD1} to ${calcAvgK1}!
  🏆 `);
} else if (calcAvgD1 < calcAvgK1) {
  console.log(`Koalas won ${calcAvgK1} to ${calcAvgD1}! 🏆`);
} else {
  console.log(`it's a tie ${calcAvgD1} = ${calcAvgK1}! 🟰`);
}

//Bonus 1
const scoreDolphins2 = [97, 112, 101];
const scoreKoalas2 = [109, 95, 123];

const calcAvgD2 =
  (scoreDolphins2[0] + scoreDolphins2[1] + scoreDolphins2[2]) / 3;

const calcAvgK2 =
  (scoreKoalas2[0] + scoreKoalas2[1] + scoreKoalas2[2]) / scoreKoalas1.length;

console.log(calcAvgD2, calcAvgK2);

if ((calcAvgD2 > calcAvgK2) & (calcAvgD2 >= 100)) {
  console.log(`Dolphins won ${calcAvgD2} to ${calcAvgK2}!
  🏆 `);
} else if ((calcAvgD2 < calcAvgK2) & (calcAvgK2 >= 100)) {
  console.log(`Koalas won ${calcAvgK2} to ${calcAvgD2}! 🏆`);
} else {
  console.log(`it's a tie ${calcAvgD2} = ${calcAvgK2}! 🟰`);
}

//Bonus 2
const scoreDolphins3 = [97, 112, 101];
const scoreKoalas3 = [109, 95, 106];

const calcAvgD3 =
  (scoreDolphins3[0] + scoreDolphins3[1] + scoreDolphins3[2]) / 3;

const calcAvgK3 =
  (scoreKoalas3[0] + scoreKoalas3[1] + scoreKoalas3[2]) / scoreKoalas1.length;

console.log(calcAvgD3, calcAvgK3);

if ((calcAvgD3 > calcAvgK3) & (calcAvgD3 >= 100)) {
  console.log(`Dolphins won ${calcAvgD3} to ${calcAvgK3}!
  🏆 `);
} else if ((calcAvgD3 < calcAvgK3) & (calcAvgK3 >= 100)) {
  console.log(`Koalas won ${calcAvgK3} to ${calcAvgD3}! 🏆`);
} else if ((calcAvgD3 === calcAvgK3) & (calcAvgD3 >= 100)) {
  console.log(`it's a tie ${calcAvgD3} = ${calcAvgK3}! 🟰`);
} else {
  console.log(`no one wins ${calcAvgD3} & ${calcAvgK3} less than 100! ☠️`);
}

//coding challange4

let bill = 275;
// const bill = 40;
// const bill = 430;

let tip;

tip = (50 <= bill) & (bill <= 300) ? bill * 0.15 : bill * 0.2;

// if ((50 <= bill) & (bill <= 300)) {
//   tip = bill * 0.15;
// } else {
//   tip = bill * 0.2;
// }
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total values was ${
    bill + tip
  }`
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CODING CHALLANGES REPEAT////////////////////////
//////////////////////////// PART 2/////////////////////////////
///////////////////////////////////////////////////////////////////////////

//Coding challange1

//data1

const calcAverage = (score1, score2, scor3) => (score1 + score2 + scor3) / 3;

//dat1
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins, avgKoalas);

const checkWinner = (scoreDolphins, scoreKolas) => {
  if (scoreDolphins >= scoreKolas * 2) {
    console.log(`Dolphins win (${scoreDolphins} vs ${scoreKolas})`);
  } else if (scoreKolas > scoreDolphins * 2) {
    console.log(`Koalas win ($scoreKolas} vs ${scoreDolphins})`);
  } else {
    console.log(`nobody wins`);
  }
};

checkWinner(avgDolphins, avgKoalas);

//data2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolphins, avgKoalas);

checkWinner(avgDolphins, avgKoalas);

//challange2
// bill = 100;
//declaration
// function calcTip(anyBill) {
//   tip = (50 <= bill) & (bill <= 300) ? bill * 0.15 : bill * 0.2;
//   return tip;
// }

// console.log(calcTip(200));

//expression
// const calcTip = function (anyBill) {
//   tip = (50 <= banyBill)) & (anyBill) <= 300) ? anyBill) * 0.15 : anyBill)* 0.2;
//   return tip;
// };

// console.log(calcTip());

//arrow

const calcTip = (anyBill) =>
  (50 <= anyBill) & (anyBill <= 300) ? anyBill * 0.15 : anyBill * 0.2;

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log(bills, tips, totals);

//challange 3
const mark = {
  name: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  name: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return (this.bmi = this.mass / this.height ** 2);
  },
};

console.log(mark);
console.log(mark.calcBMI());
console.log(john.calcBMI());

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.name}'s BMI (${mark.bmi}) is higher than ${john.name}'s BMI (${john.bmi})`
  );
} else {
  console.log(
    `${john.name}'s BMI (${john.bmi}) is higher than ${mark.name}'s BMI (${mark.bmi})`
  );
}
