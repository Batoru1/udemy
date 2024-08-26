'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//arrays have methods and methods need tools

///////////////////////////////////////////////////////////
////////////////143 SIMPLE ARRAY METHODS///////////////////
//////////////////////////////////////////////////////////

// //why do arrays actually have methods?
// //Methods-are simply functions that we can call on objects, so bassically, they are functions attached to objects
// //So if we have array methods, that means that arrays themselves are also objects
// //Array methods are simply functions that are attached to all arrays that we create in JavaScript
// //!Arrays are objects, and they get access to special buuilt in methods that we can essentially see as tools for arrays

// //a simple test array
// let arr = ['a', 'b', 'c', 'd', 'e'];
// //!!SLICE!!
// //!!.slice() method - we can extract part of any array, but without changing (mutating) the original array - slice( 1)index of start extraction(icluded),2)index of end extraction(excluded)). Starting index is included, end index is excluded from the output. The method can be used only with starting index. The method returns a new array!!
// console.log(arr.slice(2));
// console.log(arr);
// console.log(arr.slice(2, 4)); //2-3 is actually 2-3, because 4 is excluded. So the length of the outputting array is end - start 4-2 =2
// //!!begin param can be negative, and then it will start to copy from the end of the array
// console.log(arr.slice(-2));
// console.log(arr.slice(-1)); //-1 always the last element of any array
// //!!negative index as end parameter
// console.log(arr.slice(1, -2)); //starts at 1 and extracts everything except the last two -2
// //!!using .slice() method to create a shallow copy of any array - call .slice() method on an array without any arguments at all
// console.log(arr.slice());
// //!!the same can be done using ... the spread operator
// console.log([...arr]);
// //so which one to use for a shallow copy?-personal pref, but if want to chain couple of methods together, then use .slice

// //!!SPLICE!!
// //works almost the same way as .slice() method, but the fundamental diffrence is that it !does actually change the originall array! - so it mutates the array
// // console.log(arr.splice(2));
// console.log(arr); //changed array
// //.splice() is usually used to delete one or two elements from an array
// //.splice() very often used to !remove the last element of an array!
// arr.splice(-1);
// console.log(arr);
// //!the second parameter in .splice() is called delete count-it soecifies how many elements to delete!
// arr.splice(1, 2); //this means that you delete two elements from position 1
// console.log(arr);

// //!!REVERSE!!
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// //the .reverse() method !mutates! the original array
// console.log(arr2);

// //!!CONCAT!!
// //used to concatenate two arrays. !doesn't mutate! the originall arrays
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log(arr);
// console.log(arr2);
// //the spred operetaor ... gives the same result and !doesn't mutate! the original arrays
// const letters2 = [...arr, ...arr2];
// console.log(letters2);
// console.log(arr);
// console.log(arr2);

// //!!JOIN!!
// console.log(letters.join(' - '));
// //.join(), join an array using a seperator that is specified in parenthesis ()

// //.push(), .unshift(), .pop(), .indexOf(), .include() - also known

////////////////////////////////////////////
/////////144THE NEW AT METHOD//////////////
//////////////////////////////////////////

// const arr = [23, 11, 64];
// //taking the first value out of arr
// console.log(arr[0]); //array at position zero
// //exactly the same using .at() method
// console.log(arr.at(0));
// //Why use .at()! method instead of the [] brackets notation???
// //exmp: lets say we need to !get the last element! of the array, supposing that we don't know the legth of the array
// console.log(arr[arr.length - 1]); //using !arr.legth
// console.log(arr.slice(-1)); //using .slice()! to get a copy of last element of the array,
// console.log(arr.slice(-1)[0]);
// //but we want to take out that value by using [0] square brackets 0
// !console.log(arr.at(-1)); //using .at() method!

// //If you want to start counting from the end of the array or trying to find the last element of an array use .at() method
// //if you want to method chain also use .at() method
// //if you just want to quickly get a value from an array us [] bracket notation

// //.at() method also works on strings!
// console.log('jonas'.at(-1)); //.at(-1) - last char

/////////////////////////////////////////////
///////145.LOOPING ARRAYS: forEach///////////
/////////////////////////////////////////////

// //lets say that we want to loop over this arr in order to print a message for each movement in this bank account
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //for of
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`); //absolute value to remove the -
//   }
// }

// //!!.forEach(callback function(){})!! - so technically .forEach() is a higher order function, which requires a callback function in order to tell it what to do
// //when will forEach() calback the function? forEach() loops over the array and in each itteration it will execute the callback function. also as the forEach() method calls this callback function and in each itteration it will pass in the !current element of the array as an argument! movement in this case

// //access to current index in forEach!!
// //how it works?
// //it is the forEach() method that calls the callback function in each iteration
// //and as it calls this function it also passes in the current element of the array
// //and actually it also passes 1)the current element of the array 2)! the index 3) and the entire array that we are looping!
// // they -1) 2), 3) can be specified in our parameters list
// // the names of the params don't matter - what matters is the order:
// //ALWAYS !1st param - current element, !2nd param - current index, !3d param - entire array that we are looping over
// //i+1 because index starts at 0
// console.log('----FOREACH----');

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1} You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1} You withdrew ${Math.abs(mov)}`); //absolute value to remove the -minus
//   }
// });

// //at itteration zero
// //0: function(200)
// //at 1
// //1: function(450)
// //2: function(400)
// //...

// // !we use a callback function to tell another higher order function exactly what it should do!
// //in the above example we tell forEach() that in each itteration it should log one of the 2 strings to the console
// //!we give the forEach() method instructions by giving it a callback function, which conatains these instructions!

// //!what if we actually needed access to a counter variable here?

// //So just like we can access the current index of the array in the for of loop
// // movements.forEach(function (movement) {
// //!.entries() is just another array method - it returns array of arrays,which in the first position contains i-current index, j-value itself or current array element (in this case we call j - movment) !
// //i+1 because index starts at 0
// console.log('----ENTRIES----');

// for (const [i, movement] of movements.entries())
//   if (movement > 0) {
//     console.log(`Movement ${i + 1} You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`); //absolute value to remove the -minus
//   }

// //!!When use forEach() when forof loop?
// //fundamental diffrence between the two of them: is that you !cannot break out of a forEach() loop!. So the continue and break statements don't work in a forEach() loop so instead - forEach() will always loop over the entire array and ther is nothing you can do about it.
// //So if you really need to !break out of a loop! then you need to use the forof loop

/////////////////////////////////////////////////////146 forEach() with Maps and Sets////
////////////////////////////////////////////

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]); //1st- key, 2nd - value

// //Map
// // foreEach() Map params:1) current value of mapS(in the current iteration), 2) key 3) the entire map that is being looped over
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// //Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });
// // a Set doesn't have keys nor indexes
// //_ - underscore means - !throwaway variable - variable that is completely unecessery
