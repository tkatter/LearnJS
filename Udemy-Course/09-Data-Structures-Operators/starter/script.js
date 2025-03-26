'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Destructuring Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Setting Default Values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating Variables
let a = 111;
let b = 999; // a = 999, b = 111
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

/*
// Manual Destructuring Array
const arr = [7, 8, 9];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

// Destructuring Array
const [x, y, z] = arr;
console.log(x, y, z);

// Setting Default Values
const [d = 1, e = 1, f = 1] = [6, 9];
console.log(d, e, f);

// Skipping Values in Destructuring
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching Variables
// Manually
const temp = main;
main = secondary;
secondary = temp;

// With Destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(`${starter}, ${mainCourse}`);

// Nested Destructuring
const nested = [2, 4, [5, 6]];

// Return the entire array in element 2 of nested array
const [i, , j] = nested;
console.log(i, j);

// Return the individual elements in element 2 of nested array
const [l, , [m, n]] = nested;
console.log(l, m, n);
*/
