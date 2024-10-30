// forin loop: way to iterate through JS objects

const myObject = {
    'I': 'One',
    'II': 'Two',
    'III': 'Three',
    'IV': 'Four'
}

for (const key in myObject) {
    // console.log(`${key} is the roman numeral of ${myObject[key]}`);
    
}

const arr = ['a', 'b', 'c', 'd', 'e']

for (const key in arr) {
    // console.log(key); This will print key values of the array (these are the index values)
    console.log(arr[key]);
    
}

// forin will not work on maps