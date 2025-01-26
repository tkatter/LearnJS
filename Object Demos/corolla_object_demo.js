// Run this file in VS Code with Node.js Run and Debug to see it in action

const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    color: 'silver',
    mileage: 0,
    drive: function() {
    console.log('The car is driving.');
 }
};

// to call the 'drive' method use the following syntax
car.drive();

// to access the 'model' property use the following syntax
 console.log(car.model);
 console.log(car['model']);