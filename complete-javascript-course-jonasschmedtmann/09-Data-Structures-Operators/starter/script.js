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

///////////////////////////////////////////////////////////////////////////////
//////////////////////Summarry:Which data structures to use?//////////////////
/////////////////////////////////////////////////////////////////////////////

//4 data structures: 1 arrays 2 objects 3 sets 4 maps

//where can data come from? 3 sources of data:
//1from the program itself: Data written directly in source code(e.g. status messages)
//2 from the UI: Data input from the user data written in DOM (e.g. tasks in todo app)
//3 from external sources: Data fetched for example from web API-application programming interface (e.g. recipe objects)

//no matter where data comes from , or what kind of data it is, we usually have COLLECTIONS OF DATA that we then need to store somewhere - in DATA STRUCTURES- arrays, objects, maps,sets

//How to decide which datat structure to use?
//Do I just need a simple list of values? ---- ARRAY or SET
//If need key, value pairs --- OBJECT or MAP
//the main diffrence is that with objects and maps we have a way of describing a value(with key), whereas with arrays we have only the values themselves

//////////////////////////////////////////////////////////////////////////////
//////////////////////////Maps: iteration//////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// //how populate a new map without set method? pass in an array which will contain multiple arrays (array of arrays) and in each of those arrays there will be key and value
// const question = new Map([
//   ['question', 'what is the best programming language?'],
//   [1, 'C'],
//   [2, 'java'],
//   [3, 'javaScript'],
//   ['correct', 3],
//   [true, 'correct 🥳'],
//   [false, 'try again 🫠'],
// ]);

// console.log(question);
// //when creating new map from scratch use above method, 2) when keep adding new elements programatically while using code, use .set()

// //the structure above is the same as calling an Object with .entries() method
// console.log(Object.entries(openingHours));

// //Convert Object to Map with .entries(), because it's an array of arrays
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //iteration is possible on maps, because maps are iterables, so for loop is also available for them
// //print 3 options from questions map
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}:${value}`);
// }
// //to get the answer from the user lets use a prompt
// // const answer = Number(prompt('your answer'));
// const answer = 3;
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// //converting Map into an array, by building a new array and then unpacking the Map by using spread operator ...
// console.log([...question]);
// //these also can be used
// console.log(question.entries());
// console.log(question.keys());
// console.log(question.values());
// //to better read them use spread operator again
// console.log(...question.keys());
// console.log(...question.values());

////////////////////////////////////////////////////////////////
////////////////////Maps:Fundamentals///////////////////////////
///////////////////////////////////////////////////////////////

// //MAP is a data structure that you can use to map values to keys.
// //Just like in objects data is stored in key-value pairs.
// //DIFFERENCE between Objects and MAPS - in MAPS the keys can have any type (in Objects the keys are almost always strings) - it can even be objects or arrays or other maps.

// //lets create a restorant map
// //1st create an empty map
// const rest = new Map();
// //2nd fill it using .set() method, by passing two argumnts: 1st is key name, 2nd-the name itself
// rest.set('name', 'Classico Italiano');
// //.set() method is similar to .add() method in SETS. both allow us to add new element to the data structure

// //any datat type that we want can be used:
// // lets say that the restaurant has two locations-  so we can create a key with a number
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));
// //calling the set method like the three times above not only updates the Map that it is called on but also returns the Map

// //.set() method can be chained, because it not only updates, but also returns the MAP, like so:
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'we are open :D')
//   .set(false, 'we are closed :(');
// console.log(rest);
// // Calling the .set() method returns the updated MAP!!!!!!!!!!!!!!

// //in order to read data from a MAP we use the .get() method, by passing in the name of the key in the parenthesis().

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// //lets create smth fun from booleans as keys, lets check if restaurant works at xertain time
// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// //to check if a map contains a certain key use .has() method
// console.log(rest.has('categories'));

// //delete elements from the map .delete() method
// rest.delete(2);
// //remove all elements from the map .clear()
// // rest.clear();
// console.log(rest);

// //use arrays or objects as map keys
// // get the data from the above array(key)
// const arr = [1, 2];
// rest.set(arr, 'Test');
// //manipulate DOM objects(because they are special kind of objects)
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest.get(arr));

// // .size() method
// console.log(rest.size);

////////////////////////////////////////////////////////////////
///////////////////////////Sets/////////////////////////////////
///////////////////////////////////////////////////////////////

// //Objests and arrays are data structures aswell as sets and maps

// //SET is a collection of uneque values
// //SET cannot have any duplicate
// //SETS are itterables
// //SETS are similar to arrays , but diffrent , because their values are uneque and their order is irrelevant

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);
// console.log(new Set('Jonas'));
// console.log(new Set());

// //WOrking with SETS

// //getting set size similar to .length inn arrays

// console.log(ordersSet.size);

// //checks if certain element is in a set .has() similar to .includes() inn arrays
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));

// //adding new elements to a set
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// console.log(ordersSet);

// //deleting elements
// ordersSet.delete('Risotto');
// console.log(ordersSet);

// ////////////HOW to RETRIEVE values from a set???????
// //no indexe's in a set
// //.has() is enough, because values are uneque so no need to get anything out of set or then use an array

// //delete all elements of a set .clear()
// // ordersSet.clear();
// console.log(ordersSet);

// //SETS are iterrables so we can loop over them
// for (const order of ordersSet) {
//   console.log(order);
// }

// //main use case for a set is to remove duplicate values of arrays
// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
// //what positions are there in a restaurant
// // const staffUneque = new Set(staff);

// //CONVERSION from set to array.Spread operator works on all itterables!!!
// const staffUneque = [...new Set(staff)];
// console.log(staffUneque);

// //how many diffrent positions there are???
// console.log(
//   new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
// ); //or just staff var instead of whole array

// //how many diffrent letters are there in a string?
// console.log(new Set('jonasschmedtmann').size);

// ////////Conclussion////////////////////
// //SETS are not intended to replace arrays. To store values in order that might include duplicates use ARRAYS. Or when you need to manipulate data, because ARRAYS have lots of methods.['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']
// //SETS have very important property of being UNEQUE and it's also very easy to interact with sets by using theyre straight forward methods, but they are not nearly as important as arrays.SETS are used when working with UNEQUE values

///////////////////////////////////////////////////////////////
//////////Looping Objects:Object Keys, Values and Entries/////
///////////////////////////////////////////////////////////////

///in  arrays we use the entries() to get the entries of the array, but in the object we have to use Object.entries() and then pass into the function the object that we are interested (into the () of Object.entries)in!!!!!!!!!!!!!

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
