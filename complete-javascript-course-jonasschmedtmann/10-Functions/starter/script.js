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

/**Let's build a simple poll app!
 * 
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1.
Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2.
Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?

Test data for bonus:

§Data 1: [5, 2, 3]
§Data 2: [1, 5, 3, 9, 6, 1]

Hints: Use many of the tools you learned about in this and the last section 😉 */

/* 1*** create two objects: 1 registerNewAnswer 2 displayResults

registerNewAnswer:
1*** display prompt
2*** .push() number to answers
  *incrementation ++ at the position of the array
  *condiotional statement for answers only 0<= a <4 
3*** add a click() event for answer poll btn to call registerNewAnswers method

displayResults:
1***takes string as an argyument ('type')
   * if array =>default=> console.log(as is) 
   * if string =>display=> "Poll results are 13, 2, 4, 1".

2***displayResult inside registerNewAnswers

B*** setting this.keyword
*/

// // my solution
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer: function () {
//     const chooseOne = prompt(
//       'What is your favourite programming language?\n0:JavaScript\n1: Python\n2: Rust\n3: C++\n(Write option number)'
//     );
//     if (0 <= parseInt(chooseOne) && parseInt(chooseOne) < 4) {
//       this.answers[parseInt(chooseOne)] += 1;
//     } else {
//       console.log('bad answer');
//     }
//     // console.log(this.answers);
//     this.displayResults();
//   },

//   displayResults: function () {
//     console.log(this.answers);
//   },
// };
// const pollBtn = document.querySelector('.poll');
// pollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));

// // //not my solution

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     //Get answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);

//     //Register the answers
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };
// // poll.registerNewAnswer();

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// //creating new object for this. keyword
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [5, 2, 3] });

// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// //   [5, 2, 3]
// // [1, 5, 3, 9, 6, 1]

// //to transform array to a string we use .join() method
// //Converting results to a number Number()
// //to check if answer is a number typeof
// //shortcircuiting with &&
// // in an event handler function the this keyword will always point to the element to which it is attached and in this case we need to set it to the poll object using .bind() method
// //type='array' - setting the default parameters

/////////////137 IMEDIATELLY INVOKED FUNCTION EXPRESSIONS/////////////////////////
////////////////////////////////////////////

// //sometimes in JS we need a function that is only executed once and the never again, so a function - that disappears after it's called once. We will need it later for async/await

// //this is not the way
// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();

// //this is way
// //write a function itself 1) without assigning it to any variable and 2) wrap it into parenthesis () 3) call it using  double parenthesis () right after it's written
// (function () {
//   console.log('This will never run again');
//   const isPrivate = 23;
// })();

// //IIFE above

// //the same for arrow function
// (() => console.log('This will also never run again'))();

// //Why need IIFE?.
// //functions have scopes, one scope does not have acces to variables from inner scope, but the inner scope has access to global scope.
// //Therefor we say that the data inside the scope is private or incapsulated

// //variables declared with let or const also create their own scope inside a block

// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }

// // console.log(isPrivate); can't access because in its own block

// console.log(notPrivate); //can access, because var

// // so IIFE's are not commonly used nowdays, because it's better to just create block {} for data privacy, if we just want to create a new scope

// //But if you really want to execute a function just once(not just to create a new scope) then IIFE is still the way to go

// //mistral exercise
// // Write an immediately invoked function expression (IIFE) that takes two arguments: a number n and a string s. The function should return a new string that consists of n copies of the string s, concatenated together.

// // For example, if the function is called with the arguments 3 and "hello", it should return the string "hellohellohello".

// (function (n, s) {
//   let result = '';
//   for (let i = 0; i < n; i++) {
//     result += s;
//   }
//   console.log(result);
// })(5, 'hello');
// // In this solution, we define an immediately invoked function expression (IIFE) that takes two arguments: n and s. We initialize an empty string result to store the final result. We then use a for loop to concatenate s to result n times. Finally, we return the result string.

///////////////////////////////////////////////////////////
///////////////////////138Closures/////////////////////////
//////////////////////////////////////////////////////////

// //closure is not a feature that we explicitly use - so we don't create closures manually like we create a new array or a new function, so a closure simply happens automatically in certain situations, we just need to recognize these situations.
// // Creating a situation where a closure example can be made
// //this function will return a new function
// //which will update the passengerCount variable
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };
// //lets call secureBookings function and secure the results in a variable called booker
// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);
// // //as we call secureBooking it will return this function function () {
// //     passengerCount++;
// //     console.log(`${passengerCount} passengers`)};  and store it in booker variable

// //!!!!!!!!!!so basically the booker variable allows us to acces the returned function of secureBookings in the global scope!!!!!!!!!!!!!!!!!!!!!!!

// //A CLOSURE makes a function 'remember' all the variables that existed when the function was created

// //a function always has access to the variable environment of the execution context in which the function was created. even after when that execution context is gone
// //a closure is a  variable environment (booker) attached to the function

// //thanks to a closure a function does not lose connection to variables that existed at the functions creation

// //closure has priority over scope chain

// /////////////////////Closure////////////////////////////
// /////a CLOSURE is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone/////////
// //////A Closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain forever
// /////////////A closure makes sure that a function never loses connection to variables that existed at the function's creation place. it remembers the variables even after the function is gone///////////////////////////////////
// ///////////A CLOSURE is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created//////////////////

// //We do't have to manually create clossures, this is a Js feature that happens automatically. We can't even access losed-over variables explicitlyu. A closure is not a tangiable JS object
// //so we cant just reach into a closure and take variables from it, beacause  a closure is just an internal property of a function. We can observe thjat it happens, because functions keep having access to variables that should no longer exist, but we cannot directly access theses variables

// ////////////////////////////////////////////////////////////
// //////////139 MORE CLOSURE EXAMPLES/////////////////////////
// ////////////////////////////////////////////////////////////

// //two more situations for closures to happen
// //these examples will demonstrate that we don't need to return  a function from another function in order to creaye a closure

// //drfinr empty variable called f
// //a function expression g
// //inside g define a variable(set to 23)
// //reassign the f variable to a function value, and the function will simply log the a * 2  variable to the console
// //example1
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// //creat function h
// //it's gona define b as some other value
// //reassign f again
// //what happens when we assign f a nother function
// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };
// //call g and f
// g();
// f();
// console.dir(f);
// //reassigned f function, called by h(not the same as above f which is called by g)
// h();
// f();
// //inspecting variable environment
// console.dir(f);
// //when you reassign functions even without returning them, that will also create a closure
// //a closure always makes sure that a function does not lose the connection to the variables that were present at its birthplace
// //f is the closure in action!!!!!!!!!!!!!!!

// //example2
// //a function with parameters of - number of passangers and a wait time
// //inside is a variable perGroup,beacause boarding happens in groups of 3
// //use a TIMER- setTimeout() function, needs two params 1) function which will be executed after a certain time 2) the time after which the function will be executed(in miliseconds)
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//   }, wait * 1000);
//   console.log(`There are 3 groups, each with ${perGroup} passengers`);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// //proof that closure has priority over global scope
// const perGroup = 1000; //this will only be used if perGroup inside boardPassengers is commented out
// boardPassengers(180, 3);

// //the only way that the callback function setTimeout can have acces to the variables in the board passengers function is because of closure

// // setTimeout(function () {
// //   console.log('Timer');
// // }, 1000);
