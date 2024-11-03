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

### Project 04

```javascript
let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.getElementById('subt');
const userGuess = document.getElementById('guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuesses = [];
let guessCount = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();

    const userNo = parseInt(userGuess.value);
    validateGuess(userNo);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number.');
  } else if (guess < 1) {
    alert('Please enter a number greater than 1.');
  } else if (guess > 100) {
    alert('Please guess a number less than 100.');
  } else {
    prevGuesses.push(guess);
    if (guessCount === 10 && guess != randomNum) {
      cleanupGuess(guess);
      displayMessage(`You lost! The number was ${randomNum}.`);
      endGame();
    } else {
      cleanupGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    displayMessage('CORRECT GUESS! You Won.');
    endGame();
  } else if (guess < randomNum) {
    displayMessage('Your number is too low!');
  } else {
    displayMessage('Your number is too high!');
  }
}

function cleanupGuess(guess) {
  userGuess.value = '';
  if (guessCount != 10) {
    guessSlot.innerHTML += `${guess}, `;
  } else {
    guessSlot.innerHTML += guess
  }
  guessCount++;
  remaining.innerHTML = `${11 - guessCount}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = message;
}

function endGame() {
  userGuess.value = ''
  submit.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = '<h2 id="newGame">Start New Game</h2>'
  startOver.appendChild(p)

  playGame = false
  newGame()
}

function newGame() {
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuesses = []
    guessCount = 1
    remaining.innerHTML = `${11 - guessCount}`
    guessSlot.innerHTML = ''
    submit.removeAttribute('disabled')

    playGame = true;
  })
}
```
