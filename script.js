// Get the computer's selection - working
function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let number = Math.floor(Math.random() * choice.length);
    return choice[number];
};

/*let pScore = document.getElementById("playerScore").innerHTML;
let cScore = document.getElementById("computerScore").innerHTML;*/

//Set player score - not working
function setPlayerScore() {
    document.getElementById("playerScore").innerHTML = (parseInt(document.getElementById("playerScore").innerHTML)) + 1;
};

//Set computer score - not working
function setComputerScore(){
    document.getElementById("computerScore").innerHTML = (parseInt(document.getElementById("computerScore").innerHTML)) + 1;
};


let btns = document.querySelectorAll("button");


// Get the value of the pressed button - working
btns.forEach((btn) => {
    btn.addEventListener("click", function(e) {
        let playerSelection = e.target.value;
        let result = document.querySelector("#result")
        while (result.firstChild) {
            result.removeChild(result.firstChild);
        }
        let para = document.createElement("p");
        let text = document.createTextNode(playRound(playerSelection, getComputerChoice()));
        para.appendChild(text);
        result.appendChild(para);
    });
});


// PLay one round - working
function playRound(playerSelection, getComputerChoice) {
    
    if (playerSelection == "rock" && getComputerChoice == "paper") {
        setComputerScore();
        return "You lose! Paper beats Rock.";
    } else if (playerSelection == "rock"  && getComputerChoice == "scissors") {
        setPlayerScore();
        return "You win! Rock beats Scissors.";
    } else if (playerSelection == "paper"  && getComputerChoice == "rock") {
        setPlayerScore();
        return "You win! Paper beats Rock.";
    } else if (playerSelection == "paper"  && getComputerChoice == "scissors") {
        setComputerScore();
        return "You lose! Scissors beats Paper.";
    } else if (playerSelection == "scissors" && getComputerChoice == "rock") {
        setComputerScore();
        return "You lose! Rock beats Scissors.";
    } else if (playerSelection == "scissors" && getComputerChoice == "paper") {
        setPlayerScore();
        return "You win! Schissors beats paper";
    } else if (playerSelection == "rock" 
            || playerSelection == "paper" 
            || playerSelection == "scissors") {
        return `It's a draw! ${playerSelection} can't beat ${getComputerChoice}`;
    } else {
        return `Try again! ${playerSelection} it's not rock, paper or scissors.`;
    }
};



