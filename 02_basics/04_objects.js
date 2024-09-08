let obj1 = {
    1 : 'a',
    2 : 'b'
}

let obj2 = {
    3 : 'c',
    4 : 'd'
}

// let obj3 = { obj1, obj2 }

// let obj3 = Object.assign({}, obj1, obj2)

let obj3 = {...obj1, ...obj2}

// console.log(obj3);

// console.log(Object.keys(obj3));

// console.log(Object.values(obj3));

// console.log(Object.entries(obj3));

// console.log(obj3.hasOwnProperty('1'));

let course = {
    courseName : "JavaScript Basics",
    coursePrice : 899,
    courseInstructor : "Xyz" 
}

let {courseInstructor = instructor} = course // object destructuring

console.log(courseInstructor);
