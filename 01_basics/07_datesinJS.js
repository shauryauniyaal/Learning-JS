let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log(myDate.getDay());
console.log(myDate.getTime());
console.log(myDate.getMonth() + 1);

console.log(myDate.toLocaleString('default', {
    weekday : "long", month : "long"
}));