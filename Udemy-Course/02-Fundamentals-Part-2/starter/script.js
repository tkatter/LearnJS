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
/*
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
*/

// REVIEWING FUNCTIONS
/*
const calcAge = function (birthYear) {
  return 2025 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    return `${firstName}, you will retire in ${retirement} years.`;
  } else if (retirement === 0) {
    return `${firstName}, you are retiring this year! WooHoo!`;
  } else {
    return `${firstName}, you have already retired, congrats!`;
  }
  // return retirement;
  // return `${firstName} is ${age} years old now and will retire in ${retirement} years.`;
};

console.log(yearsUntilRetirement(2003, 'Thomas'));
console.log(yearsUntilRetirement(1960, 'Mike'));
console.log(yearsUntilRetirement(1950, 'Sean'));

// THREE FUNCTION TYPES
// function declaration - can be used before it's declared
function calcAge(birthYear) {
  return 2025 - birthYear;
}

// function expression - essentially a function value stored in a variable
const calcAge = function (birthYear) {
  return 2025 - birthYear;
};

// arrow function - great for quick one-line functions. has no "this" keyword
const calcAge = birthYear => 2037 - birthYear;

// three different ways of writing functions, but they all work in a similar way: recieve input data, transform data, and then output data.
*/
/*
// FUNCTION ANATOMY
// NAME: name of the function to be used when invoking/running/calling the function [calcAge]
// PARAMETERS: placeholders to receive input values, like local variables of a function [birthYear, firstName]
// FUNCTION BODY: block of code that we want to reuse throughout our larger code, processes the function's input data [const age = 2025 - birthYear; console.log(`${firstName} is ${age} years old.`);]
// RETURN STATEMENT: outputs a value from the function and terminate execution [return age;]
function calcAge(birthYear, firstName) {
  const age = 2025 - birthYear;
  console.log(`${firstName} is ${age} years old.`);
  return age;
}

// CALLING/RUNNING/INVOKING THE FUNCTION USING (): without the () calcAge is seen as just a value
// ARGUMENTS: actual values of function parameters, to input data [2003, 'Thomas']
// VARIABLE: to save returned value (function output) [const myAge =], the returned value in this example would be the value of "age" which is a number
const myAge = calcAge(2003, 'Thomas');
*/

// CODING CHALLENGE 1
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No team wins...`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);
*/

// INTRODUCTION TO ARRAYS
/*
// two most important data structures in JavaScript are arrays and objects
const friend1 = 'Grace';
const friend2 = 'Chad';
const friend3 = 'Zach';

// two ways to create an array
const friends = ['Grace', 'Chad', 'Zach'];
// const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]); // print the value at the 0 position
console.log(friends[2]); // print the value at the 2nd position

console.log(friends.length); // print the number of items in the array
console.log(friends.length - 1);
console.log(friends[friends.length - 1]);

// friends[2] = 'Jay'; // change the value at position 2 in the array
// console.log(friends);

const firstName = 'Thomas';
const lastName = 'Katter';
const job = 'carpenter';
const calcAge = birthYear => 2025 - birthYear;

const thomas = [firstName, lastName, calcAge(2003), job, friends];
console.log(thomas);
console.log(thomas.length);

// Excercise
const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};

// array of birthYears
const years = [1990, 2000, 2003, 2024, 2004, 2007];

const age1 = calcAge2(years[0]); // 1990
const age2 = calcAge2(years[1]); // 2000
const age3 = calcAge2(years[years.length - 1]); // 2007
console.log(age1, age2, age3);

const ages = [
  calcAge2(years[0]),
  calcAge2(years[1]),
  calcAge2(years[years.length - 1]),
];
console.log(ages);
*/

// BASIC ARRAY OPERATIONS (METHODS)
/*
const friends = ['Grace', 'Chad', 'Zach'];

// ADD ELEMENTS
// use push to add an element to an array
const newLength = friends.push('Jay'); // push is a method but it is technically a function attatched to an array 'Jay' is an argument to the push function - the result of the push function is the length of the array
console.log(friends);
console.log(newLength);
// use unshift to add an element to the beginning of an array
friends.unshift('John');
console.log(friends);

// REMOVE ELEMENTS
const popped = friends.pop(); // removes last element - the pop function results the removed element
console.log(popped);
console.log(friends);

const shifting = friends.shift(); // removes first element - the shift function results the removed element
console.log(shifting);
console.log(friends);

console.log(friends.indexOf('Chad')); // returns the index of the element passed as an argument

console.log(friends.includes('Chad')); // returns true or false based on whether the element is present in the array
console.log(friends.includes('Bob'));

friends.push(23);
console.log(friends.includes(23));
console.log(friends.includes('23')); // includes is a strict function

if (friends.includes('Grace')) {
  console.log('You have a friend named Grace.');
}
*/

// CODING CHALLENGE 2
/*
const calcTip = function (billValue) {
  const tip =
    50 <= billValue && billValue <= 300
      ? Number(billValue) * 0.15
      : Number(billValue) * 0.2;
  return tip;
};
// console.log(calcTip(10));
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills);
// console.log(tips);
// console.log(totals);
*/

// INTRODUCTION TO OBJECTS
/*
// review of arrays
const thomasArray = [
  'Thomas',
  'Katter',
  2025 - 2003,
  'Carpenter',
  ['Grace', 'Chad', 'Zach'],
];

// objects are made up of key-value pairs
// the value can be any expression
// keys are also called properties
// an object with the same information as the array above:
const thomas = {
  firstName: 'Thomas',
  lastName: 'Katter',
  age: 2025 - 2003,
  job: 'carpenter',
  friends: ['Grace', 'Chad', 'Zach'],
};

// many ways to create objects:
// object literal syntax: uses the curly brackets like above to write an object
const literalObject = {
  property1: 'Thomas',
  property2: 'Katter',
  property3: 'human',
};

// objects are best used for unstructured data because the order of data doesn't matter when retrieving them
// arrays are best used for structured data because we can retrieve data based on its order in an array
*/

// DOT VS BRACKET NOTATION
/*
const thomas = {
  firstName: 'Thomas',
  lastName: 'Katter',
  age: 2025 - 2003,
  job: 'carpenter',
  friends: ['Grace', 'Chad', 'Zach'],
  location: 'zimmerman',
};

// dot notation
console.log(thomas.lastName);
// bracket notation - can use any expression in [] to calculate the property we want to retrieve
console.log(thomas['lastName']);
// examples using expressions
console.log(thomas['last' + 'Name']);
const nameKey = 'Name';
console.log(thomas['first' + nameKey]);

const interestedIn = prompt(
  'What do you want to know about Thomas? Choose between firstName, lastName, age, job, or friends.'
);

if (thomas[interestedIn]) {
  console.log(thomas[interestedIn]);
} else {
  console.log(`Not a valid option.`);
}

// adding properties
thomas.address = `14120 269th Ave NW`;
thomas['ig'] = 'tok1n.th3rm0s';
console.log(thomas);

// Challenge
// Thomas has 3 friends and his best friend is called Grace.
const thomasNew = {
  firstName: 'Thomas',
  friends: ['Grace', 'Chad', 'Zach'],
};
// console.log(thomasNew['friends']);
// console.log(thomasNew['bestFriend']);
console.log(
  `${thomasNew.firstName} has ${thomasNew.friends.length} friends and his best friend is called ${thomasNew.friends[0]}.`
);
*/

// OBJECT METHODS
/*
const thomas = {
  firstName: 'Thomas',
  lastName: 'Katter',
  birthYear: 2003,
  job: 'carpenter',
  friends: ['Grace', 'Chad', 'Zach'],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2025 - birthYear;
  // },

  //   calcAge: function () {
  //     return 2025 - this.birthYear;
  //   },

  calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },
};

// console.log(thomas.calcAge());
// thomas.birthYear = 2004;
// console.log(thomas.calcAge());
console.log(thomas.calcAge());
console.log(thomas.age);
*/

// Challenge
// write a method called getSummary that will return a string that summarizes the data of the object
/*
const grace = {
  firstName: 'Grace',
  lastName: 'Murphy',
  birthYear: 2003,
  homeAddress: '13923 10th Ave. S.',
  city: 'Zimmerman',
  state: 'MN',
  friends: ['Thomas', 'Emma', 'Ella', 'Abby', 'Danie', 'Maddy', 'Morgan'],
  calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    this.summary = `${this.firstName} ${this.lastName} is ${
      this.age
    } years old. ${this.firstName} lives on ${this.homeAddress} ${this.city}, ${
      this.state
    }. ${this.firstName} has ${this.friends.length} friends; ${
      this.friends[0]
    } is her boyfriend, ${this.friends[1]} is her best friend, and ${
      this.friends[this.friends.length - 1]
    } is her sister.`;
    return this.summary;
  },
};
grace.calcAge();
grace.getSummary();
console.log(grace.summary);
console.log(grace);
*/

// CODING CHALLENGE 3
/*
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );
}
*/
