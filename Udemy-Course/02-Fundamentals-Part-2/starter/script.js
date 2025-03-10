'use strict';

// ACTIVATING STRICT MODE
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; // with strict mode enabled, this produces an error in the console "hasDriverLicense is not defined" because we wrote the name wrong
if (hasDriversLicense) console.log(`I can drive!`);
*/

// FUNCTIONS
/*
// making a function for when we may need to use certain lines of code multiple times within our code
function logger() {
  console.log('My name is Thomas.');
}

// invoking/running/calling the function:
logger();
logger();
logger();

// functions can recieve and return data - think of them like machines

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const orangeJuice = fruitProcessor(0, 5);
console.log(orangeJuice);
const appleOrangeJuice = fruitProcessor(3, 2);
console.log(appleOrangeJuice);
*/

// FUNCTION DECLARATIONS VS EXPRESSIONS

// parameters are the "placeholders" in the function declaration and arguements are the actual value we specify for that parameter

// function declaration
function calcAge1(birthYear) {
  return 2025 - birthYear;
}
const age1 = calcAge1(2003);

// function expression
const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};
const age2 = calcAge2(2003);

console.log(age1, age2);
