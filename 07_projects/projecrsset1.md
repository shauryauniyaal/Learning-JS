# DOM Related Projects

## Projects Link

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)

## Solution Code

### Project 01

```javascipt
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
