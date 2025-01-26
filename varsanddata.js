// declaring a variable
// assigning a value to a variable 'x'
var x;
x = 10;

// another way of writing the same thing
var x = 10;

// Rules for naming variables:
    // 1. camelCase: first work is lowercase and subsequent words are capitalized
        var firstName = Thomas;
    // 2. descriptive names: ise variables that accurately describe the vaule being held
        var age = 21;
        // not this:
        var num = 21;
    // 3. do not use reserved words: var, function, if
    // 4. avoid abbreviations: firstName is easier to understand than fn
    // 5. be consistent: if using camelCase for variables, use it for functions aswell
    // 6. case-sensitive: firstName and firstname are 2 different variables
    // 7. use semicolons: statements are often separated by semicolons- best practice to use at the end of each statement
    // 8. use single quotes: strings are surrounded by single or double quotes- best practice to use single quotes for strings
    // 9. starts with keyword: variables must begin with a letter, underscore, or dollar sign


// VARIABLE SCOPES
    // Globally scoped and Block scoped:
        // 'var' is function-scoped; only accessible within the function in which they are defined
        // if 'var' is not declared within a function it is accessible globally- can be accessed from anywhere in the code
            // Global example:
                var x = 10;

                function globalExample() {
                    console.log(x); // Output: 10
                }

                console.log(x);  // Output: 10

        // 'let' and 'const' are block-scoped; only accessible within the block of code in which they are declared
        // 'const' cannot be reassigned after they are declared
        // a block is a piece of code surrounded by curly braces such as an 'if' statement or a 'for' loop
            // Block 'let' example:
                if (true) {
                    let x = 10;
                    console.log(x); // Output: 10
                }

                console.log(x); // Output: Uncaught ReferenceError: x is not defined
    // 'var' can be re-declared and updated
        // variables declared with 'var' are function-scoped
        // only accessible within the function that they are declared or within functions nested within that function
            // Example of declaring and updating a 'var' variable
                function doSomething() {
                    var x = 10;
                    console.log(x); // Output: 10

                    x = 20;
                    console.log(x); // Output: 20
                }

                doSomething();
        // the 'doSomething' function declares a variable 'x' and assigns it the value '10' and is logged to the console
        // the value of 'x' is then updated to '20' and logged to the console
            // Example of declaring and re-declaring a 'var' variable
            function doSomething() {
                var x = 10;
                console.log(x); // Output: 10

                var x = 20;
                console.log(x); // Output: 20
            }

            doSomething();
        // Note- re-declaring does not result in an error, but can lead to confusing or unexpected behavior
        // Best practice- avoid re-declaring variables within the same scope
    // 'let' can be updated but not re-declared
        // variables created with the 'let' keyword can be updated or reassigned but cannot be re-declared in the same block of code
            // Example of updating a variable declared with 'let'
                let x = 5;
                x = 10;
                console.log(x) // Output: 10
            // Example of attempting to re-declare the 'let' variable
                let x = 5;
                let x = 10; // This will throw an error
        // Best practice- recommended to use 'let' instead of 'var' when declaring variables in modern JavaScript as 'let' provides more precise control over variable declarations and can help prevent unintended behavior in your code
    // 'const' can neither be updated nor re-declared
        // 'const' keyword is used to declare a constant variable
        // constant variables are variables that cannot be reassigned or re-declared
            // Example of attempting to update and re-declare a 'const' variable
                const PI = 3.14;
                PI = 3.14159; // This will throw an error
                //////
                const PI = 3.14;
                const PI = 3.14159; // This will throw an error
                //////
                const PI = 3.14;
                let PI = 3.14159;
                var PI = 3.14159; // Even if you declare with 'let' or 'var', you will still get an error
        // IMPORTANT NOTE- you can still modify the properties of an object that is assigned to a constant variable
            // Example
                const obj = {};
                obj.name = "Thomas";
    // How variable keywords 'var' 'let' 'const' are initialized
        // variables declared with 'var' are initialized with the value of 'undefined' when created
            // Example
                var x;
                console.log(x) // Output: Undefined
        // variables declared with 'let' and 'const' are not initialized with any value
        // trying to access a declared 'let' or 'const' variable with no assigned value resuts in 'Reference Error' 
            // Example
                let y;
                console.log(y); // Output: Uncaught ReferenceError: y is not defined
                
                const z;
                console.log(z); // Output: Uncaught SyntaxError: Missing initializer in const declaration
    // 'const' must be initialized during declaration unlike let and var
         // 'const' variables must have a value specified when they are declared
            // Example
                const PI; // This will throw an error because PI is not initialized
    
                const PI = 3.14; // This is allowed
        // 'var' and 'let' variables can be reassigned and do not have to be initialized during declaration
            // Example
                let x;
                x = 10;
                x = "hello";
                
                var y;
                y = 20;
                y = false;
// Best Practice- use 'const' whenever possible and only use 'let' or 'var' when reassignment is necessary
// this helps to prevent accidental reassignment and makes the code easier to understand