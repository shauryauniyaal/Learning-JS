const temperature = 35 

if (temperature < 40) {
    console.log("Temperature is less than 40.");
    
}

else {
    console.log("Temperature is greater than 40.");
    
}

// SHORTHAND NOTATION

balance = 1000

if (balance > 500) console.log("yes"); // one line of code only

// comma can be used for multiple lines but not recommended as it may make code less readable


let userLoggedIn = true

let debitCard = true

let loggedInFromGoogle = true

let loggedInFromEmail = false

if (userLoggedIn && debitCard){ // Logical AND
    console.log("Allowed to buy");
} 

if (loggedInFromEmail || loggedInFromGoogle) { // Logical OR
    console.log("User is logged in");
    
}