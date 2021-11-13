'use strict';
let target = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.submitCheck').addEventListener('click', function () {
  const comp = Number(document.querySelector('.inputDigit').value);
  if (!comp) {
    document.querySelector('.guessMessage').textContent = 'OOPS Enter a digit';
  } else if (comp < target) {
    if (score > 1) {
      document.querySelector('.guessMessage').textContent = '🔻Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guessMessage').textContent =
        '😢oop You Suck! Try again';
      document.querySelector('.score').textContent = 0;
    }
  } else if (comp > target) {
    if (score > 1) {
      document.querySelector('.guessMessage').textContent = '🔼Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guessMessage').textContent =
        '😢oop You Suck! Try again';
      document.querySelector('.score').textContent = 0;
    }
  } else {
    if (highScore < score) {
      highScore = score;
    }
    document.querySelector('.guessMessage').textContent =
      '💚Hurray That is Correct!';
    document.querySelector('.number').textContent = target;
    document.querySelector('body').style.backgroundColor = '#66004d';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.inputDigit').value = '';

    document.querySelector('.highScore').textContent = highScore;
  }
});
//play again implementation
document.querySelector('.tryAgainBtn').addEventListener('click', function () {
  score = 20;
  document.querySelector('.number').style.width = '6rem';
  document.querySelector('body').style.backgroundColor = '#000000';
  document.querySelector('.inputDigit').value = '';
  target = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guessMessage').textContent = '🌠Start Guessing...';
  document.querySelector('.score').textContent = 20;
});
