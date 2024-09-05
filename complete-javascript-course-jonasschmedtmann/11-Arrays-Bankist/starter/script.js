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

const displayMovments = function (movments) {
  containerMovements.innerHTML = '';

  movments.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">
          ${i + 1} ${type}</div>
          <div class="movements__value">${mov}</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovments(account1.movements);

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserNames(accounts); //stw
// console.log(accounts);

// LECTURES!

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//////////////////////////////////////////////
//////////154THE REDUCE METHOD////////////////
/////////////////////////////////////////////

// is used to boil down all the elements in an array to one single value

//global balance of the account(movements):
console.log(movements);

const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}:${acc}`);

  return acc + cur;
}, 0);

console.log(balance);

//the same manually with a for of loop
let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
console.log(balance2);
//!whenever we want to use for of loop we need external variable to store the results and that's fine if you only need one loop, but gets unpracticle when we use many loops

//!!the .reduce() function also gets a callback function!, but diffrent than in .map() or .forEach(). The first parameter is called ! 1) the accumulator(like a snowball that keeps accumulating the value until it is returned),second parameter is 2)! current value, third 3) ! current index(of iteration), 4)! whole original array!!

//so the callback function will be called in each itteration of looping over the array!!so .rdeuce() loops over the arr and calls this callback in each iteration
//accumulator is the value that we will keep adding to!
// accumulator + current value works because in each call of the callback function the accumulator will be the current sum of all the previous values and we will be adding to this accumulator in each iteration of the loop
//we need to return the accumulated value so the accumulator can be used in the next iteration of the loop
//!!to sum up - in each loop iteration we return the updated accumulator(the current acc + cur current value) and like this we can keep adding to it in the next iteration

//!!the callback function is the 1) first argument of the .reduce() method! the second argument(parameter) is 2)! the initial value of the accumulator!(in the first loop iteration)!!

/////////////153THE FILTER METHOD/////////////
/////////////////////////////////////////////

// //used to filter for elements, that specify a certain condition
// //to specify the condition we use a callback function!
// //.!filter() get access to 1)current array element,2)index of the element,3) entire array
// //in .filter() method we usually need only the current element
// //returns a new array

// //create array of deposits(movments that are above 0):
// const deposits = movements.filter(function (mov, i, arr) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// //for of for comparison
// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);

// console.log(depositsFor);

// //challange-create arr of withdrawals:
// const withdrawals = movements.filter(mov => mov < 0);

// console.log(withdrawals);

//we will return a boolean value
//there is a push in js to use methods with callback functions, because you can chain the methods together, unlike with a for loop

//////////////////////////////////////////////
//////////152 COMPUTING USERNAMES//////////////
//////////////////////////////////////////////

// the code is in the app
//assignememnt: use .map() and .forEach() methods to  1) compute usernames for each account owner in the app 2) the username is the initials of the account holder
//!!createUsername function:
//using .split() to divide string into seperate words - split by an empty space(' ')
//looping over username array, taking first letter  and putting it into new array with .map()
//.split() method returns an array so we call the .map() method directly on that array
//.map() returns a new array with just the first letters, but does not modify old array!
//on an array call .join() method by an empty string ('') annd this will return the inicials
//to compute username for each acc we use .forEach(), !because we don't want to create new arr but to loop over accounts arr and modify it's elements(the objects of the app)
//!!each function should receive data that it should work with instead of using a global variable
//the createUser function is not to return a value but to make a side effect

////////////151 THE MAP METHOD/////////////////////////
////////////////////////////////////////////

// // used to lloop over arrays and gives back a new array
// //and this new array will contain in each position -! the result of applying a callback function to the original array elements

// //assignment: movments are dollars that  need be converted to euros 2) lets say euro is 1.1 dollars

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// console.log(movements);
// console.log(movementsUSD);

// //same thing, but using for of loop
// const movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(mov * eurToUsd);
// }
// console.log(movementsUSDfor);

// //assignement: movmentsUSD but with arrow function

// const movementsUSD2 = movements.map(mov => {
//   return mov * eurToUsd;
// });

// console.log(movementsUSD2);
// //since it's a on liner no need for return and {}
// const movementsUSD3 = movements.map(mov => mov * eurToUsd);

// console.log(movementsUSD3);

// //the callback function has the movment parameters and {} in the curly braces we specify we need to retun the value that we want the new array to have in the current position

// ////////////////////////////////////////////
// //just like the .forEach() method, .map() method also has access to the !!exact same three parameters. so besides the 1)! current array element, we also get access to  2)!current index as well as 3)! the whole array

// //assignment:loop over array, extract current element, index and the whole array

// const movmentDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1} You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );

// console.log(movmentDescriptions);

///////150 DATA TRANSFORMATIONS: MAP.FILTER REDUCE///////////////////////////////////////////////
/////////////////////////////////////////////////////

//these are array methods to perform data tranformations
//so these are methods to create new arrays based on transforming data from other arrays

//!!MAP method- another method used to !loop over arrays. Similar to forEach method - but the difference is that map creates a !brand new array, based on the original array
//.Map() method 1)takes an array 2)loops over that array and in each iterration it 3)applies a !callback function ,that we specify in our code, to the current array element
//we say that it maps the values of the original array to a new array and that's why this method is called map
//forEach() allows us to do some work with each array element, .Map() builds us a brand new array, containing the results of applying an operation to the original array

//!!FILTER method- used to filter for elements in the original array !which satisfy a certain !condition
//filter returns !a new array containing the array elements that passed a specified test condition
//in other words-elements for whicj the condition is true will be included in a new array that the filter method returns.
//all other elements  will be filtered out(not included in the new array)

//!!REDUCE method- which is used to boil down all the elements of the original array into one single value(simple exmp:add all elements of an array to a single value: we need to specify the operation with the accumulator variable)
//so NO new array, but only the rdeuced (new) value!

///////////////////////////////////////////////////
///////////////149 CODING CHALLANGE 1/////////////
/////////////////////////////////////////////////

// const juliaArr1 = [3, 5, 2, 12, 7];
// const kateArr1 = [4, 1, 15, 8, 3];

// const juliaArr2 = [9, 16, 6, 8, 3];
// const kateArr2 = [10, 5, 6, 1, 4];

//my solution///

// const checkDogs = function (arr1, arr2) {
//   const shallowArr1 = arr1.slice(1, -2);
//   const newArr = [...shallowArr1, ...arr2];
//   const results = [];

//   newArr.forEach(function (dog, i) {
//     if (dog >= 3) {
//       results.push(
//         `Dog 🐶 number ${i + 1} is an adult, and is ${dog} years old`
//       );
//     } else {
//       results.push(`Dog number ${i + 1} is still a puppy`);
//     }
//   });
//   return console.log(results.join('\n'));
// };
// checkDogs(juliaArr2, kateArr2);

// //jonas solution///

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   // const arr3 = dogsJulia.slice(1, 3);
//   // console.log(arr3);
//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   console.log(dogs);

//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(
//         `Dog 🐶 number ${i + 1} is an adult, and is ${dog} years old`
//       );
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy`);
//     }
//   });
// };

// checkDogs(juliaArr2, kateArr2);

// pseudo:
//coditional puppy or dog?
//create checkDogs
//create shallow copy of first array(not mutate the original)
//use an array method to remove first and last two elements of shallow array copy
//create new arr with corrected  J and K data
//log to console wether an adult or a pup

/**Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog
🐶 number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
")
4. Run the function for both test datasets
Test data:
§Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far 😉
GOOD LUCK 😀 */

////////148 Creating DOM Elements//////////////
////////////////////////////////////////////

// //!instead of working with global variables, it's best to pass in data that function needs into that function
// //!template literals are amazing at creating HTML templates
// const displayMovments = function (movments) {
//   containerMovements.innerHTML = ''; //textContent returns the text itself while innerHTML returns everything, including the HTML.!innerHTML to an empty string returns what we have dynamically inserted with adjascentHTML.innerHTML is a property!

//   movments.forEach(function (mov, i) {
//     //if the current movment is >0, then type =deposit,else withdrawal
//     const type = mov > 0 ? 'deposit' : 'withdrawal';

//     const html = `
//     <div class="movements__row">
//           <div class="movements__type movements__type--${type}">
//           ${i + 1} ${type}</div>
//           <div class="movements__value">${mov}</div>
//     </div>`;
//     //${mov}- value straight from the array- current value
//     //${i+1} to know the number of operation
//     //{type} from ternary operator,
//     containerMovements.insertAdjacentHTML('afterbegin', html); //!
//   });
// };
// displayMovments(account1.movements);
// !!insertAdjescantHTML() method accepts two strings 1) position in which we want to attach the html 2) the string containing the html that we want to insert. it is a method of creating elements

// console.log(containerMovements.innerHTML);

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

///////////////////////////////////////////////////147 PROJECT:"Bankist" APP//////////////
////////////////////////////////////////////
