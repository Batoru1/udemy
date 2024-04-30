'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//3)property name computting ES6

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

//1)enhanced object literals lecture
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //1) ES6 enhanced object literals
  openingHours,

  //2) method writting  ES6
  order(starterIndex, mainIndex) {
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
  orderPasta(ing1, ing2, ing3) {
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

///////////////////////////////////////////////////////////////
//////////Looping Objects:Object Keys, Values and Entries/////
///////////////////////////////////////////////////////////////

// //looping over property NAMES or keys (Object.keys())

// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days:`;

// for (const day of properties) {
//   openStr += `${day},`;
// }

// console.log(openStr);

// //Looping over Property VALUES (Object.values())

// const values = Object.values(openingHours);
// console.log(values);

// //Looping over the entire OBJECT (Object.entries())
// //Entries is NAMES + VAlues together

// const entries = Object.entries(openingHours);
// console.log(entries);

// //destructuring of x [key, value] value is an object in this case so for destructuring need this {}
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

///////////////////////////////////////////////////////////////////////////////Optional Chaining (?.)////////////////////////
/////////////////////////////////////////////////////////////

// //EXAMPLE get opening hours for our restaurant for monday

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // if (restaurant.openingHours.fri.open)
// //   console.log(restaurant.openingHours.fri.open);

// //Same EXAMPLE with OPTIONAL CHANING

// //if a certain property does not exist, then undefined is returned immediately

// console.log(restaurant.openingHours.mon?.open);
// console.log(
//   restaurant.openingHours?.mon?.open
// ); /*the same as with && example above, just shorter*/

// //EXAMPLE2
// //loop over this array and check whether this restaurant is open or closed on each of the days
// //?? nulish coalescing instead of || or because of 0 on saturday
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }
// //if  we want to use a variable name as the property name we need to use bracet notation [] (by doing this you get acces to weekdays of restaurant object)  !!!!!!!!!!!!!!!!!!!

// //HOW OPC works: only if the property before this - ?. - exists then the property after -?.- will be red, but if not - undefined is immediatelly returned

// //exists means- that the property is not null and not undefined so if it's 0 or ' ' it still exists

// ////Calling METHODS with optional chaning///

// //essentially it checks, if a method exists before calling it
// //exists:
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// //doesn't exist:
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// /////////optional chaning on Arrays/////////////
// //to check if array is empty?

// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// // const users = [];

// console.log(users[0]?.name ?? 'User array empty');
// //?. optional chaning checks, if the value on the left does exist

// //the same using if else
// if (users.length > 0) console.log(users[0].name);
// else console.log('usser array empty');

///////////////////////////////////////////////////////////////////////////////Enhanced Object Literals///////////////////////
//////////////////////////////////////////////////////////////

//there are 3 ways to write object literals is ES6:

//1) Adding an object or a variable to an existing object. EXAMPLE: an object outside restaurant object(openingHours or hours)
//old way to change - hours:hours NEW - hours,

//2) Method writting in ES6 - we no longer have to create a property and then set it to a function expression(ex. order:...)

//old way
// order: function (starterIndex, mainIndex) {
//   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// }

//ES6way
// order(starterIndex, mainIndex) {
//   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];}

//3) we can compute property names instead of writting them manually. weekdays example in openingHours

//////////////////////////////////////////////////////////////
////////////////Looping Arrays: The for-of Loop///////////////
/////////////////////////////////////////////////////////////

// //automatically loop over entire array and in each itteration give us acess to the current array element(item current variable in each iteration, and it can be apple or egg or whtw)
// //no need for code block when only one statement need to be executed
// //continue and break can be used with for of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// console.log(menu);

// for (const item of menu) console.log(item);

// //if we want THE CURRENT INDEX not just the current element? use .entries method

// // for (const item of menu.entries()) {
// //   console.log(`${item[0] + 1}:${item[1]}`);
// // }
// //or do this with destructuring
// for (const [key, value] of menu.entries()) {
//   console.log(`${key + 1}:${value}`);
// }
// // console.log(...menu.entries());

// //////////////////////////////////////////////////////////////
// //////////Logical Assignment Operators//////////////////////
// ///////////////////////////////////////////////////////////

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20
//   numGuests: 0,
//   //if numGuests is 0 with || op. then variable will set to default(10), not 0, because 0 is falsy
// };
// const rest2 = { name: 'La Piazza', owner: 'Giovani Rossi' };

//adding number of guests property to objects that don't already have it

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// console.log(rest1, rest2);

//////////Logical assignment OR operator  ||= /////////////

//logical assignment OR  op. doing the same (adding number of guests property to objects that don't already have it)

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// console.log(rest1, rest2);
// Logical assignment operator (||=op.) assigns a value to a variable if it is currently falsy!!!!!!!!RETURNS THE FIRST TRUTHY VALUE

//chatGpt:
// Logical OR assignment (||=): This operator performs the logical OR operation between its left-hand side operand (the variable) and its right-hand side operand (the value to be assigned). If the left-hand side operand is falsy, the right-hand side operand is assigned to it. Otherwise, the left-hand side operand remains unchanged.

//////////logical nullish assignment operator ??=//////////

//nullish means null or undefined

//!!!!!! nullish assignment operator ??= will assign a value to a variable, if that exact variable if that exact variable is currently nullish or undefined!!!!!!!!!

//to solve the numGuests:0 problem with ||=

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10; //10 is assigned to rest2, because it's undefined

// console.log(rest1, rest2);

//chatGpt
// Logical nullish assignment (??=): This operator performs the nullish coalescing operation between its left-hand side operand (the variable) and its right-hand side operand (the value to be assigned). If the left-hand side operand is nullish (i.e., null or undefined), the right-hand side operand is assigned to it. Otherwise, the left-hand side operand remains unchanged.

////////////////logical AND assignment operator &&=//////////

//Lets say we want to anonimize the names of restaurant owners(when there is an owner property, change it with the string 'anonymous')

//&& operator shortcircuits when first value is falsy and returns that falsy value(RETURNS FIRST FALSY VALUE)!!!!!!!

// rest1.owner = rest1.owner && 'anonymous';
// rest2.owner = rest2.owner && 'anonymous';

// console.log(rest1, rest2);

// anonimize,but with Logical AND assignment operator &&=//

// rest1.owner &&= 'anonymous';
// rest2.owner &&= 'anonymous';

// console.log(rest1, rest2);

// !!!!!!!!!! &&= AND assignment  operator assigns a value to a variable if it is currently truthy!!!!!!!!!!!!!!!!(returns the first falsy value?)

//chatGpt:
// Logical AND assignment (&&=): This operator performs the logical AND operation between its left-hand side operand (the variable) and its right-hand side operand (the value to be assigned). If the left-hand side operand is truthy, the right-hand side operand is assigned to it. Otherwise, the left-hand side operand remains unchanged.

//////////////////////////////////////////////////////
/////////////The Nullish Coalescing operator (??)/////
/////////////////////////////////////////////////////

//works almost the same way as the || OR operator. It works with the idea of nullish values instead of falsy values. Nullish +values will shortcircuit the evaluation

//Nullish values: null and undefined (NOT 0 or ' ')

// The ?? operator evaluates to its right-hand side operand when its left-hand side operand is null or undefined. Otherwise, it returns the left-hand side operand. In other words, it provides a way to specify a default value only when the variable is null or undefined, but not for other falsy values like 0, '', false, or NaN.

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

/////////////////////////////////////////////////////
//////////////short circuting (&& and ||)////////////
/////////////////////////////////////////////////////

// // console.log('----OR----');

// // // //use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Jonas'); //if the first value is truthy, it will be imediatelly returned, that is what shortcircutting means with || operator
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);
// // //undefined, 0, '', are falsy-  Hello is the first truthy value and will be returned

// restaurant.numGuests = 23; //if 0 then guests=10, because 0 is falsy and gets short circuited
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// // console.log('----AND----');
// // //&& operator shortcircuits when the first value is falsy, and then immediately returns that falsy value, without evaluating the second operand, because for the statement to be true both values have to be true, so if first one is false, there is no point in evaluating the whole operation.

// console.log(0 && 'Jonas');
// // //if two truthy values are evaluated then the last truthy value is returned(shortcircuit on last truthy value)
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'jonas');
// // //practical example
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
// add(...x); //expand arrr!!!!!!!!!spread op

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

/** SPREAD OPERATOR UNPPACKS  ELELEMNTS FROM AN ARRAY, REST OPERATOR- PACKS ELEMENTS INTO AN ARRAY*/

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

// //Iterables: arrays,strings,maps,sets.NOT objects
// //string
// const str = 'Jonas';
// const letter = [...str, ' ', 'S.'];
// console.log(letter);
// console.log(...str);
// // console.log(`${...str} Schmedtman`);doesnt work,because this not the places that expects multiple values separated by a comma - ,

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

//mutating variables (reassigning)
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
