// forEach loop

const coding = ["javascript", "python", "java", "cpp"]

coding.forEach( function (item) {
    // console.log(item);
    
})

coding.forEach( (key) => {
    // console.log(key);
    
})

const myArr = [
    {
        'language': 'javascript',
        'languageFileName': 'js'
    },
    {
        'language': 'python',
        'languageFileName': 'py'
    },{
        'language': 'java',
        'languageFileName': 'java'
    }
]

myArr.forEach( (item) => {
    console.log(item.languageFileName);
    
})