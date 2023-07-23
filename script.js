function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let number = Math.floor(Math.random() * choice.length);
    return choice[number];
}

function getPlayerChoice() {
    let choice = prompt("Rock, Paper or Scissors").toLowerCase();
    return choice;
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats Rock.";
    } else if (playerSelection == "rock"  && computerSelection == "scissors") {
        return "You win! Rock beats Scissors.";
    } else if (playerSelection == "paper"  && computerSelection == "rock") {
        return "You win! Paper beats Rock.";
    } else if (playerSelection == "paper"  && computerSelection == "scissors") {
        return "You lose! Scissors beats Paper.";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! Rock beats Scissors.";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Schissors beats paper";
    } else if (playerSelection == "rock" 
            || playerSelection == "paper" 
            || playerSelection == "scissors") {
        return `It's a draw! ${playerSelection} can't beat ${computerSelection}`;
    } else {
        return `Try again! ${playerSelection} it's not rock, paper or scissors.`;
    }
}
    let playerSelection = "rock";
    let computerSelection = getComputerChoice();
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }
}