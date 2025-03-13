'use strict';

console.log(document.querySelector('.message').textContent);
// WHAT IS DOM?
// Documentation Object Model:
// Structured representation of html documents. allows JavaScript to access html elements and styles to maipulate them
// change text, html attributes, and even css styles
// DOM is complete representation of the html document so that we can manipulate it in many ways

// SELECTING AND MANIPULATING ELEMENTS
document.querySelector('.message').textContent = 'Correct Number!!';
document.querySelector('.score').textContent = '100';
document.querySelector('.number').textContent = '37';

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
