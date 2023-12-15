// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 23;

const calcAge = birthYear => 2037 - birthYear;

const calcTip = anyBill =>
  (50 <= anyBill) & (anyBill <= 300) ? anyBill * 0.15 : anyBill * 0.2;

console.log();
console.log(calcAge);

console.log();

//video
