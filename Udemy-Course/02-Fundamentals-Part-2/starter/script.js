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
/*
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

// function declarations can be called before being defined; function expressions CANNOT
// EXAMPLE:
const age3 = calcAge3(2003);
function calcAge3(birthYear) {
  return 2025 - birthYear;
}
console.log(age3);

// which type of function should I use?
// function expressions are nice because of the structure they provide; this way I will need to declare all of my functions at the beginning of my code before I can invoke them later.
// Jonas likes to store all of his values and expressions in variables for the structure
*/

// ARROW FUNCTIONS
/*
// added in ES6 - third type of function

// arrow function
birthYear => 2025 - birthYear;

// arrow function stored in a variable
const calcAge4 = birthYear => 2025 - birthYear;
const age4 = calcAge4(2003);
console.log(age4);

// arrow function with more than one parameter and more than one line of code to be returned
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} is ${age} years old now and will retire in ${retirement} years.`;
};

console.log(yearsUntilRetirement(2003, 'Thomas'));
console.log(yearsUntilRetirement(2006, 'Andrew'));
console.log(yearsUntilRetirement(2007, 'Grace'));
*/

// FUNCTIONS CALLING OTHER FUNCTIONS

function cutFruitPieces(fruit) {
  return fruit * 6;
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));
