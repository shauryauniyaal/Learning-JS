// object literal

const mySym = Symbol("key1")

let myObj = {
    name : "Shaurya",
    "full name" : "Shaurya Uniyal",
    email : "shaurya@gmail.com",
    age : 17,
    [mySym] : "mykey1"
}

console.log(myObj.name);

console.log(myObj["full name"]);

myObj.email = "shauryauniyal@gmail.com"

console.log(myObj);

// Object.freeze(myObj)

myObj.email = "shauryauniyal8@gmail.com"

console.log(myObj);

myObj.greeting = function(){

    console.log("Hello user");
    
}


console.log(myObj.greeting());

myObj.greetingTwo = function(){

    console.log(`Hello User, ${this.name}`);
    
}

console.log(myObj.greetingTwo());

