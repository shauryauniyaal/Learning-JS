function User(username, password, isLoggedIn){
    this.username = username
    this.password = password
    this.isLoggedIn = isLoggedIn

    return this
}

const user1 = new User("shaurya", "123abc", false)
const user2 = new User("uniyal", "453ssd", true) // Can create new instances with same properties easily

console.log(user1);
console.log(user2);

const car1 = {
    name : "Alto",
    cost : 300000
}
// Have to create objects again and again
const car2 = {
    name : "Swift",
    cost : 600000
}
