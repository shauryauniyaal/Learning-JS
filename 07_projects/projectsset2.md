# Async Code Related Projects

## Projects Link

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)

## Solution Code

### Project 05

```javascript
console.log('Project 5');
const insert = document.querySelector("#insert");

window.addEventListener('keydown', function(e){
  insert.innerHTML = `
  <div class = 'key'>
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>

</table>
</div>
  `
})
```

### Project 06

```javascript
const randomColor = function() {
  let hex  = "0123456789ABCDEF"
  let colour = "#";
  for(i = 0; i < 6; i++){
    colour += hex[Math.round(Math.random() * 16)]
  }
  return colour
}

let colour



const start = document.querySelector('#start')
let setInt;

const stop = document.querySelector('#stop')

start.addEventListener('click', function(e){
  if (setInt == null){
    setInt = setInterval(function(){
      colour  = randomColor();
      const body = document.querySelector('body')
      body.style.backgroundColor = colour 
    }, 1000)
  }
})

stop.addEventListener('click', function(e){
  stopInt = clearInterval(setInt)
  setInt = null
})
```