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
/*
// MATHEMATIC OPERATORS

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

x--;
console.log(x);
x--;
console.log(x);


// COMPARISION OPERATORS
// >, <, >=, <=
console.log(ageThomas > ageAndrew); // greater than
console.log(ageThomas < ageAndrew); // less than
console.log(ageThomas >= ageAndrew); // greater than or equal to
console.log(ageThomas <= ageAndrew); // less than or equal to

console.log(ageAndrew >= 18);
console.log(ageAndrew >= 21);
console.log(ageThomas >= 21);

const isFullAge = ageAndrew >= 18;

console.log(currentYear - 2003 > currentYear - 2006);
*/

// OPERATOR PRECEDENCE
/*
let currentYear = 2025;
const ageThomas = currentYear - 2003;
const ageAndrew = currentYear - 2006;

console.log(currentYear - 2003 > currentYear - 2006);

let x, y; // declaring 2 empty values at the same time
x = y = 25 - 10 - 5; // subtraction will occur first from left to right leaving us with x = y = 10; then the operators are evaluated right to left making y = 10 and leaving us with x = 10
console.log(x, y);

const averageAge = (ageThomas + ageAndrew) / 2;
console.log(ageThomas, ageAndrew, 'Average age: ' + averageAge);
*/

// CODING CHALLENGE 1
/*
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;
BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);
markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
*/

// STRINGS AND TEMPLATE LITERALS
/*
const firstName = 'Thomas';
const job = 'Carpenter';
const birthYear = 2003;
const year = 2025;

// const thomas =
//   "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '.';
// console.log(thomas);

// printing the same string above ^^ with a template string - basically lets me insert variables directly into the string
const thomasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}.`;
console.log(thomasNew);

// can use backtiks for all strings - recommended to start using backtiks everytime for all strings
console.log(`Just a regular string`);

console.log(
  'String with \n\
multiple \n\
lines'
);

// using template literals to create multi-line strings - just need to hit <ENTER> instead of using \n\
console.log(`String
multiple
lines`);
*/

// TAKING DECISIONS: if/else Statements
/*
// this is called an "if/else control structure"
if(){

} else {
  
}
*/

/*
const age = 16;

if (age >= 16) {
  console.log(`Sarah can start driving license`);
} else {
  const yearsLeft = 16 - age;
  console.log(`Sarah must wait ${yearsLeft} more year(s).`);
}

const birthYear = 2003;

let century;
if (birthYear <= 2000) {
  century = `20th century`;
} else {
  century = `21st century`;
}
console.log(century);
*/

// CODING CHALLENGE 2
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if(BMIMark > BMIJohn){
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
*/

// TYPE CONVERSION AND COERCION
/*
// type conversion is when we manually convert from one type to another
// type coercion is when JavaScript automatically converts types behind the scenes for us

// TYPE CONVERSION
const inputYear = `1991`;
console.log(inputYear + 18); // since inputYear is a string it simply just adds 18 to the end of the inputYear string printing "199118"
console.log(Number(inputYear) + 18); // here we manually converted inputYear to a number type using the Number() function and are now able to add 18 to it like expected

console.log(Number('Thomas')); // output: NaN - meaning Not a Number

console.log(String(23), 23);

// TYPE COERCION
console.log(`I am ` + 23 + ` years old.`); // here we have a String + Number + String and JavaScript automatically converts the Number to a String
console.log(`I am ` + String(23) + ` years old.`); // manual way to make this work if JavaScript did not automatically convert the Number to a String
console.log('23' - '10' - 3); // JavaScript automatically converted Strings to Numbers
console.log('23' + '10' + 3); //  JavaScript automatically converted the Number to a String and used the + operator to concatenate the strings together; output: 23103
console.log('23' * '2'); // JavaScript automatically converted Strings to Numbers because that is the only way the multiplier operator can work

// GUESS THE OUTPUT!
let n = '1' + 1; // concatenates the Number 1 to the String 1 - giving us n = 11
n = n - 1; // subtracts the Number 1 from the value of n - giving us n = 10 because JavaScript automatically converted the value of n to a Number when it saw that we wanted to subtract from it
console.log(n); // output: 10

console.log(2 + 3 + 4 + '5'); // output: 95 because JavaScript adds the Numbers first (2+3+4 = 9) and converts 9 to a String and concatenates the String 9 and 5 together
console.log('10' - '4' - '3' - 2 + '5'); // output: 15 because JavaScript converts the Strings (10, 4, and 3) to Numbers and subtracts the Number 2 giving us a value of 1, then JavaScript converts 1 to a String and concatenates the Strings 1 and 5 to give us an output of 15
*/
