let myHeroes = ['spiderman', 'batman']

let HeroPower = {
    spiderman : 'sling',
    batman : 'idk'
}

Object.prototype.showPower = function(){
    console.log(`Power`);
    
}
HeroPower.showPower()
myHeroes.showPower() // works as well (prototype inheritence)

Object.prototype.trueLength = function(){
    return this.trim().length
}

const myWord = "Hello     " // True length should be 5

console.log(myWord.trueLength());

const User = {
    name : "shaurya",
    isLoggedIn : true
}

const student01 = {
    class : "XI",
    // __proto__ : User (ONE WAY) prototype Inheritence
}

// student01.__proto__ = User (ANOTHER WAY)

Object.isPrototypeOf(student01, User) // MODERN WAY 

student01.isLoggedIn = false
student01.name = "Abc"
console.log(student01);
