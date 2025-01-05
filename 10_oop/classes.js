class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        const length = this.password.length
        return '*'.repeat(length)

    }

    changeUsername(username){
        this.username = username
    }
}

const shaurya = new User("shaurya", "shauryauniyal@gmail.com", "123abc")

console.log(shaurya.encryptPassword())

shaurya.changeUsername("Shaurya")

console.log(shaurya.username);

// Behind The Scenes

function user(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.encryptPassword = function(){
    return "*".repeat(this.password.length)
}

const user1 = new user("Abc", "abc@gmail.com", "adsgk")

console.log(user1.encryptPassword());