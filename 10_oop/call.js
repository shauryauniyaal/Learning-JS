function setUsername(username){
    this.username = username
}

function setUser(username, password){
    setUsername.call(this, username)
    this.password = password
}

const shaurya = new setUser('shaurya', "123abc")

console.log(shaurya);
