'use strict';

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorButton = document.querySelector('.scissor');
const userChoiceDisplay = document.querySelector('.user-choice');
const compChoiceDisplay = document.querySelector('.comp-choice');
const userScoreDisplay = document.querySelector('.user-score');
const compScoreDisplay = document.querySelector('.comp-score');
const userImg = document.querySelector('.user-img');
const compImg = document.querySelector('.comp-img');
const resetButton = document.querySelector('.reset-game');
const winner = document.querySelector('.result');
const modal = document.querySelector('.reset');
const overlay = document.querySelector('.overlay');
const gameWinner = document.querySelector('.win');


let userScore = 0;
let compScore = 0;
let rounds = 0;


//Computer Choice
function getCompChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


//Choices Display; start the game
function handleChoice(userChoice) {
    userChoiceDisplay.textContent = `You chose ${userChoice}`;
    const compChoice = getCompChoice();
    compChoiceDisplay.textContent = `Computer chose ${compChoice}`;

    //Show images of the user & comp choice
    userImg.src = `images/${userChoice}.png`;
    compImg.src = `images/${compChoice}.png`;
    
    //Start Game
    game(userChoice, compChoice)

    rounds++;

    if (userScore === 5 || compScore === 5) {
        showResultModal();
    }
}

function game(userChoice, compChoice) {
    if(userChoice === 'rock' && compChoice === 'paper'){
        winner.textContent = 'Computer Wins !'
        compScore += 1;
    } else if(userChoice === 'paper' && compChoice === 'scissors'){
        winner.textContent = 'Computer Wins !'
        compScore += 1;
    } else if(userChoice === 'scissors' && compChoice === 'rock'){
        winner.textContent = 'Computer Wins !'
        compScore += 1;
    } else if(userChoice === compChoice){
        winner.textContent = 'It\'s a Tie !'
    } else{
        winner.textContent = 'You Won !'
        userScore += 1;
    };

    //Display Scores
    userScoreDisplay.textContent = userScore;
    compScoreDisplay.textContent = compScore;
}


//Game over and result modal
const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

function showResultModal() {
    openModal();
    if(userScore > compScore){
        gameWinner.textContent = `Congratulations! You've Won this round!`;
    } else{
        gameWinner.textContent = `Game Over! Computer has Won this round!`;
    }
}

//reset game after 5 rounds
resetButton.addEventListener('click', function(){
    closeModal()
    userScore = 0;
    compScore = 0;
    rounds = 0;
    userScoreDisplay.textContent = userScore;
    compScoreDisplay.textContent = compScore;
    userChoiceDisplay.textContent = 'Your Choice: ';
    compChoiceDisplay.textContent = 'Computer Choice: ';
    winner.textContent = 'Winner ?';
    userImg.src = '';
    compImg.src = '';
})


//user choices event listeners
rockButton.addEventListener('click', function() {
    handleChoice('rock');
});

paperButton.addEventListener('click', function() {
    handleChoice('paper');
});

scissorButton.addEventListener('click', function() {
    handleChoice('scissors');
});


