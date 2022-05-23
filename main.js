//GAME LOGIC

let userScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        feedbackMsg.textContent = `It's a tie!`;
        explanation.textContent = `${computerSelection.charAt(0).toUpperCase()}${computerSelection.slice(1)} ties with ${playerSelection}.`;

    }
    if (playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        feedbackMsg.textContent = `You lose!`;
        explanation.textContent = `${computerSelection.charAt(0).toUpperCase()}${computerSelection.slice(1)} beats ${playerSelection}.`;
    }
    if (computerSelection === "rock" && playerSelection === "paper" ||
        computerSelection === "paper" && playerSelection === "scissors" ||
        computerSelection === "scissors" && playerSelection === "rock") {
        userScore++;
        feedbackMsg.textContent = `You win!`;
        explanation.textContent = `${playerSelection.charAt(0).toUpperCase()}${playerSelection.slice(1)} beats ${computerSelection}.`;
    }

}

function computerPlay() {
    //create a variable that stores a random number
    let randomIndex = Math.floor(Math.random() * 3);
    //create an array that colds rock, paper, and scissors
    let weapon = ["rock", "paper", "scissors"];
    //return the item at array[random] index
    return weapon[randomIndex];
}

function updateScore(e, computerSelection) {

    //for the player
    playerChoice.remove();
    playerQuestionMark.remove();
    playerScore.textContent = `Player: ${userScore}`;
    playerChoice.src = `./images/${e.target.classList.value}.png`;
    playerScore.before(playerChoice);

    //for the computer
    compChoice.remove();
    compQuestionMark.remove();
    compScore.textContent = `Computer: ${computerScore}`;
    compChoice.src = `./images/${computerSelection}.png`;
    compScore.before(compChoice);
}

function reset() {
    userScore = 0;
    computerScore = 0;
    playerChoice.remove();
    playerScore.before(playerQuestionMark);
    playerScore.textContent = `Player: ${userScore}`;


    compChoice.remove();
    compScore.before(compQuestionMark);
    compScore.textContent = `Computer: ${computerScore}`;

    feedbackMsg.textContent = "Choose your weapon";
    explanation.textContent = "First to score 5 points wins the game";

}

function openModal() {
    modal.classList.add('show');
    modalContent.classList.add('show');

    if (computerScore > userScore) {
        result.textContent = "You lost...";
    } else {
        result.textContent = "You won!";
    }

    tryAgainBtn.addEventListener('click', () => {
        closeModal();
        reset();
        mainFunc();
    });
}

function closeModal() {
    modal.classList.remove('show');
    modalContent.classList.remove('show');
}

function outsideClick(e) {
    if (e.target == modal) {
        closeModal();
        reset();
        mainFunc();
    }
}

//----------------------------------------------------------------//
//USER INTERFACE

function mainFunc(e) {
    let playerSelection = (e.target.classList.value);
    let computerSelection = computerPlay();

    playRound(playerSelection, computerSelection);
    updateScore(e, computerSelection);

    //show result when either player gets to 5 first
    if (userScore > 4 || computerScore > 4) {
        openModal();
    }
}

//get all buttons and add click event listeners to them
const optionBtn = document.querySelectorAll('div .buttons input');
optionBtn.forEach(input => {
    input.addEventListener('click', mainFunc);
});

//deal with player's score block
const playerQuestionMark = document.getElementById('playerChoice');
const playerChoice = document.createElement('img');
const playerScore = document.getElementById('playerScore');

//deal with computer's score block
const compQuestionMark = document.getElementById('computerChoice');
const compChoice = document.createElement('img');
const compScore = document.getElementById('computerScore');

const feedbackMsg = document.querySelector('.message h1');
const explanation = document.querySelector('.message h3');

//Get modal element
const modal = document.getElementById('simpleModal');
const modalContent = document.querySelector('.modal-content');

//Get close button element
const tryAgainBtn = document.querySelector('.tryAgainBtn');

//get result element
const result = document.querySelector('.result');

window.addEventListener('click', outsideClick);