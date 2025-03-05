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

// LET, CONST AND VAR

