const letterDisplay = document.querySelector('.letter-display');
const buttons = document.querySelectorAll('button');
const white = document.querySelector('.white');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const blue = document.querySelector('.blue');


const changeColor = function(event) {
   console.log(this.getAttribute('data-type'));
   let selectedColor = this.getAttribute('data-type');
   letterDisplay.style.color = selectedColor;
   buttons.forEach(button => {
   button.style.color = `${selectedColor}`;
})
}
white.addEventListener('click', changeColor);
red.addEventListener('click', changeColor);
green.addEventListener('click', changeColor);
blue.addEventListener('click', changeColor);


document.onkeypress = function (event) {
    event = event || window.event;
    letter = event.key;
    console.log(letter);
    letterDisplay.innerHTML = letter;
    buttons.forEach(button => {  
    })
}

const showStuff = function(event) {
    letterDisplay.innerHTML = event.target.innerHTML;
}


buttons.forEach(button => {
    button.addEventListener('click', showStuff)
})