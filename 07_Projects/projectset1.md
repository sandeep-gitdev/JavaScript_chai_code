# Project related to DOM

## project link
 [click here] (https://stackblitz.com/edit/dom-project-chaiaurcode-om8wsi?file=index.html)

# solution code

## project 1

```javascript
console.log("sandeep")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');


buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function(e){
     console.log(e);
     console.log(e.target);
      if(e.target.id === 'grey'){
        body.style.backgroundColor = e.target.id
      }
      if(e.target.id === 'white'){
        body.style.backgroundColor = e.target.id
      } 
      if(e.target.id === 'blue'){
        body.style.backgroundColor = e.target.id
      }
      if(e.target.id === 'yellow'){
        body.style.backgroundColor = e.target.id
      }
      if(e.target.id === 'purple'){
        body.style.backgroundColor = e.target.id
      }
  })
});



`````

 ## Project 2 soultion

 ``````` javascript 
 const form = document.querySelector('form')

// This usecase will give your empty value
//const height = parseInt(document.querySelector('#height').val

form.addEventListener('submit', function(e){
   e.preventDefault()

 const height = parseInt(document.querySelector('#height').value)
 const weight = parseInt(document.querySelector('#weight').value)
 const results = document.querySelector('#results')

   if(height === '' || height < 0 || isNaN(height)){
     results.innerHTML = `Please give a valied height ${height}`;
   }else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valied weight ${weight}`;
  } else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    // show the results
    results.innerHTML = `<span>${bmi}</span>`

    if( bmi < 18.6) {
      results.innerHTML = `<span>Under weight: ${bmi}</span>`;
    }  else if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = `<span>Normal weight: ${bmi}</span>`;
    } else {
      results.innerHTML = `<span>Over weight: ${bmi}</span>`;
    }

  }
 })

  ```````````````

  ## Project 3 solution

  `````` javascript 

const clock = document.querySelector('#clock');



setInterval(function(){
  let date = new Date()
//console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)

``````````````

## Project 4 solution

,,,,, javascript 
     let randomNum = parseInt(Math.random() * 100 + 1);

  const submit = document.querySelector('#subt')
  const userInput = document.querySelector('.guessField')
  const Userguess = document.querySelector('.guesses')
  const remaining = document.querySelector('.lastResult')
  const lowOrHi = document.querySelector('.lowOrHi')
  const startOver  = document.querySelector('.resultParas')

  const p = document.createElement('p');

  let prevGuess = [];
  let numGuess = 1;

   let playGame = true;

   if (playGame) {
    submit.addEventListener('click', function (e) {
      e.preventDefault();
      const guess = parseInt(userInput.value);
      console.log(guess);
      validateGuess(guess);
    });
  }

  function validateGuess(guess) {
    if(isNaN(guess)){
      alert('Please enter a valid number')
    } else if(guess < 1){
      alert('Please enter a number more than 1')
    }
    else if(guess > 100){
      alert('Please enter a number less than 100 ')
    } else {
      prevGuess.push(guess)
      if(numGuess === 11) {
         displayGuess(guess)
         displayMessage(`Game Over. Random number was ${randomNum}`)
         endGame()
      } else {
        displayGuess(guess)
        checkGuess(guess)
      }
    }
  }

  function checkGuess(guess) {
    if(guess === randomNum){
        displayMessage(`You guess is right`)
        endGame()
    } else if (guess < randomNum) {
      displayMessage(`Number is too low`)
    } else if (guess > randomNum) {
      displayMessage(`Number is too high`)
    }
  }

  function displayGuess(guess) {
    userInput.value = ''   //cleanup 
    Userguess.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
  }

  function displayMessage(message) {
      lowOrHi.innerHTML = `<h2>${message}</h2>`
  }

  function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p)
    playGame = false;
    newGame();

  }

  function newGame() {
   const newGameBtn = document.querySelector('#newGame')
   newGameBtn.addEventListener('click', function(e) {
     randomNum = parseInt(Math.random() * 100 + 1);
     prevGuess = []
    numGuess = 1;
    Userguess.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
     });
  }


  ,,,,,,,,,,,,,,,,

  ## Project 5 soultion
  
  ,,,,,,,,,,,,,,,,,,,,
  // press any key
  //console.log('Project 5');

const insert = document.querySelector('#insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class="color"> 
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === " " ?" space" : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </table>
    </div>
  `;
});

,,,,,,,,,,,,,,,,,,,,,,,,,


  ## Project 6 solution

  ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    // random color genretor//

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

 let intervalId
const startChaningColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
     clearInterval(intervalId);
      intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChaningColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

,,,,,,,,,,,,,,,,,,,,,,,,,,,,