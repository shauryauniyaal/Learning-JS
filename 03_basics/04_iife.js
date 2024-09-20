// Immediately Invoked Function Expression (IIFE)

(function hello() { // named IIFE
    console.log(`Hello`);
    
}) (); // executes immediately, can be used to avoid global scope variable pollution inside the function

( (name) => {
    console.log(`Hellooo, ${name}`);
    
}) ("Shaurya"); // can also be used with arrow functions