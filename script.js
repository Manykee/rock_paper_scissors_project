// Get the computer's selection - working
function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let number = Math.floor(Math.random() * choice.length);
    return choice[number];
};


//Set player score - working
function setPlayerScore() {
    document.getElementById("playerScore").innerHTML = (parseInt(document.getElementById("playerScore").innerHTML)) + 1;
};

//Set computer score - working
function setComputerScore(){
    document.getElementById("computerScore").innerHTML = (parseInt(document.getElementById("computerScore").innerHTML)) + 1;
};


let btns = document.querySelectorAll(".btn");
let resetBtn = document.getElementById("resetBtn");

//Reset button press - working
resetBtn.addEventListener("click", resetBtnClicked);
function resetBtnClicked() {
    resetBtn.style.display = "none";
    btns.forEach((btn) => {
        btn.style.display = "inline";
        document.getElementById("playerScore").innerHTML = 0;
        document.getElementById("computerScore").innerHTML = 0;
    });
} 


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

//Show the reset button and hide the selection Buttons - working
function buttonToggle() {
    resetBtn.style.display = "block";
    btns.forEach((btn) => {
        btn.style.display = "none";
    });
};

// PLay one round - working
function playRound(playerSelection, getComputerChoice) {

    if (playerSelection == "rock" && getComputerChoice == "paper") {
        setComputerScore();
        if ((document.getElementById("computerScore").innerHTML) == 5) {
            buttonToggle();
            return "Computer Wins!";
        } else {
        return "You lose! Paper beats Rock."};
    } else if (playerSelection == "rock"  && getComputerChoice == "scissors") {
        setPlayerScore();
        if ((document.getElementById("playerScore").innerHTML) == 5) {
            buttonToggle();
            return "Player Wins!";
        } else {
        return "You win! Rock beats Scissors."};
    } else if (playerSelection == "paper"  && getComputerChoice == "rock") {
        setPlayerScore();
        if ((document.getElementById("playerScore").innerHTML) == 5) {
            buttonToggle();
            return "Player Wins!";
        } else {
        return "You win! Paper beats Rock."};
    } else if (playerSelection == "paper"  && getComputerChoice == "scissors") {
        setComputerScore();
        if ((document.getElementById("computerScore").innerHTML) == 5) {
            buttonToggle();
            return "Computer Wins!";
        } else {
        return "You lose! Scissors beats Paper."};
    } else if (playerSelection == "scissors" && getComputerChoice == "rock") {
        setComputerScore();
        if ((document.getElementById("computerScore").innerHTML) == 5) {
            buttonToggle();
            return "Computer Wins!";
        } else {
        return "You lose! Rock beats Scissors."};
    } else if (playerSelection == "scissors" && getComputerChoice == "paper") {
        setPlayerScore();
        if ((document.getElementById("playerScore").innerHTML) == 5) {
            buttonToggle();
            return "Player Wins!";
        } else {
        return "You win! Schissors beats paper"};
    } else if (playerSelection == "rock" 
            || playerSelection == "paper" 
            || playerSelection == "scissors") {
        return `It's a draw! ${playerSelection} can't beat ${getComputerChoice}`;
    } else {
        return `Try again! ${playerSelection} it's not rock, paper or scissors.`;
    }
};



