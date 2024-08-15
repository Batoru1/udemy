'use strict';

///////////////////////////////////////////
/////////////Default Parameters///////////////////////////////

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

//////////////////////////////////////////////
/////FIRST-CLAS and HIGHER-ORDER functions///////////////////////////////

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

/////////////////////////////////////////
// // ////132 FUNCTIONS ACCEPTING CALLBACK FUNCTIONS////////////////////////////////

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

//////////////////////////////////////////////
///////////133. Functions Returning Functions///////////////////////////////////

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

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

// //whats the point of functions returning other functions? it's useful whwn using a programming paradigm called functional programming

/////////////////////////////////////////////
///////134 The Call and Apply Methods////////
////////////////////////////////////////////

// //How to set this. keyword manually and why would we want to do that?

// // Let's say we're an airline. create an object for this airline with a very simple booking method aswell => airline name,code,array of bookings, the book method( will be written using enhanced object literal syntax-by defining a method without having to write a function - book:function(){}

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on a ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     //book method needs to add to bookings arr
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };
// //calling the function
// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'Ew',
//   bookings: [],
// };

// //create a new function to store the book method so we can use it on eurowings function(refractoring in practise)

// const book = lufthansa.book;

// //in regular functions the this. keywoed points to undefined. So the above function is no longer the book method from lufthansa object

// //so how to tell javascript to create a new booking on eurowings object? or even how to tell it that we want to book on the lufthansa object?. how to tell JS that this. keyword should point to lufthansa or eurowings?
// //there are three function methods to do this: 1) call 2) apply 3) bind

// //so this does not work
// // book(23, 'Sarah Williams');
// //use .call
// //**afunction is just an object and object have methods, so functions can too**
// //in the .call() method the first 1) argument is exactly what we want for the this. keyword to point to, the second argument 2) is the rest of the arguments
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);
// //the .call() method allows us to set the this. kyword explicitly to what we want to call, and all the arguments after the first argument are simply the arguments of the original function

// //lets do the same for lufthansa function
// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// //lets do another object
// const swiss = {
//   airline: 'Swiss Airlines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

// //Apply method
// //it does exactly the same as .call() method, but it doesn't receive a list of argumnents after the this. keyword, but instead it takes an array of the arguments, it then will take the arguments from the array and pass it into the function
// const flightDta = [583, 'George Cooper'];
// //the first argument 1) points to this. keyword the second 2) is an array of data
// book.apply(swiss, flightDta);
// console.log(swiss);
// //Apply method is not that used nowdays, beacause it is better to use again .call() method with the spread operator ... to take the data out of ther array

// book.call(swiss, ...flightDta);
// //so it's more practicall to use .call() method and spread the data from an array
// // the .call() method allows us to explicitly define the this. keyword in any function

// //////////////////////////////////////////////
// //////////The Bind Method////////////////////
// ////////////////////////////////////////////

// // the .bind() keyword also allows to manually set the this. keyword for any function call
// //the DIFFERENCE is that .bind() method does not immediatelly call the function, but instead it returns a NEW function whre the this. keyword is bound, so it's set to whatever value we pass into bind

// //lets continue with airlines example from previous lesson
// //lets say that we need to use the book function for Eurowings all the time
// //book.call(eurowings, 23, 'Sarah Williams');
// //lets create a function bookEW which always sets the this. keyword to Eurowings
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Stewen Williams');

// //in the .call() method we can pass multiple arguments besides the this. keyword. In the .bind() method we can do the same, and then all the arguments will be 'set in stone', so they will be defined and the function will be called with the same arguments
// //exmp: we could use bind to create a function for one specific airline and specific flight number

// const bookEW23 = book.bind(eurowings, 23);
// //so now this function only needs a name(s), because airline and flight number are already set
// bookEW23('Jonas Schmedtmann');
// bookEW23('Martha Cooper');
// //what was done up there - specifying parts of the argument beforehand is called - PARTIAL APPLICATION - it means that a part of the arguments of the original function are already applied or already set - so that what bookEW23 function is

// ///other situations where we can use .bind() method//////

// ////when we use objects together with event listeners//

// //lets add new properties to lufthansa method
// //in an event handler function(lufthansa.buyPlane) the this. keyword points to the element on which that handler is attached to (.querySelector('.buy')), in this cas eto a button
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };
// //if we simply call the buy function out here, the the this. keyword would be lufthansa, because it's the object calling the function, in the other(lower) case it's event listener function calling this function
// // lufthansa.buyPlane();

// //bind is gonna return a new function
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// /////one more example about PARTIAL APPLICATION, because it's one more big use case for  .bind() method/////

// //partial application means that we can  PRESET parameters

// // ageneral function for adding tax
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));
// //lets say that there is one tax that we use all the time, lets create a function just for that. Preset a VAT tax so that it will always be 23
// const addVat = addTax.bind(null, 0.23);
// // addVat= value=>+value*0.23
// //null because the firdt argument in .bind() methos is the this. keyword, which in this case doesn't exist

// console.log(addVat(100));
// console.log(addVat(150));
// console.log(addVat(200));

// //rewritting the addVat function with functions returning functions(greet function from that topic)

// const addVat2 = function (rate2) {
//   return function (value2) {
//     return value2 + value2 * rate2;
//   };
// };

// const difVat = addVat2(0.23);
// console.log(difVat(100));
// console.log(difVat(150));
// console.log(difVat(200));
// //addVat2 receives the rate and returns a new function that takes in the value and returns the result, then difVat will describe the vat rate by calling the addVat2 function.
// //the first function needs the rate, the function that is being returned takes in the value

/////////////////////////////////////////////
////////CODING CHALLANGE NR.1///////////////
///////////////////////////////////////////
