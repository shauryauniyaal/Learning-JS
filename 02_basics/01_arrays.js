let myArr = [1,23,34, 56]

console.log(myArr.includes(23));
console.log(myArr.indexOf(23));

let newArr = myArr.join()

console.log(newArr);
console.log(typeof newArr);

let myn1 = myArr.slice(1,3)
console.log(myArr);

let myn2 = myArr.splice(1,3)
console.log(myArr);


