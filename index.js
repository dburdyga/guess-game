let number = Math.floor(Math.random() * 11); // Моделирование интервала ввода чисел
let attemptsCount = 1;
let resetButton;

const attempts = document.getElementById('attempts'); // Попытки
const allertMessage = document.getElementById('allertMessage');
const value = document.getElementById('value');
const guessSubmit = document.getElementById('submit');
const guessField = document.getElementById('field');

function checkGuess() { // Проверить значение
  let guess = Number(guessField.value);
  if (attemptsCount === 1) {
    attempts.textContent = 'Предыдущие попытки: ';
  }

  attempts.textContent += guess + ' ';

  if (guess === number) {
    playerLevel();
    allertMessage.textContent = 'Вы угадали!'; // Моделирование сообщения о правильно угаданном числе
    allertMessage.style.color = 'green';
    value.textContent = '';
    setGameOver();
  } else if (attemptsCount === 10) {
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

  attemptsCount++;
  guessField.value = '';
}

function playerLevel() {
  if(attemptsCount < 1) {
    allertMessage.textContent = 'Вы угадали! Ваш уровень: Чемпион';
  } else if(attemptsCount < 2) {
    allertMessage.textContent = 'Вы угадали! Ваш уровень: Эксперт';
  } else if(attemptsCount < 3) {
    allertMessage.textContent = 'Вы угадали! Ваш уровень: Профи';
  } else if(attemptsCount < 4) {
    allertMessage.textContent = 'Вы угадали! Ваш уровень: Любитель';
  } else if(attemptsCount > 8) {
    allertMessage.textContent = 'Вы угадали! Ваш уровень: Новичок';
  }
}

function setGameOver() { // Начать новую игру
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Начните новую игру';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() { // Сбросить игру
  attemptsCount = 1;
  const resetResult = document.querySelectorAll('.result p');
  for(let i = 0 ; i < resetResult.length ; i++) {
    resetResult[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus(); // для автоматического размещения текстового курсора в поле
  randomNumber = Math.floor(Math.random() * 11); // создание нового рандомного числа
}
