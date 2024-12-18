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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">
          ${i + 1} ${type}</div>
          <div class="movements__value">${mov}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

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

const updateUi = function (acc) {
  //Display movements
  displayMovements(acc.movements);
  //Display balance
  calcDisplayBalance(acc);
  //Display summary
  calcDisplaySummary(acc);
};

//Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur(); //removes focus

    updateUi(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Update UI
    updateUi(currentAccount);
  }
});
//mov => mov-we get the current movment in the current itteration, condition - >=amount/10
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //Add movment
    currentAccount.movements.push(amount);

    //Update UI
    updateUi(currentAccount);
  }
  //Clear field
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    //Delete account
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }
  //empty input fields
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//////////////////////////////////////////////Array methods practice////////////////
/////////////////////////////////////

// //1)how much, in total, has been deposited in the bank(across all the accounts)
// //.map() to get all the movements
// //.flat() to move all arrays into one array
// //or just use .flatMap()
// //.filter() for positive values
// //.reduce() to boil down to single value

// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);

// console.log(bankDepositSum);

// //2) how many deposits has there been with atleast 1000 ?
// // const numDeposits1000 = accounts
// //   .flatMap(acc => acc.movements)
// //   .filter(mov => mov >= 1000).length;

// //same thing using reduce
// //reduce- whwnever the count is more/equal 100 return count+1 otherwise return the count
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   // .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

// console.log(numDeposits1000);
// //++ operator increments but returns the old value, need to use prefixed ++ operator- write before the operand
// let a = 10;
// console.log(a++);
// console.log(a);
// console.log(++a);

// //3) create a new object, which contains the sum of the deposits and of the withdrawals

// //reduce boils down array to just one value , which can be an object or a new array

// //starting point is an object with d/w at 0
// // deposits: 0, withdrawls: 0 =sums so we can access it sums.deposits or sums.withdrawals
// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawls += cur);
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );

// console.log(deposits, withdrawals);

// //4 create a function to convert any string to a title case(all words are capitalized except for some of them) - this is a nice title->This Is a Nice Title

// //!!it's common practice to create exceptions
// //terneray: if ? the current word is included in the xceptions array then return the word otherwise : capitalize
// const convertTitleCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);

//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(' ');
//   return capitalize(titleCase);
// };

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));

////////////////////////////////////////////////////////////////////////
////////166SUMMary which array methods to use//////////////////////////
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////
////////165 More ways of creating and filling Arrays//////////////////////
///////////////////////////////////

// //how to programatically create and fill arrays?

// //manually creating
// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// //Empty arrays +fill method
// //programatically creating
// const x = new Array(7);
// console.log(x);
// // console.log(x.map(() => 5));

// // x.fill(1);
// x.fill(1, 3, 5);
// console.log(x);

// //fill the array with 23 at position 4 till 6
// arr.fill(23, 4, 6);
// console.log(arr);

// //Array.from() function (to create a sequence)

// //create array of ones
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// //create array from 1 to 7
// //cur-current element, i-current index, !! we can use underscore - _ as a throw away variable, because we do not need this current value at all, but we still need to define something at the first parameter, because index that we need is only the second parameter, but to denote that we are not ussing this current element, we write _!!
// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// //100 random dice rolls
// const d = Array.from(
//   { length: 100 },
//   (_, i) => Math.floor(Math.random() * 6) + 1
// );
// console.log(d);

// //calculating mvements from the ui
// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );

//   console.log(movementsUI);

//   const movementsUI2 = [...document.querySelectorAll('.movements__value')];
// });

// //Array.from() function is used to create arrays from 1) iterables(maps, sets, querrySelectorAll...)
// //querrySelectorAll returns a node list, which is similar to array which contains all the selected elements, but it's not a real array so it doesn't have  array methods. To convert it into a real array we use Array.from() function and then we can use all the array methods

// //Arrray is a function and on that function object we call the .from() method
// //!!first argument1) object with the length property, second argument 2) a mapping function(exactly like a callback function that we pass into the .map() method)

// //.fill() does mutate the enrire array
// //this method is a bit similar to .slice() method
// //!!besides the value that we want to 1) fill the array with, we can also specify 2) where we want it to start to fill(begin parameter), we can also specify 3) end parameter(like in .slice() won't be included)

// //we can use the .fill() method on other arrays(not only empty ones)

// //whenerver we pass in one argument, into array constructor function - new Array() then it creates new empty argument (array?) with that length

// ////////////////////////////////////////////
// ///////164 SORTING ARRAYS///////////////////
// ///////////////////////////////////////////

// // //using a state variable to solve sort btn not returning to default
// // //state variable will monitor if we are currently sorting or not
// // //it needs to be outside btnSort function to preserve the sorted state

// // //we will add sort=false param to displayMovements
// // //new var movs is a conditional
// // //we use slice() to copy movements arr, because we dont want to mutate it with.sort()
// // //we want to sort arr in ascending order, because it will be diplayes from the bottom up

// // //JavaScripts built in sort methods-sort btn

// // //APP implementation

// // //Strings
// // const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// // console.log(owners.sort());
// // console.log(owners);

// // //!!Numbers!!
// // console.log(movements);

// // //return<0,A,B(keep order)
// // //return>0,B,A(switch order)

// // //sorting in ascending order
// // // movements.sort((a, b) => {
// // //   if (a > b) return 1;
// // //   if (b > a) return -1;
// // // });
// // movements.sort((a, b) => a - b);
// // console.log(movements);
// // //descending order
// // // movements.sort((a, b) => {
// // //   if (a > b) return -1;
// // //   if (b > a) return 1;
// // // });

// // movements.sort((a, b) => b - a);
// // console.log(movements);

// // //.sort() method sorted  the array of strings alphabetically and !! mutated the original array
// // //.sort() method does sorting based on strings, sorts numbers as if they were strings as well
// // // so bassically it converts everything into strings and then does the sorting itself!!

// // //we can fix this for number by passing in a compare callback function into the .sort() method!! which is called with two arguments (a,b in this example)- a- current value,b-next value, if we imagine the sort method looping over the array
// // //!! if we return less than 0-then the value A will be sorted before value B
// // //!! if we return a positive value then B will be put before A, in the sorted output array
// // //mistral -!! If a is greater than b, the function returns 1, which means b should come before a in the sorted array. If b is greater than a, the function returns -1, which means a should come before b in the sorted array. If a and b are equal, the function returns 0, which means their order doesn't change.!!

// ///////////////////////////////////////////////////163 flat and flatMap////////////////
// //////////////////////////////////////////

// //an array with array in it - a nested array
// //take elements in nested arrays seperately and put it in one big aray, with all numbers from 1-8
// //removes nested array and no callback function
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// //even more nested array
// //.flat(whats in here is the depth of flatenning-1 is default, 2- is deeper...)
// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// //lets say ther bank wants to callculate the ballance of overall movements of all the accounts

// //way1
// // const accountMovements = accounts.map(acc => acc.movements);
// // console.log(accountMovements);
// // const allMovements = accountMovements.flat();
// // console.log(allMovements);
// // const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);

// //way2 with chaining and .flat() method
// const overalBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// //way3 with .flatMap() method

// const overalBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);

// //first .map() and then .flat() is a pretty common practice so to solve this we use - flatMap() method
// //since flatMap() also does mapping it needs to receive exactly the same callback as a .map() method
// //!! .flatMap() is essentially a map method that flattens the results in the end
// //.!!flatMap() goes only one level deep and we cannot change that. So if you need to go deeper you still need to use .flat() method

// //!!these two methods are used for nested arrays

///////////////////////////////////////////
///////162 SOME AND EVERY/////////////////
//////////////////////////////////////////

// //APP- requesting loan from the bank(between transfer and close buttons)
// //grants loan only if there is at least one deposit with at least 10% of the requested loan amount
// //whenever you hear "any" - good use case for .some() method

// //check for equality
// console.log(movements);
// console.log(movements.includes(-130));

// //SOME:CONDITION (check for condition)
// console.log(movements.some(mov => mov === -130)); //the same as includes

// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);

// //EVERY
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// //SEPARATE CALLBACK
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

//until now we wrote our methods callback function as an argument, but we can write it sepatatly and then call it back as an argument(SEPARATE CALLBACK)

// ,every()- method only returns true if all of the elements in the array satisfy the condition, that we pass in.OTHER WORDS-!!if every element passes the test in our callback function only then the .every() method returns true

//!!if there is any value for which a condition is true, then the .some() method will return true

//we can test only for equality  === with .includes() method

//if we want to test for condition we use .some() method

////////////////////////////////////////////
///////161 THE findIndex METHOD////////////
//////////////////////////////////////////

//!!difference between .findIndex() and indexOf()- with indexOf() we can only search for value that is in the array, but with .findIndex() we can create a complex condition to check if it's true or false
//both of these methods get access to 1)current index and the 2)current entire array, but the 3)current element is what we use

//works almost the same as .find() method, but returns the index of the found element and not the element istself

//the example will be - close account implementation 1) delete account from accounts array using .splice() methods 2) find the index of the account using .findIndex() method

///////////////////////////////////////////////
/////////160 IMPLEMENTING TRANSFERS///////////
/////////////////////////////////////////////

// inputTransferAmount.value = inputTransferTo.value = ''; - to clear the input fields after doing the transfers

// e.preventDefault()- will prevent the reloading of the page. pretty common when working with forms
//amount > 0 && currentAccount && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username - this condition checks if 1) transfered amount is more than 0 2) receiver account exists 3) the current amount balance is more or equal to the transfer 4) ?. - optional chaining operator to check if the current account is not the same as the receiver acc  5) current user is not transfering to himself

///////////////////////////////////////////////
///////159 IMPLEMENTING LOGIN//////////////////
//////////////////////////////////////////////

//?.-optional chaning operator - makes it so that the pin property will be read only, if currenAccount exists
//declerring curent account outside function so we can use it latter- let currentAccount
//preventDefault() - to prevent the form from submitting(so the page doesn't reload)

//if the user and PIN are correct we can log in//
//either by pushing the arrow(button) or clicking enter

// attach addEventListener method to this button 1)   <button class="login__btn">&rarr;</button>
//the user is gonna come from this class - 2)class="login__input login__input--user"
//and the PIN is gonna come from this one -  3)class="login__input login__input--pin"
//all of the above are already selected :
//1)const btnLogin = document.querySelector('.login__btn');
//2)const inputLoginUsername = document.querySelector('.login__input--user');
//3)const inputLoginPin = document.querySelector('.login__input--pin');

///////////////////////////////////////////////
////////////158 THE FIND METHOD////////////////
//////////////////////////////////////////////

// //we can use .find() method to retrieve one element of an array based on a condition
// //it accepts a condition, a callback function, which will then be called as the method loops over the array
// //it's another method that loops over the array and retrieves an element of the array
// //like the .filter() method .find() returns a boolean(true or false), but unlike the .filter() method the .find() !!!the first element in the array that satisfies the condition!!!. in other words - the first element in the array for which the operation in the callback function becomes true
// //FILTER vs FIND:!!
// // 1) .filter() returns all the elements that match the condition while .find() method only returns first one and
// // 2) .filter() method returns an new array, while .find() method returns the element itself, not an array

// const firstWithdrawl = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawl);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// let account6;
// for (const acc of accounts) {
//   if (acc.owner === 'Jessica Davis') {
//     account6 = acc;
//     // break;
//   }
// }

// console.log(account6);

// //working with array of objects (const accounts)
// //we can find an object in the array based on some property of that object
// //can use .find() method to search an array for an  object, of  which we know one property already
// //usually we look for one element with the .find() method

// //each of the current elements is one account(acc)
// //need to select one of the accounts by the name (Jessica Davis)

//////////////////////////////////////////////
////156THE MAGIC OF CHAINING METHODS/////////
////////////////////////////////////////////

// // //assg
// //1)take all the movment deposits(>0) then 2)convert them from euros to dollars and 3) add them all up. so that we know how much was deposited into the account in dollars

// const eurToUsd = 1.1;
// console.log(movements);
// //PIPELINE
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   // .map(mov => mov * eurToUsd)
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * eurToUsd;
//   })
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);
// //can chain even more methods as long as they return new arrays

// // //!!!when chaining alot of methods debugging is harder.So then we need to check the arrays in each of the steps
// // //!!to check  the results of one array method,we meed to check out the current array, to do that, we need to check out-the array, on the next array method that has been chained to it
// // //above is the biggest use case for. We can inspect the current array at any stage of the pipeline using the third parameter of the callback function

// //const calcDisplaySummary!!
// //.Math.abs takes the absolute value, because we need to remove the minu-, because it's c;ear that it's negative

// //const interest!!
// //lets say that the bank pays interest each time that there is a deposit in the acc and the interest is 1.2% of the deposited amount
// //filter- to sort out deposits
// //.map to create a new array which contains all of the interests
// //and in the end we can just add them(interests) together
// //we take the current movment with map and call it deposit
// //calculate percentages
// //add all the percentages with .reduce()
// //int is interest, because each of the current movements is interest now

// //new bank rule: bank only pays interest if that interest is at least 1EUr
// //use .filter()

// //remarks:!!!
// //1) not overuse chaining
// //if we have huge chain of methods, chained one after the other, we should compress all the functionality that they do into as little methods as possible
// //exmp() overusing .map() method when one would be enough to map through the array
// //2) it is a bad practise to chain methods that mutate!!! the underlying original array
// //exmp = .splice() method or .reverse()

//////////////////////////////////////////////
//////////154THE REDUCE METHOD////////////////
/////////////////////////////////////////////

// ////calcDisplayBalance:
// //receive array of movements as imput
// //display the result in balance_value. It's already selected as labelBalance in this js

// // is used to boil down all the elements in an array to one single value

// //global balance of the account(movements):
// console.log(movements);

// //normal function
// // const balance = movements.reduce(function (acc, cur, i, arr) {
// //   console.log(`Iteration ${i}:${acc}`);

// //   return acc + cur;
// // }, 0);

// //arrow
// const balance = movements.reduce((acc, cur) => acc + cur, 0);

// console.log(balance);

// //the same manually with a for of loop
// let balance2 = 0;
// for (const mov of movements) {
//   balance2 += mov;
// }
// console.log(balance2);
// ///////////////////////////////////////////////////////////
// //getting Maximum value of the movements arr(3000):
// //the accumulator doesn't have to be a sum, it can be a string , object, multiplication....
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);

// //logic:
// //if acc is biger then the current value-mov, then return the acc
// //if the acc < mov return mov
// //in .reduce() method we have to return the accumulator into next iteration
// ///////////////////////////////////////////////////////////
// //!!!whenever we want to use for of loop we need external variable to store the results and that's fine if you only need one loop, but gets unpracticle when we use many loops

// //!!the .reduce() function also gets a callback function!!!, but diffrent than in .map() or .forEach(). The first parameter is called !!! 1) the accumulator(like a snowball that keeps accumulating the value until it is returned),second parameter is 2)!!! current value, third 3) !!! current index(of iteration), 4)!!! whole original array!!

// //so the callback function will be called in each itteration of looping over the array!!so .rdeuce() loops over the arr and calls this callback in each iteration
// //accumulator is the value that we will keep adding to!!!
// // accumulator + current value works because in each call of the callback function the accumulator will be the current sum of all the previous values and we will be adding to this accumulator in each iteration of the loop
// //we need to return the accumulated value so the accumulator can be used in the next iteration of the loop
// //!!to sum up - in each loop iteration we return the updated accumulator(the current acc + cur current value) and like this we can keep adding to it in the next iteration

// //always need the accumulator and the current value for arguments not always i or arr

// //!!the callback function is the 1) first argument of the .reduce() method!!! the second argument(parameter) is 2)!!! the initial value of the accumulator!!!(in the first loop iteration)!!

/////////////153THE FILTER METHOD///////////
/////////////////////////////////////////////

// //used to filter for elements, that specify a certain condition
// //to specify the condition we use a callback function!!!
// //.!!!filter() get access to 1)current array element,2)index of the element,3) entire array
// //in .filter() method we usually need only the current element
// //returns a new array!!!

// //create array of deposits(movements that are above 0):
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
//.map() returns a !!!new array with just the first letters, but does not modify old array!!!
//on an array call .join() method by an empty string ('') annd this will return the inicials
//to compute username for each acc we use .forEach(), !!!because we don't want to create new arr but to loop over accounts arr and modify it's elements(the objects of the app)
//!!each function should receive data that it should work with instead of using a global variable
//the createUser function is not to return a value but to make a side effect

////////////151 THE MAP METHOD/////////////////////////
////////////////////////////////////////////

// // used to loop over arrays and gives back a new array
// //and this new array will contain in each position -!!! the result of applying a callback function to the original array elements

// //assignment: movements are dollars that  need be converted to euros 2) lets say euro is 1.1 dollars

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

// //assignement: movementsUSD but with arrow function

// const movementsUSD2 = movements.map(mov => {
//   return mov * eurToUsd;
// });

// console.log(movementsUSD2);
// //since it's a on liner no need for return and {}
// const movementsUSD3 = movements.map(mov => mov * eurToUsd);

// console.log(movementsUSD3);

// //the callback function has the movment parameters and {} in the curly braces we specify we need to retun the value that we want the new array to have in the current position

// ////////////////////////////////////////////
// //just like the .forEach() method, .map() method also has access to the !!exact same three parameters. so besides the 1)!!!current index as well as 3)!!! the whole array

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

//!!MAP method- another method used to !!!loop over arrays. Similar to forEach method - but the difference is that map creates a !!!brand new array, based on the original array
//.Map() method 1)takes an array 2)loops over that array and in each iterration it 3)applies a !!!callback function ,that we specify in our code, to the current array element
//we say that it maps the values of the original array to a new array and that's why this method is called map
//forEach() allows us to do some work with each array element, .Map() builds us a brand new array, containing the results of applying an operation to the original array

//!!FILTER method- used to filter for elements in the original array !!!which satisfy a certain !!!condition
//filter returns !!!a new array containing the array elements that passed a specified test condition
//in other words-elements for which the condition is true will be included in a new array that the filter method returns.
//all other elements  will be filtered out(not included in the new array)

//!!REDUCE method- which is used to boil down all the elements of the original array into one single value(simple exmp:add all elements of an array to a single value: we need to specify the operation with the accumulator variable)
//so NO new array, but only the rdeuced (new) value!!!

////////148 Creating DOM Elements//////////////
////////////////////////////////////////////

// //!!!instead of working with global variables, it's best to pass in data that function needs into that function
// //!!!template literals are amazing at creating HTML templates
// const displayMovements = function (movements) {
//   containerMovements.innerHTML = ''; //textContent returns the text itself while innerHTML returns everything, including the HTML.!!!innerHTML to an empty string returns what we have dynamically inserted with adjascentHTML.innerHTML is a property!!!

//   movements.forEach(function (mov, i) {
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
//     containerMovements.insertAdjacentHTML('afterbegin', html); //!!!
//   });
// };
// displayMovements(account1.movements);
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
// //!!!Arrays are objects, and they get access to special built in methods that we can essentially see as tools for arrays

// //a simple test array
// let arr = ['a', 'b', 'c', 'd', 'e'];
// //!!SLICE!!
// //!!.slice() method - we can extract part of any array, but without changing (mutating) the original array - slice( 1)index of start extraction(icluded),2)index of end extraction(excluded)). Starting index is included, end index is excluded from the output. The method can be used only with starting index. The method returns a new array!!
// console.log(arr.slice(2));
// console.log(arr);
// console.log(arr.slice(2, 4)); //2-4 is actually 2-3, because 4 is excluded. So the length of the outputting array is end - start 4-2 =2
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
// //works almost the same way as .slice() method, but the fundamental diffrence is that it !!!does actually change the originall array!!! - so it mutates the array
// // console.log(arr.splice(2));
// console.log(arr); //changed array
// //.splice() is usually used to delete one or two elements from an array
// //.splice() very often used to !!!remove the last element of an array!!!
// arr.splice(-1);
// console.log(arr);
// //!!!the second parameter in .splice() is called delete count-it specifies how many elements to delete!!!
// arr.splice(1, 2); //this means that you delete two elements from position 1
// console.log(arr);

// //!!REVERSE!!
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// //the .reverse() method !!!mutates!!! the original array
// console.log(arr2);

// //!!CONCAT!!
// //used to concatenate two arrays. !!!doesn't mutate!!! the originall arrays
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log(arr);
// console.log(arr2);
// //the spred operetaor ... gives the same result and !!!doesn't mutate!!! the original arrays
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

// //Why use .at()!!! method instead of the [] brackets notation???
// //exmp: lets say we need to !!!get the last element!!! of the array, supposing that we don't know the legth of the array
// console.log(arr[arr.length - 1]); //using !!!arr.legth
// console.log(arr.slice(-1)); //using .slice()!!! to get a copy of last element of the array,
// console.log(arr.slice(-1)[0]);
// //but we want to take out that value by using [0] square brackets 0
// !!!console.log(arr.at(-1)); //using .at() method!!!

// //If you want to start counting from the end of the array or trying to find the last element of an array use .at() method
// //if you want to method chain also use .at() method
// //if you just want to quickly get a value from an array us [] bracket notation

// //.at() method also works on strings!!!
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
// //when will forEach() calback the function? forEach() loops over the array and in each itteration it will execute the callback function. also as the forEach() method calls this callback function and in each itteration it will pass in the !!!current element of the array as an argument!!! movement in this case

// //access to current index in forEach!!
// //how it works?
// //it is the forEach() method that calls the callback function in each iteration
// //and as it calls this function it also passes in the current element of the array
// //and actually it also passes 1)the current element of the array 2)!!! the index 3) and the entire array that we are looping!!!
// // they -1) 2), 3) can be specified in our parameters list
// // the names of the params don't matter - what matters is the order:
// //ALWAYS !!!1st param - current element, !!!2nd param - current index, !!!3d param - entire array that we are looping over
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

// // !!!we use a callback function to tell another higher order function exactly what it should do!!!
// //in the above example we tell forEach() that in each itteration it should log one of the 2 strings to the console
// //!!!we give the forEach() method instructions by giving it a callback function, which conatains these instructions!!!

// //!!!what if we actually needed access to a counter variable here?

// //So just like we can access the current index of the array in the for of loop
// // movements.forEach(function (movement) {
// //!!!.entries() is just another array method - it returns array of arrays,which in the first position contains i-current index, j-value itself or current array element (in this case we call j - movment) !!!
// //i+1 because index starts at 0
// console.log('----ENTRIES----');

// for (const [i, movement] of movements.entries())
//   if (movement > 0) {
//     console.log(`Movement ${i + 1} You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`); //absolute value to remove the -minus
//   }

// //!!When use forEach() when forof loop?
// //fundamental diffrence between the two of them: is that you !!!cannot break out of a forEach() loop!!!. So the continue and break statements don't work in a forEach() loop so instead - forEach() will always loop over the entire array and ther is nothing you can do about it.
// //So if you really need to !!!break out of a loop!!! then you need to use the forof loop

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
// //_ - underscore means - !!!throwaway variable - variable that is completely unecessery

///////////////////////////////////////////////////147 PROJECT:"Bankist" APP//////////////
////////////////////////////////////////////

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
cats, not dogs!!! So create a shallow copy of Julia's array, and remove the cat
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

/////////////////////////////////////////////////////////
///////155CODING Challange 2///////////////////////////
/////////////////////////////////////////////////////

//my solution

// // {
// // if (age <= 2) {
// //   return age * 2;
// // } else {
// //   return 16 + age * 4;
// // }}
// const dogAges1 = [5, 2, 4, 1, 15, 8, 3];
// const dogAges2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));

//   const adults = humanAges.filter(age => age >= 18);

//   console.log(humanAges);
//   console.log(adults);
//   //1st way of calculating avg:
//   // const avgAdults = adults.reduce((sum, age) => sum + age, 0) / adults.length;
//   //2st way of calculating avg:
//   const avgAdults = adults.reduce(
//     (acc, age, i, arr) => acc + age / arr.length,
//     0
//   );

//   //1st way of calculating avg: avg of 2 and 3 =(2+3)/2=2.5
//   //2st way of calculating avg: also can 2/2+3/2=2.5
//   return avgAdults;
// };

// const avg1 = calcAverageHumanAge(dogAges1);
// const avg2 = calcAverageHumanAge(dogAges2);
// console.log(avg1, avg2);

/**Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
Test data:
§Data 1: [5, 2, 4, 1, 15, 8, 3]
§Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀 */

/**
 * calcAverageHumanAge should accept an arr
 * write a conditional statement according to dog/human year formulas(.map)
 * keep only dogs that are >=18 human years (use-.filter())
 * calculate avg  of the above arr (use - .rduce() to calculate sum and divide sum from arr.length)
 * use .map(), .filter(), .reduce() methods
 */

///////////////////////////////////////////////
///////////157 CODING CHALLANGE 3//////////////
///////////////////////////////////////////////

/**Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!!!
Test data:
§Data 1: [5, 2, 4, 1, 15, 8, 3]
§Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀 */

// const dogAges1 = [5, 2, 4, 1, 15, 8, 3];
// const dogAges2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = ages =>
//   /**!!RETURN*/ ages
//     .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// const avg1 = calcAverageHumanAge(dogAges1);
// const avg2 = calcAverageHumanAge(dogAges2);
// console.log(avg1, avg2);

//////////////////////////////////////////////////
//////CODING CHALLANGE 4#////////////////////////
////////////////////////////////////////////////

/**Julia and Kate are still studying dogs, and this time they are studying if dogs are
eating too much or too little.
Eating too much means the dog's current food portion is larger than the
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10%
above and 10% below the recommended portion (see hint).
Your tasks:
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array. Forumla:
recommendedFood = weight ** 0.75 * 28. (The result is in grams of
food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!"
5. Log to the console whether there is any dog eating exactly the amount of food
that is recommended (just true or false)
6. Log to the console whether there is any dog eating an okay amount of food
(just true or false)
7. Create an array containing the dogs that are eating an okay amount of food (try
to reuse the condition used in 6.)
8. Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order (keep in mind that the portions are inside the
array's objects 😉) 

Hints:
§
Use many different tools to solve these challenges, you can use the summary
lecture to choose between them 😉
§
Being within a range 10% above and below the recommended portion means:
current > (recommended * 0.90) && current < (recommended *
1.10). Basically, the current portion should be between 90% and 110% of the
recommended portion
*/

// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// //1

// dogs.forEach(dog => {
//   dog.recFood = Math.trunc(dog.weight ** 0.75 * 28);
// });

// console.log(dogs);

// //2
// // if curFood > recFood * 0.9 &&
// //curFood < recFood * 1.1;
// const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));
// console.log(
//   `Sarah's dog is eating too ${
//     sarahsDog.curFood > sarahsDog.recFood ? 'much' : 'little'
//   }`
// );
// // if (sarahsDog.curFood < sarahsDog.recFood * 0.9) {
// //   console.log("Sarah's dog eats to little");
// // } else if (sarahsDog.curFood > sarahsDog.recFood * 1.1) {
// //   console.log("Sarah's dog eats to much");
// // }
// console.log(sarahsDog);

// //3

// const ownersEatTooMuch = dogs
//   .filter(dog => dog.curFood > dog.recFood)
//   .flatMap(dog => dog.owners);

// console.log(ownersEatTooMuch);

// const ownersEatTooLittle = dogs
//   .filter(dog => dog.curFood < dog.recFood)
//   .map(dog => dog.owners)
//   .flat();

// console.log(ownersEatTooLittle);

// //4
// // ("Matilda and Alice and Bob's dogs eat too much!");
// // ("Sarah and John and Michael's dogs eat too little!");
// console.log(`${ownersEatTooMuch.join("'s and ")}'s dogs eat too much!`);

// console.log(`${ownersEatTooLittle.join("'s and ")}'s dogs eat too little!`);

// //5
// const rightAmount = dogs.some(dog => {
//   console.log(dog.recFood === dog.curFood);
// });

// //6

// console.log(
//   dogs.some(
//     dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
//   )
// );

// //same
// const dogCheckEating = dog =>
//   dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
// console.log(dogs.some(dogCheckEating));

// //7
// const dogsRightAmount = dogs.filter(dogCheckEating);

// console.log(dogsRightAmount);

// //8
// // const recFoodAsc = dogs.map(dog => dog.recFood).sort((a, b) => a - b);

// const recFoodAsc2 = dogs.slice().sort((a, b) => a.recFood - b.recFood);

// console.log(recFoodAsc2);
