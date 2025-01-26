// JavaScript has 7 primitive data types:
console.log(SSBBNNU)

// String: a sequence of characters represented by either single 'string' or double quotes "string"
    // Examples:
        const name = "Xam"; // string
        const name = 'Xam'; // string
// Number: can be an integer (314) or a float (3.14); JavaScript does not have a separate tyoe for representing integers or floating-point values so they are both represented as numbers
    // Examples:
        const age = 21; // number
// BigInt: special type for representing integers that are too large to be represented by the Number type. It is denoted by appending "n" to the end of the integer.
    // Examples:
        const bigInt = 9007199254740991n; // bigint 
// Boolean: represents a true or false value
    // Examples:
        const isApproved = true; // boolean
        const isApproved = false; // boolean
// Undefined: a value is undefined if it has not been assigned a value; if you try to access a variable that has not been declared, it will also be undefined
    // Examples:
        const firstName = undefined; // undefined
// Symbol: used to identify object properties; symbols are created using the 'Symbol()' function
    // Examples:
        const lastName = Symbol("last name"); // symbol
// Null: represents the absence of a value or a null reference, it is an empty or non-existent value
    // Examples:
        const selectedColor = null; // null

// Explaining Objects or non-primitive data types
    // an object is a collection of properties in which the properties are an association between a name or 'key' and a value- similar to objects in real life
        // Example describing a Toyota Corolla as an object in JavaScript
            const car = {
                make: 'Toyota', // property - string value
                model: 'Corolla', // property - string value
                year: 2020, // property - number value
                color: 'silver', // property - string value
                mileage: 0, // property - number value
                drive: function() { // method
                console.log('The car is driving now');
                }
            };
    // the 'car' object also has a method called 'drive', which is a function that can be called to make the car drive
        // to call the 'drive' method use the following syntax
            car.drive(); // Output: The car is driving now
    // access properties of an object using dot or bracket notation
        // to access the 'model' property use the following syntax
            console.log(car.model); // dot notation
            console.log(car['model']); // bracket notation
    // you can add, modify, or delete properties of an object using the same dot or bracket notation (this is also an example of modifying the properties of an object assigned to a 'const' variable)
        // Add a property like this:
            car.owner = 'Lexus';
        // Modify a property like this:
            car.color = 'red';
        // Delete a property like this:
            delete car.owner;

