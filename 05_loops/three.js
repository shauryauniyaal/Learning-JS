// forof loop

const arr = [1, 2, 3, 4, 5, 6]

for (const i of arr) {
    // console.log(i);
    
}
// does not work in JS objects

// Maps

const newMap = new Map()

newMap.set("IND", "India")
newMap.set("USA", "United States of America")
newMap.set("FRA", "France")

for (const [key, value] of newMap) {
    console.log(key, ':', value);
    
}