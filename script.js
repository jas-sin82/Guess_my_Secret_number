'use strict';

// create a variable which will hold random number ;

let secretNumber = Math.trunc(Math.random() * 30) + 1;
const audioBody = document.querySelector("#myAudio-body");
const btnInstructions = document.querySelector(".instructions");
const modalBox = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeInstruction = document.querySelector(".close-modal");

// function to open instruction modal 
const openModal = function () {
  modalBox.classList.add("hidden-1");
  overlay.classList.remove("hidden");
}

// function to close instruction modal
const closeModal = function () {
  modalBox.classList.add("hidden");
  overlay.classList.add("hidden");
  modalBox.classList.remove("hidden-1");
}

// buttons to open and close  instruction modal
btnInstructions.addEventListener("click", openModal);
closeInstruction.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);


//  event listener function  to play and pause music
let audioBtn = document.querySelector(".audio-btn");
audioBtn.addEventListener("click", function () {
  if (audioBody.paused) {
    audioBody.play();
    audioBtn.textContent = "pause"
  } else {
    audioBody.pause();
    audioBtn.textContent = " Play"
  }
})

let score = 30;
let highScore = 0;

// event listener to check corect number or fail number
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = ' No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent =
      ' Correct Number';
    document.querySelector('.leaf').style.display = 'block';
    document.querySelector('#myAudio').play();
    document.querySelector('.winningMessage').textContent =
      'You won The Game !';
    audioBody.pause();
    audioBtn.textContent = " Play"
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number is High  ';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('#myAudio1').play();
    } else {
      document.querySelector('.message').textContent =
        ' U lost The Game ';
      document.querySelector('.score').textContent = '0';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number is Low';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('#myAudio2').play();
    } else {
      document.querySelector('.message').textContent =
        ' U lost The Game ';
      document.querySelector('.score').textContent = '0';
    }
  }
});

// to reset the game 
document.querySelector('.again').addEventListener('click', () => {
  score = 30;
  secretNumber = Math.trunc(Math.random() * 30) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.winningMessage').textContent = 'Guess My Number...';
  document.querySelector('.guess').value = '';
  document.querySelector('.leaf').style.display = 'none';
});
