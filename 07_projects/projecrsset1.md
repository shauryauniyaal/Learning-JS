# DOM Related Projects

## Projects Link

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)

## Solution Code

### Project 01

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    body.style.backgroundColor = e.target.id
  })
})
```

### Project 02

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please enter a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please enter a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)

    if (bmi < 18.6) {
      results.innerHTML = `<span>BMI : ${bmi}. You are underweight!</span>`
    } else if (bmi < 24.9) {
      results.innerHTML = `<span>BMI : ${bmi}. You are fit!</span>`
    } else {
      results.innerHTML = `<span>BMI : ${bmi}. You are overweight!</span>`
    }
  }
});
```

### Project 03

``` javascript
const clock = document.querySelector('#clock')

setInterval(function(){
  let date = new Date()

  clock.innerHTML = date.toLocaleTimeString()
}, 1000);
```
