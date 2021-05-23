'use strict';

let score = 20,
  scores = new Array(),
  randomNumber = Math.ceil(Math.random() * 20),
  highestScore = 0;

const body = document.querySelector('body'),
  message = document.querySelector('.message'),
  guess = document.querySelector('.guess'),
  check = document.querySelector('.check'),
  number = document.querySelector('.number'),
  scoreLabel = document.querySelector('.label-score span'),
  higestScoreLable = document.querySelector('.label-highscore span');

// Lose function
function lose() {
  message.textContent = '💥 You lost the Game';
  scoreLabel.textContent = 0;
  guess.style.display = 'none';
  check.style.display = 'none';
}

// Game logic
check.addEventListener('click', () => {
  // Checking if the gussed number is right
  if (!guess.value) {
    message.textContent = '⛔️ No number!';
    // Checking if the gussed number is right number
  } else if (Number(guess.value) === randomNumber) {
    message.textContent = '🎉 Correct Number!';
    body.style.backgroundColor = '#60B347';
    number.textContent = randomNumber;
    number.style.width = '30rem';
    guess.style.display = 'none';
    check.style.display = 'none';
    // Checking the highest score
    if (highestScore < score) {
      highestScore = score;
    }
    higestScoreLable.textContent = highestScore;
    // Checking if the gussed number is greater than the random number
  } else if (Number(guess.value) > randomNumber) {
    if (guess.value > 20) {
      message.textContent = '💥 Out of the range';
      guess.value = '';
    } else {
      if (score > 1) {
        message.textContent = '📈 Too high!';
        score--;
        scoreLabel.textContent = score;
        guess.value = '';
      } else {
        lose();
      }
    }
    // Checking if the gussed number is less than the random number
  } else if (Number(guess.value) < randomNumber) {
    if (score > 1) {
      message.textContent = '📉 Too low!';
      score--;
      scoreLabel.textContent = score;
      guess.value = '';
    } else {
      lose();
    }
  }
});

// Again function
document.querySelector('.again').addEventListener('click', () => {
  message.textContent = 'Start guessing...';
  body.style.backgroundColor = '#222222';
  randomNumber = Math.ceil(Math.random() * 20);
  number.textContent = '?';
  number.style.width = '15rem';
  guess.value = '';
  guess.style.display = 'block';
  check.style.display = 'block';
  scoreLabel.textContent = '20';
  score = 20;
});
