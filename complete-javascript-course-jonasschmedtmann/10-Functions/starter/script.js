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
const flightNum = flight;
const passenger = jonas;

//summary
//passing a primitive type to a function is really just the same as creating a copy like this, outside of the function, so the value is simply copied

//on the other hand, when we pass an object to a function, it is just like copying an object like THIS and so whatever we change in a copy will also hapen in the original. Be careful because if objects change when you change them outside of function, this could have big consequences for large code bases. NEXT exmp will tackle this
