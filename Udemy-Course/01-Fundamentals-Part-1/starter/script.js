/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

// Value = smallest unit of information in JavaScript

// console.log("Jonas");    "Jonas" is a value
// console.log(23);         23 is a value

// What are variables??
// A box into which we can store a value.

// Declaring a variable
let firstName = "Thomas";
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Naming Variable rules:
// camelCase
let camel = 'one word with camelCase.';
let camelCase = 'two words with camelCase.';
let camelCaseNaming = 'three words with camelCase.';

// Can not start variable name with number
// let 3years = 3;

// Can only contain numbers, letters, underscores, and dollar signs
// Can not name variables with reserved JavaScript keywords i.e. new, function
// "name" is reserved, so don't call variables only "name"
// Start variables in lowercase
let firstVar = 1;

// Variables in all uppercase are constants
let PI = 3.1415;

// Make variable names descriptive of their values -- for cleaner code
let myFirstJob = 'programmer';
let mySecondJob = 'teacher';
// versus:
let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);
*/

/*
// DATA TYPES

// BOOLEANS
let javascriptIsFun = true;
console.log(javascriptIsFun);

// Typeof will show the type of a value
// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Thomas');

// Dynamic typing in action: assigning javascriptIsFun to a different value of a different type
javascriptIsFun = 'YES!';
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
// NOTE that when redefining a variable that has already been declared - do not use "let," simply type the variable's name and declare its new value

// UNDEFINED
let year;
console.log(year);
console.log(typeof year);

// Reassigning the previously UNDEFINED variable
year = 2025
console.log(year);
console.log(typeof year);

// NULL
console.log(typeof null);
// console prints "object" - this is a bug because null is not an object.
*/

/*
// LET, CONST AND VAR
let age = 30;
age = 31;
*/

// BASIC OPERATORS

// MATHEMATIC OPERATORS
/*
let currentYear = 2025;
const ageThomas = currentYear - 2003;
const ageAndrew = currentYear - 2006;
console.log(ageThomas, ageAndrew);

console.log(ageThomas * 2, ageThomas / 2, ageAndrew / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3
console.log(
  'bianary table for ip addresses/subnet masks:',
  2 ** 7,
  2 ** 6,
  2 ** 5,
  2 ** 4,
  2 ** 3,
  2 ** 2,
  2 ** 1,
  2 ** 0
);

const firstName = 'Thomas';
const lastName = 'Katter';
console.log(firstName + ' ' + lastName);
console.log('Age: ' + ageThomas);
console.log(typeof ageAndrew);
*/

// ASSIGNMENT OPERATORS
let x = 10 + 5; // 15
console.log(x);
// here the "=" is an operator.
// this line actually has two operators "=" & "+"
// however, "x" is assigned the value of 15 because the ASSIGNMENT operator comes BEFORE the MATHEMATICAL operator
x += 10; // x = x + 10
console.log(x);

x *= 4;
console.log(x);

x /= 2;
console.log(x);

x++;
console.log(x);
