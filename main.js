//GAME LOGIC

let userScore = 0;
let computerScore = 0;
let roundWinner = '';
let rounds = 5;

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        roundWinner = 'tie';
    }
    if (playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        //alert("You lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection + ".");
        roundWinner = 'computer';
    }
    if (computerSelection === "rock" && playerSelection === "paper" ||
        computerSelection === "paper" && playerSelection === "scissors" ||
        computerSelection === "scissors" && playerSelection === "rock") {
        userScore += 1;

        roundWinner = 'player';
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

//----------------------------------------------------------------//
//USER INTERFACE

function mainFunc(e) {
    let playerSelection = (e.target.classList.value);
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    updateScore(e, computerSelection);
}

const optionBtn = document.querySelectorAll('div .buttons input');

const playerQuestionMark = document.getElementById('playerChoice');
const playerChoice = document.createElement('img');
const playerScore = document.getElementById('playerScore');

const compQuestionMark = document.getElementById('computerChoice');
const compChoice = document.createElement('img');
const compScore = document.getElementById('computerScore');



optionBtn.forEach(input => { input.addEventListener('click', mainFunc); });