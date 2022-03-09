let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const compPlay = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * compPlay.length);
  
    return compPlay[randomIndex];
  }

  let input = prompt('rock, paper, or scissors');
  let playerSelection = input.toLowerCase();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'It\'s a tie, play again.'; 
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')) {
        playerScore++;
        return 'You win!';
    }
    else {
        computerScore++;
        return 'You lose.';
    }
} 

function game() {
    for (let i = 1; i < 6; i++) {
        return 'Round ' + i;
    }
};



console.log(playerSelection);
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));console.log(game());
console.log(playerScore);
console.log(computerScore);