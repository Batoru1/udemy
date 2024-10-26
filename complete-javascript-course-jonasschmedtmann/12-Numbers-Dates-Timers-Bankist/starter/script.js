'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
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
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

///////////////////////////////////////////////////
/////////Numbers, Dates, Intl and Timers//////////
/////////////////////////////////////////////////

//////////////////////////////////////////////////
///////171 Converting and Checking Numbers////////
/////////////////////////////////////////////////

// //how numbers work in js?
// //how to convert values to numbers?
// //how to check if certain values are numbers or not?

// //in js all numbers are represented internally as ??floating point numbers-decimals, no matter if we write them as integers or as decimals
// console.log(23 === 23.0);
// //also numbers are represented internally in a 64 base 2 format- numbers are stored in a binary format-0's and 1's

// //decimal is base 10 so numbers from 0 to 9
// //binary is base 2 so numbers from 0 to 1
// //some numbers are very hard to represent in binary:exmp-0.1
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3); //LOL no financial or scientific calculations in js!!
// //base10-1/10=0.1, 3/10=0,333333

// //converting a string to a number??
// console.log(Number('23'));
// //easier way
// console.log(+'23');

// //Parsing- to parse a number from a string
// //every object is a function. Number is an object
// //.parseInt(specify a string(might have symbols))-and js will try to figure out the number in that string!!.in order for this to work string needs to start with a number??
// //parseInt function also accepts a second argument called ??regex??-it is a base of numeral system.by passing 10?? as regex we might acoid some bugs!!
// //Int- stands for integers!!
// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseInt('e23', 10)); //not gonna work

// //parseFloat!!!!!!!!!!!!!!!!!!!!!
// console.log(Number.parseFloat('2.5rem'));
// console.log(Number.parseInt('2.5rem'));

// //parseInt and parseFloat are Global functions!!
// console.log(parseFloat('2.5rem   '));
// //but in practice we do it with Number because it provides a namespace??- for a all these diffrent functions

// //!!isNAN!!

// //to check if any value is a number

// //Check if value is NaN
// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20X'));
// console.log(Number.isNaN(23 / 0));

// //better to check with isFinite!!!!!!!!!!!!!!!!
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20x'));
// console.log(Number.isFinite(23 / 0));

// console.log(Number.isInteger(23));
// console.log(Number.isInteger('23'));
// console.log(Number.isInteger(23.0));
// console.log(Number.isInteger(23.2));
// console.log(Number.isInteger(23 / 0));

/////////////////////////////////////////////////
//////////172 MATH and ROUNDING/////////////////
////////////////////////////////////////////////

// //square root

// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));

// //cubic root!!
// console.log(8 ** (1 / 3));??

// //maximum value
// console.log(Math.max(5, 18, 23, 11));
// //does type coersion
// console.log(Math.max(5, 18, '23', 11));
// //does not do parsing
// console.log(Math.max(5, 18, '23px', 11, 2));

// //minimum value
// console.log(Math.min(5, 18, 23, 11, 2));

// //Constants of Math namespace or object

// //radius
// //area of a circle with 10px radius
// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// //random dice roll
// console.log(Math.trunc(Math.random() * 6 + 1));

// //random integers between 2 values!!!!

// /**

// Math.random() gives us a random number between 0 and 1.

// But we don’t want a random decimal; we want a random number. We can get that by multiplying our Math.random() result by the size of the range. For example, if we want a random number between 0 and 10, we need to multiply by 10. A result of 0.4 would become 4. If we want random numbers from 7 to 11, that is 5 possible numbers (7, 8, 9, 10, 11).
// This is where we get Math.random() * (max - min + 1)

// We don’t want decimal numbers though, we want whole numbers. Math.floor() just chops off the decimal. 3.14159 becomes 3.
// That’s where we get Math.floor(Math.random() * (max - min + 1)).

// Now we’re getting a number from 0 to whatever our range size was. If we wanted a number from 7 to 11, it’s a random number from 0 to 5. To make that be a number from 7 to 11, we just need to add 7 to whatever number we got. 7 is our minimum value.
// This leads us to Math.floor(Math.random() * (max - min + 1)) + min */
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;

// console.log(randomInt(10, 20));

// //rounding to integers!!
// //all do type coersion

// //no float(decimal), only integer!!
// console.log(Math.trunc(23.3));

// //normal round
// console.log(Math.round(23.3));
// console.log(Math.round(23.9));

// //round up
// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.9));

// //round down
// console.log(Math.floor(23.3));
// console.log(Math.floor('23.9'));

// //floor and trunc are the same when dealing with positive numbers, but not for negative numbers
// console.log(Math.trunc(23.3));

// console.log(Math.trunc(-23.3));
// console.log(Math.floor(-23.3));

// //Rounding to floating point numbers(decimals)!!

// console.log((2.7).toFixed(0));
// //toFixed willl always return a string and not a number
// console.log((2.7).toFixed(3));
// console.log((2.345).toFixed(2));
// //converting result to a number!!
// console.log(+(2.345).toFixed(2));

//////////////////////////////////////////////////
//////////173 THE REMAINDER OPERATOR % ////////////
/////////////////////////////////////////////////

// //??returns the remainder o a division(what's left after division), if we only take integers no decimals(floating numbers)!!

// console.log(5 % 2);
// console.log(5 / 2); //5=2*2+1

// console.log(8 % 3);
// console.log(8 / 2); //8=2*3+2

// //!!Checking if number is even(0,2,4,6...) or odd(1,3,5,7...)!!
// //even numbers ar divisible by 2(if we divide by 2 the reminder is 0)

// console.log(6 % 2);
// console.log(6 / 2);

// console.log(7 % 2);
// console.log(7 / 2);

// //!!!!!!
// const isEven = n => n % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(23));
// console.log(isEven(514));

// //if the reminder of any division is 0, that means that the number is divissible by that specific(any) divider!!

// //app examples
// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     if (i % 2 === 0) row.style.backgroundColor = 'orangered'; //0 2 4 6
//     if (i % 3 === 0) row.style.backgroundColor = 'blue'; //0 3 6 9
//   });
// });

////////////////////////////////////////////////
//////////174 NUMERIC SEPARATORS///////////////
///////////////////////////////////////////////

// //ns-to form numbers in a way that is easier for us to read and understand. Are simply underscores that we can place anywhere that we want

// //diameter of our solar system
// //287,460,000,000
// const diameter = 287_460_000_000;
// console.log(diameter);

// const priceCents = 345_99;
// console.log(priceCents);

// const transferFee1 = 15_00;
// const transferFee2 = 1_500;

// //beggining end and after or before . - we  get error and no two __ undersores _
// const PI = 3.1415;
// console.log(PI);

// //undersore _ doesn't work in string
// console.log(Number('23000'));

// console.log(parseInt('230_000'));

// ////////////////////////////////////////////////
// //////////175Working with BigInt////////////////
// ///////////////////////////////////////////////

// //it's a special type of integers. Can be used to store numbers as large as we want

// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 + 1);

// console.log(164564565437568658976957987985990n);
// console.log(BigInt('164564565437568658976957987985990'));

// //operations
// console.log(10000n + 10000n);
// console.log(1423245135234513523452345n * 13241534523542514523523n);
// // console.log(Math.sqrt(16n));

// //can mix BigInt with regular numbers
// const huge = 124354325634634562546354n;
// const num = 23;
// console.log(huge * BigInt(num));

// //logical operators

// console.log(20n > 15);
// console.log(20n === 20); //don't do type coersion
// console.log(typeof 20n);
// console.log(20n == 20); //does type coersion
// console.log(20n == '20');

// console.log(huge + ' is REALLY big!');

// //divisions

// //returns closest BigInt-cuts decimal part
// console.log(10n / 3n);

////////////////////////////////////////////////
///////176Creating dates///////////////////////
//////////////////////////////////////////////
