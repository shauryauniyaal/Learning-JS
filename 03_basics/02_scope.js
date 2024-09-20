// Global scope
let globalVar = "I'm global";

function exampleFunction() {
    // Function scope
    let functionVar = "I'm function-scoped";
    
    if (true) {
        // Block scope
        let blockVar = "I'm block-scoped";
        const constVar = "I'm also block-scoped";
        var varVariable = "I'm function-scoped (not block-scoped)";
        
        console.log(globalVar);      // Accessible
        console.log(functionVar);    // Accessible
        console.log(blockVar);       // Accessible
        console.log(constVar);       // Accessible
        console.log(varVariable);    // Accessible
    }
    
    console.log(globalVar);      // Accessible
    console.log(functionVar);    // Accessible
    console.log(varVariable);    // Accessible
    // console.log(blockVar);    // Error: not accessible
    // console.log(constVar);    // Error: not accessible
}

exampleFunction();

console.log(globalVar);      // Accessible
// console.log(functionVar); // Error: not accessible
// console.log(blockVar);    // Error: not accessible
// console.log(constVar);    // Error: not accessible
// console.log(varVariable); // Error: not accessible

addOne(4) // will work

function addOne(num) {
    return num + 1
}

addTwo(5) // won't work

const addTwo = function(num) {
    return num + 2
}

