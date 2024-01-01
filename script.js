// Get the computer's selection - working
function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let number = Math.floor(Math.random() * choice.length);
    return choice[number];
};

document.addEventListener('DOMContentLoaded', function() {

let btns = document.querySelectorAll("button");

// Get the value of the pressed button - working
btns.forEach((btn) => {
    btn.addEventListener("click", function(e) {
        let playerSelection = e.target.value;
        console.log(playRound(playerSelection, getComputerChoice()));
        let result = document.querySelector("#result")
        let para = document.createElement("p");
        let text = document.createTextNode(playRound(playerSelection, getComputerChoice()));
        para.appendChild(text);
        result.appendChild(para);
    });
});


// PLay one round - not there yet
function playRound(playerSelection, getComputerChoice) {
    
    if (playerSelection == "rock" && getComputerChoice == "paper") {
        return "You lose! Paper beats Rock.";
    } else if (playerSelection == "rock"  && getComputerChoice == "scissors") {
        return "You win! Rock beats Scissors.";
    } else if (playerSelection == "paper"  && getComputerChoice == "rock") {
        return "You win! Paper beats Rock.";
    } else if (playerSelection == "paper"  && getComputerChoice == "scissors") {
        return "You lose! Scissors beats Paper.";
    } else if (playerSelection == "scissors" && getComputerChoice == "rock") {
        return "You lose! Rock beats Scissors.";
    } else if (playerSelection == "scissors" && getComputerChoice == "paper") {
        return "You win! Schissors beats paper";
    } else if (playerSelection == "rock" 
            || playerSelection == "paper" 
            || playerSelection == "scissors") {
        return `It's a draw! ${playerSelection} can't beat ${getComputerChoice}`;
    } else {
        return `Try again! ${playerSelection} it's not rock, paper or scissors.`;
    }
};
});



