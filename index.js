let number = Math.floor(Math.random() * 11); // Моделирование интервала ввода чисел
let guessCount = 1;
let resetButton;

const attempts = document.getElementById('attempts'); // Попытки
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
    allertMessage.textContent = 'Вы угадали!'; // Моделирование сообщения о правильно угаданном числе
    allertMessage.style.color = 'green';
    value.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    allertMessage.textContent = 'Игра закончена'; // Моделирование сообщения об окончании игры
    value.textContent = '';
    setGameOver();
  } else {
    allertMessage.textContent = 'Ошибка!'; // Моделирование сообщения о неверной попытке ввода не числа
    allertMessage.style.color = 'red';

    if(guess < number) {
      value.textContent = 'Введите число больше'; // Моделирование сообщения о вводе большего числа
    } else if(guess > number) {
      value.textContent = 'Введите число меньше'; // Моделирование сообщения о вводе меньшего числа
    }
  }

  guessCount++;
  guessField.value = '';
}

function setGameOver() { // Начать новую игру
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Начните новую игру';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;
  const resetResult = document.querySelectorAll('.result p');
  for(let i = 0 ; i < resetResult.length ; i++) {
    resetResult[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  randomNumber = Math.floor(Math.random() * 11);
}