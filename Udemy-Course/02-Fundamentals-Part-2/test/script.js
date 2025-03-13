'use strict';

let firstName;
let userMass;
let userHeight;
let bmi;

document.getElementById('mySubmit').onclick = function () {
  firstName = document.getElementById('firstName').value;
  userMass = Number(document.getElementById('mass').value);
  userHeight = Number(document.getElementById('height').value);
  document.getElementById('myH1').textContent = `Hello ${firstName}`;
  bmi = calcBMI(userMass, userHeight);
  document.getElementById('calculated-bmi').textContent = `${bmi}`;
  // console.log(firstName, userHeight, userMass);
  // console.log(bmi);
};

const calcBMI = function (mass, height) {
  const convMassToKilograms = mass / 2.205;
  const convHeightToMeters = mass / 39.37;
  const calculatedBMI =
    convMassToKilograms / (convHeightToMeters * convHeightToMeters);
  return calculatedBMI;
};

// where this whole idea started from:
// test implementation
/*
const firstName = prompt('What is your first name?');
const userMass = prompt('What is your weight in pounds?');
const userHeight = prompt('What is your height in inches?');

console.log(firstName, userMass, userHeight);

const user = {
  firstName: firstName,
  mass: userMass / 2.205,
  height: userHeight / 39.37,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
  getYourBMI: function () {
    this.yourBMI = `${this.firstName}, your BMI is ${this.bmi}.`;
    return this.yourBMI;
  },
};

console.log(user.firstName, user.mass, user.height);

user.calcBMI();
user.getYourBMI();
console.log(user.yourBMI);
*/
