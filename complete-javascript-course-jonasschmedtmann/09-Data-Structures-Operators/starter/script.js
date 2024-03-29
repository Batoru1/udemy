'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //object as an argument

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
    console.log(
      `this is a pizza containing ${mainIngredient}, ${otherIngredients}`
    );
  },
};

/////////////////////////////////////////////////////
//////////////short circuting (&& and ||)////////////
/////////////////////////////////////////////////////

// console.log('----OR----');

// // //use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Jonas'); //if the first value is truthy, it will be imediatelly returned, that is what shortcircutting means with || operator
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);
// //undefined, 0, '', are falsy-  Hello is the first truthy value and will be returned

// // restaurant.numGuests = 23; //if 0 then guests=10, because 0 is falsy and gets short circuited
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('----AND----');
// //&& operator shortcircuits when the first value is falsy, and then immediately returns that falsy value, without evaluating the second operand, because for the statement to be true both values have to be true, so if first one is false, there is no point in evaluating the whole operation.

// console.log(0 && 'Jonas');
// //if two truthy values are evaluated then the last truthy value is returned(shortcircuit on last truthy value)
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'jonas');
// //practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach', 'boner');

// //summary:
// //the || operator will return the first truthy value of all the operands or simply the last value, if all of them are falsy.
// //the && operator will return the first falsy value or the last value if all of them are truthy
// // we can use the || operator to set default values
// //and use the && operator to execute code in the second operand, if the first one is true

////////////////////////////////////////////////////
///////////rest pattern and parameters//////////////
///////////////////////////////////////////////////

//1)Detructuring

//SPREAD because on RIGHT side of =
// const arr2 = [1, 2, ...[3, 4]];
// console.log(arr2);

// //REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// //objects

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

//2) functions
// //contract array!!!!!rest op
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x); //expand arrr!!!!!!!!!sprad op

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

/////////////////////////////////////////////////////////
/////////////////spread operator/////////////////////////
////////////////////////////////////////////////////////

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

//using ...
// const newArr = [1, 2, ...arr];
// console.log(newArr);

//passing multiple elements into a function
// console.log(...newArr);

//expanding array with new element
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

//copy array(shallow)
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

//join two or more arrays together
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

//Iterables: arrays,strings,maps,sets.NOT objects
//string
// const str = 'Jonas';
// const letter = [...str, ' ', 'S.'];
// console.log(letter);
// console.log(...str);
// console.log(`${...str} Schmedtman`);doesnt work,because this not the places that expects multiple values separated by a comma - ,

//real world exmp PASSING MLTIPLE arguments into  a FUNCTION
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

//Objects, order doesn't matter
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Gusseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

/////////////////////////////////////////
//Object destructuring//
////////////////////////////////////////

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

//rename variables from object

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

//default values for property that doesnt exist
//default values

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//mutating variables
// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };
// in order to override let a and b need use parenthesis ()!!!s
// ({ a, b } = obj);
// console.log(a, b);

//nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// objects as function variables

// restaurant.orderDelivery({
//   time: '22.30',
//   address: 'via del sol 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'via del sol 21',
//   starterIndex: 1,
// });

/////////////////////////////////////////
//Destructuring arrays//
////////////////////////////////////////
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// //switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main]; //because rassigning, no need to declare variables//
// console.log(main, secondary);

// //receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

//default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
