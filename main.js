function computerPlay() {
    //create a variable that stores a random number
    let randomIndex = Math.floor(Math.random() * 3);
    //create an array that colds rock, paper, and scissors
    let weapon = ["rock", "paper", "scissors"];
    //return the item at array[random] index
    return weapon[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    //convert playerSelection to all lowercase
    playerLowerCase = playerSelection.toLowerCase();
    //if player and computer are the same, neither gets a score
    if (playerLowerCase === computerSelection) {
        return "Tie!";
        //if computer beats player
    } else if (playerLowerCase === "rock" && computerSelection === "paper" ||
        playerLowerCase === "paper" && computerSelection === "scissors" ||
        playerLowerCase === "scissors" && computerSelection === "rock") {
        compScore += 1;
        return "You lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerLowerCase + ".";
    } else {
        userScore += 1;
        return "pretty gud, chump";
    }
}

function game() {
    //play 5 rounds (loop 5 times)
    while (rounds > 0) {
        //ask user for input (use prompt())
        playerSelection = prompt("Which weapon do you want to play?");
        //run playRound using user input
        console.log(playRound(playerSelection, computerSelection));
        rounds--;
    }
    //compare scores and output the winner
    if (userScore > compScore) {
        console.log("You win!! You beat the computer!");
    } else if (compScore > userScore) {
        console.log("You're a loser. You really suck. A machine beat you.")
    } else {
        console.log("Well dang! Pretty good, that was a tie.")
    }
}

const computerSelection = computerPlay();
let playerSelection = "";
let userScore = 0;
let compScore = 0;
let rounds = 5;

game();