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

//how primitives and objects work in the context of functions?

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

//checkin function , when passenger already bought the flight and needs to check in
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;
  if (passenger.passport === 24739479284) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

//as we pass primitive value(string) to a function it contains a copy of that value, so if it is not changed outside the function, it stays the same

//flightNum=flight

//when we pass a reference type to a function, what is copied is really just a reference to the object in the memory heap. exactly like doing this:
// passenger = jonas;

//Is the same as doing THIS...
// const flightNum = flight;
// const passenger = jonas;

//function that will accept a person and change their's passport number
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jonas);
checkIn(flight, jonas);

//summary
//passing a primitive type to a function is really just the same as creating a copy like this, outside of the function, so the value is simply copied

//on the other hand, when we pass an object to a function, it is just like copying an object like THIS and so whatever we change in a copy will also hapen in the original. Be careful because if objects change when you change them outside of function, this could have big consequences for large code bases. NEXT exmp will tackle this

//Pssing by VALUE, passing by REFERENCE

//JS doesnt have passing by reference, only passing by value, even thought it looks like passing by reference
//we pass a reference to the function, but we do not pass by reference

/////FIRST-CLAS and HIGHER-ORDER functions////////////////

//first-class functions - first citizens- they are simply values. They act like this, because they are just another type of object in Java-Script.

//we can store functions in variables or object properties

// we can also pass functions as arguments to other functions(adding event listeners or event handlers to DOM methods)

//we can also return a function from another function

//functions are like objects and objets have methods so functions also have METHODS-methods that we can call on functions

//first class functions lets us write HIGHER-ORDER functions
//---HIGHER-ORDER function is 1) either a function that receives another function as an argument 2) or a function that returns a new function  ---
//a function that is passed in(another function) is a CALL-BACK function, that's because the callback function will be called latter by the higher-order function(most obvious example is addEventListener  functions)
//Functions that return another function
