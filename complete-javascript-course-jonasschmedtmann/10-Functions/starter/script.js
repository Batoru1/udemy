'use strict';

/////////////Default Parameters///////////////////////

// //old way of setting default parameters for passangers and price in ES6

// // const bookings = [];

// // const createBooking = function (flightNum, numPassengers, price) {
// //   numPassengers = numPassengers || 1;
// //   price = price || 199;

// //   const booking = {
// //     flightNum,
// //     numPassengers,
// //     price,
// //   };

// //   console.log(booking);
// //   bookings.push(booking);
// // };

// // createBooking('LH123');

// //ES6 way

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// //default values can be overriden
// createBooking('LH123', 2, 800);

// //default values can be expressions ex. if price =199*numPassengers

// createBooking('LH123', 2);
// createBooking('LH123', 5);

// //skipping a default parameter,leaving it at default
// createBooking('LH123', undefined, 1000);

///////How passing arguments works:value vs reference//////

// //how primitives and objects work in the context of functions?

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 24739479284,
// };

// //checkin function , when passenger already bought the flight and needs to check in
// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;
//   if (passenger.passport === 24739479284) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// //as we pass primitive value(string) to a function it contains a copy of that value, so if it is not changed outside the function, it stays the same

// //flightNum=flight

// //when we pass a reference type to a function, what is copied is really just a reference to the object in the memory heap. exactly like doing this:
// // passenger = jonas;

// //Is the same as doing THIS...
// // const flightNum = flight;
// // const passenger = jonas;

// //function that will accept a person and change their's passport number
// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

//summary
//passing a primitive type to a function is really just the same as creating a copy like this, outside of the function, so the value is simply copied

//on the other hand, when we pass an object to a function, it is just like copying an object like THIS and so whatever we change in a copy will also hapen in the original. Be careful because if objects change when you change them outside of function, this could have big consequences for large code bases. NEXT exmp will tackle this

//Pssing by VALUE, passing by REFERENCE

//JS doesnt have passing by reference, only passing by value, even thought it looks like passing by reference
//we pass a reference to the function, but we do not pass by reference

/////FIRST-CLAS and HIGHER-ORDER functions////////////////

// // //first-class functions - first citizens- they are simply values. They act like this, because they are just another type of object in Java-Script.

// // //we can store functions in variables or object properties

// // // we can also pass functions as arguments to other functions(adding event listeners or event handlers to DOM methods)

// // //we can also return a function from another function

// // //functions are like objects and objets have methods so functions also have METHODS-methods that we can call on functions

// // //first class functions lets us write HIGHER-ORDER functions
// // //---HIGHER-ORDER function is 1) either a function that receives another function as an argument 2) or a function that returns a new function  ---
// // //a function that is passed in(another function) is a CALL-BACK function, that's because the callback function will be called latter by the higher-order function(most obvious example is addEventListener  functions)
// // //Functions that return another function

// // //first class functions is a feature that a programming language has or doesn't. All it means that all functions are values. there are no first-class functions in practise- they are just a concept

// // //higher order functions are possible in practise, because there are first-class functions

// // ////132 FUNCTIONS ACCEPTING CALLBACK FUNCTIONS////////

// // //this function takes in one string and returns a new one without any spaces in it
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// // //transform the first word of input string to upper case(using rest pattern and spread operator)
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // //a function that will take in a string and also a function-so it's a HIGHER-order function

// const transformer = function (str, fn) /*fn here is upperFirstWord*/ {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`); //this is where the function is called

//   //function property - .name
//   console.log(`Transformed by: ${fn.name}`);
// };

// // //transforming the input string using the input function, only putting the value of upperFirstWord, the transformer function will be calling it
// transformer('JavaScript is the best!', upperFirstWord);

// // transformer('JavaScript is the best!', oneWord); //oneWord and upperFirstWord are callBack functions, they are called so because JS is calling them, not us, they are called by the transformer function

// const high5 = function () {
//   console.log('👋');
// };
// document.body.addEventListener('click', high5); //highFive is a callback function, in this cases it's called an event handler, and the addEventListener is the higher order function(event listener)

// ['Jonas', 'Martha', 'Adam'].forEach(high5); //forEach() method is the higher order function and high5 is the callback function
// //will get three waves without even pushing the btn with the forEach() method

// // //Callbacks are really common, because 1) it makes it easy to split up our code into more reusable and interconected parts 2) callback functions allows us to create abstractions

// // //Abstraction means that we hide the detail of some code implementation because we dont really care about all that detail and this allows us to think about problems at a higher more abstract level.
// // //exmp: we created abstraction with the transformer function, because it only cares about transforming the string, but not how it's transformed, it's done by oneWord or upperFirstWord functons

// // //so transformer function is a higher order function, because it works at a higher level of abstraction, leaving lower level details to those low level functions

// ///////////133. Functions Returning Functions//////

// // const greet = function (greeting) {
// //   return function (name) {
// //     console.log(`${greeting} ${name}`);
// //   };
// // };

// //CHALLANGE: rewrite greet function using only arrow functions
// // const greet = greeting => {
// //   return name => {
// //     console.log(`${greeting} ${name}`);
// //   };
// // };
// //or you can skip curly braces {} and return.Takes greeting as an argument and returns a new function. it only has one line of code which returns something, thats why can skip {} and return
// const greet = greeting => name => console.log(`${greeting} ${name}`);

// //this works because of CLOSURES
// const greeterHey = greet('hey');
// greeterHey('Jonas');
// greeterHey('Steven');
// //function greet returned a new function that we stored in greet variable, which is now a function greeterHey that we can call

// //do the same in one go. greet is a function and we call it immediately with ('Jonas)
// greet('Hello')('Jonas');
// //call greet with ('Hello') and the call greet('Hello') with ('Jonas')

// //whats the point of functions returning other functions? it;s useful whwn using a programming paradigm called functional programming

///////134 The Call and Apply Methods////////

//How to set this. keyword manually and why would we want to do that?

// Let's say we're an airline. create an object for this airline with a very simple booking method aswell => airline name,code,array of bookings, the book method( will be written using enhanced object literal syntax-by defining a method without having to write a function - book:function(){}

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on a ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    //book method needs to add to bookings arr
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
//calling the function
lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = { name: 'Eurowings', iataCode: 'Ew', bookings: [] };

//create a new function to store the book method so we can use it on eurowings function(refractoring in practise)

const book = lufthansa.book;

book(23, 'Sarah Williams');
//in regular functions the this. keywoed points to undefined. So the above function is no longer the book method from lufthansa object
