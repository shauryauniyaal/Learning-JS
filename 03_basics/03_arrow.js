let obj = {
    username : "Shaurya",
    greeting : function() {
        console.log(`${this.username}, welcome. `); // 'this' refers to current context
        console.log(this); // { username: 'Shaurya', greeting: [Function: greeting] }
        
    }
    
}

obj.greeting()

console.log(this); // {} in node environment, window in browser console


function func() {
    let fruit = "apple"
    console.log(this.fruit);
    
}

func() // undefined

// const addTwo = (num1, num2) => { // arrow function
//     return num1 + num2
// }

// console.log(addTwo(5,4))

const addTwo = (num1, num2) => (num1 + num2) // implicit return

console.log(addTwo(5,4))