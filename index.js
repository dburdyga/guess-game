let number = Math.floor(Math.random() * 11);
let guessCount = 1;
let resetButton;

const attempts = document.getElementById('attempts');
const allertMessage = document.getElementById('allertMessage');
const value = document.getElementById('value');
const guessSubmit = document.getElementById('submit');
const guessField = document.getElementById('field');

function checkGuess() {
  let guess = Number(guessField.value);
  if (guessCount === 1) {
    attempts.textContent = 'Предыдущие попытки: ';
  }

  attempts.textContent += guess + ' ';

  if (guess === number) {
    allertMessage.textContent = 'Вы угадали!';
    allertMessage.style.color = 'green';
    value.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    allertMessage.textContent = 'Игра закончена';
    value.textContent = '';
    setGameOver();
  } else {
    allertMessage.textContent = 'Ошибка!';
    allertMessage.style.color = 'red';

    if(guess < number) {
      value.textContent = 'Введите число больше' ;
    } else if(guess > number) {
      value.textContent = 'Введите число меньше';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Начните новую игру';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll('result p');
  for(let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  randomNumber = Math.floor(Math.random() * 11);
}