'use strict';

/////////////Default Parameters///////////////////////

//old way of setting default parameters for passangers and price in ES6

// const bookings = [];

// const createBooking = function (flightNum, numPassengers, price) {
//   numPassengers = numPassengers || 1;
//   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');

//ES6 way

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
//default values can be overriden
createBooking('LH123', 2, 800);

//default values can be expressions ex. if price =199*numPassengers

createBooking('LH123', 2);
createBooking('LH123', 5);

//skipping a default parameter,leaving it at default
createBooking('LH123', undefined, 1000);
