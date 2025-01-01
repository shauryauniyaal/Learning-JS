// const promiseOne = new Promise(function(resolve, reject){
//     console.log('Hello');
    
// })

// promiseOne.then()

// const promiseTwo = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('This is a task.');
//         resolve()
//     }, 1000)
// })

// promiseTwo.then(function(){
//     console.log('Task 2 done.');
    
// })

const promiseThree = new Promise(function(resolve, reject){
    error = false
    if (!error){
        resolve({username: 'shaurya', password: 'abc123'})
    } else{
        reject('An error has occured!')
    }
})

// promiseThree
// .then(function(user){
//     console.log('The task is successful');
//     return user.username
// })
// .then(function(username){
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(function(){
//     console.log('The promise was either resolved or rejected.');
// })

// async function consumePromiseThree() {
//     try {
//         const response = await promiseThree
//         console.log(response);      
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// consumePromiseThree()
// then catch method
fetch('https://randomuser.me/api')
.then((response) => {
    const data = response.json()
    return data
})
.then((data) => {
    console.log(data);
    
})
.catch(function(error){
    console.log("E: ", error);
})
// async await method
async function getData() {
    try {
        const response = await fetch('https://randomuser.me/api')
        const data = await response.json()
        console.log(data);
        
    } catch (error) {
        console.log("E: ", error);
        
    }
}

getData()