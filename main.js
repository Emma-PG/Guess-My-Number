'use strict';

//---------------------------------------------QUERY SELECTORS
const bttn = document.querySelector('.bttn');
const agBttn = document.querySelector('.ag-bttn');
const numGuessed = document.querySelector('.number');
const mainContainer = document.querySelector('.main-container');
const statusB = document.querySelector('.status');
const guessBox = document.querySelector('.scnd-box__div');
const guess = document.querySelector('.thrd-box__input');
const life = document.querySelector('.life');
const highscore = document.querySelector('.highscore');
const tittle = document.querySelector('.tittle');

//---------------------------------------------INITIAL VALUE OF
let lifePoints = `❤❤❤❤❤`;
let points = 0;
agBttn.disabled = true;

statusB.textContent = `Lets Try! Guess it:`;
life.textContent = `💗life: ${lifePoints}`;
highscore.textContent = `🏅Highscore: ${points}`;

//---------------------------------------------FUNCTIONS
const secretNumber = function () {
  return Math.trunc(Math.random() * 10) + 1;
};

const gameOver = () => {
  bttn.disabled = true;
  tittle.textContent = `GAME OVER`;
  numGuessed.style.color = `white`;
  statusB.style.fontSize = `1.2rem`;
  statusB.textContent = `it was ${secNum}, (┬┬﹏┬┬)`;
  statusB.style.color = `white`;
  mainContainer.style.backgroundColor = `#48a9a6`;
  guessBox.classList.toggle('try');
  numGuessed.textContent = `Click here to try again`;
  numGuessed.addEventListener('click', () => {
    window.location.reload();
  });
};

const win = () => {
  numGuessed.textContent = `${secNum}`;
  mainContainer.classList.toggle('correct');
  statusB.textContent = `🎉 Correct Number`;
  agBttn.disabled = false;
  agBttn.style.outline = `2px dashed #223127`;
  bttn.disabled = true;
  points = points + lifePoints.length * 1.5;
  highscore.textContent = `🏅Highscore: ${points}`;
};

const fail = () => {
  lifePoints = lifePoints.split('');
  lifePoints.pop();
  lifePoints = lifePoints.join('');
  life.textContent = `💗life: ${lifePoints}`;
};

//---------------------------------------------INI
let secNum = secretNumber();

//---------------------------------------------AGAIN BUTTON
agBttn.addEventListener('click', err => {
  secNum = secretNumber();

  numGuessed.textContent = `?`;
  statusB.textContent = `Lets Try! Guess it: `; //could refactor ?
  mainContainer.classList.toggle('correct');
  agBttn.disabled = true;
  agBttn.style.outline = `none`;
  bttn.disabled = false;
  guess.value = '';

  const calcDifficult =
    points >= 10 ? (lifePoints = `❤❤❤`) : (lifePoints = `❤❤❤❤❤`);
  lifePoints = calcDifficult;

  life.textContent = `💗life: ${lifePoints}`;
});

//---------------------------------------------CHECK BUTTON
bttn.addEventListener('click', err => {
  const guessValue = parseInt(guess.value);
  if (guessValue && typeof guessValue === 'number') {
    if (guessValue === secNum) {
      win();
    } else if (guessValue > secNum) {
      statusB.textContent = `Too high! 📈`;
      fail();
      if (lifePoints.length === 0) {
        gameOver();
      }
    } else if (guessValue < secNum) {
      statusB.textContent = `Too low! 📉`;
      fail();
      if (lifePoints.length === 0) {
        gameOver();
      }
    }
  } else statusB.textContent = "⛔ That's not a number";
});
