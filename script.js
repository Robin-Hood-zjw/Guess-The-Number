'use strict';

// set the initial score of each candidate in one round of this game
let score = 20;
let highscore = 0;

// the classes for the use of the following steps
let numberText = document.querySelector('.number').textContent;
let checkClass = document.querySelector('.check');
let bodyClass = document.querySelector('body');
let scoreClass = document.querySelector('.score');
let againClass = document.querySelector('.again');
let guessClass = document.querySelector('.guess');
let highscoreClass = document.querySelector('.highscore');

// choose a random secret number as the correct answer in this game's one round
let secretNum = Math.trunc(Math.random() * 20) + 1;

// arrow function for checking if the candidate lose the game or not
const checkScore = score => {
  if (score <= 0) {
    messageClass.textContent = `💥 You lost the game!`;
  }
};

const displayMessage = info => {
  document.querySelector('.message').textContent = info;
};

checkClass.addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;
  console.log(typeof guess);

  if (!guess) {
    messageClass.textContent = '⛔️ No Number!';
  } else if (guess === secretNum) {
    displayMessage('🎉 Correct Number!');
    numberText = secretNum;
    highscoreClass.textContent = score;
    bodyClass.style.backgroundColor = '#60b347';
    numberClass.style.width = '30rem';
  } else {
    displayMessage(guess > secretNum ? '📈 Too High!' : '📉 Too Low!');
    scoreClass.textContent = --score;
    checkScore(score);
  }
});

againClass.addEventListener('click', function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  scoreClass.textContent = score;
  numberText = '?';
  guessClass.value = '';
  highscoreClass.textContent = 0;

  bodyClass.style.backgroundColor = '#222';
  numberClass.style.width = '15rem';
});
