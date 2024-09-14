// function addTwoNumbers(number1, number2) {

//     console.log(number1 + number2);

// }

// console.log("Result: ", addTwoNumbers(5, 3));
// output will be undefined

function addTwoNumbers(number1, number2) {

    return number1 + number2;

}

// console.log("Result: ", addTwoNumbers(5, 3)); // correct output

// function calculateCartPrice(...num1) { // rest operator

//     return num1
// }

// console.log(calculateCartPrice(200, 4000, 20000));

function calculateCartPrice(val1, val2, ...num1) { // Also, if there are already variables defined before the rest operator, they will take the respective values and the rest operator will take the remaining ones.

    return num1
}

// console.log(calculateCartPrice(200, 4000, 20000, 50000));

let user = {
    username : "Shaurya",
    price : 250
}

function HandleObject(anyobject) {
    console.log(`${anyobject.username} is the username and the price is ${anyobject.price}.`); // but any change in key will give undefined in its place
    
}

console.log(HandleObject(user));
