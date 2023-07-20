// Get computer choice function

function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissor"];
    let number = Math.floor(Math.random() * choice.length);
    return choice[number];
}
// Write a function to play a single round of the game
// Get the player's selection, case-insesitive
// Get computer's selection
// Return a string with "You loose!" or "You win!"
// Write a function to loop the game for 5 times