// Create function computerPlay
// Computer will choose a random number between 0-2 that will correspond
// to Rock, Paper, or Scissors. This will then be assigned to a string.


function computerPlay() {
    let randNum = Math.floor(Math.random()*3);
    let computerSelection;

    if (randNum === 0) {
        computerSelection = 'rock';
    }
    else if (randNum === 1) {
        computerSelection = 'paper';
    }
    else if (randNum === 2) {
        computerSelection = 'scissors';
    }
    return computerSelection
}

// playRound will take playerSelection as input, generate the computer's choice, and return a message delcaring the winner

function playRound(playerSelection) {
    const computerSelection = computerPlay();
    playerSelection = playerSelection.toLowerCase();
    let winnerMsg
    let winner

    //There are 9 possible outcomes for Rock, Paper, Scissors. Nested if statements should do the trick.
    //Consider updating this at some point with logic that recognizes the heirarchy of rock, paper and scissors.
    //How could this expand more easily to include logic for more options?

    if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') {
            winnerMsg = 'You win! Rock beats scissors.';
            winner = 'player';
        }
        else if (computerSelection == 'paper') {
            winnerMsg = 'You lose! Paper beats rock.';
            winner = 'computer';
        }
        else if (computerSelection == 'rock'){
            winnerMsg = 'Tie! You both picked rock.';
            winner = 'tie';
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            winnerMsg = 'You lose! Scissors beats paper.';
            winner = 'computer';
        }
        else if (computerSelection == 'paper') {
            winnerMsg = 'Tie! You both picked paper.';
            winner = 'tie';
        }
        else if (computerSelection == 'rock'){
            winnerMsg = 'You win! Paper beats rock.';
            winner = 'player';
        }
    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'scissors') {
            winnerMsg = 'Tie! You both picked scissors.';
            winner = 'tie';
        }
        else if (computerSelection == 'paper') {
            winnerMsg = 'You win! Scissors beats paper';
            winner = 'player';
        }
        else if (computerSelection == 'rock'){
            winnerMsg = 'You lose! Rock beats scissors';
            winner = 'computer';
        }
    }
    else {
        console.log("Please use 'Rock', 'Paper', or 'Scissor'");
    }
    console.log(winnerMsg);
    return winner

}

// game() function will start a new, 5-round game
// it will prompt user for their choice, and call playRound() with the answer
// scores will be tallied and a message displayed at the end, declaring a winner and final score

function game() {
    let playerScore = 0;
    let computerScore = 0;
    console.log("Best out of 5!");
    for (let i = 0; i < 5; i++) {
        let choice = prompt('Rock, paper, or scissors?');
        let winner = playRound(choice);
        if (winner === 'player') {
            playerScore++;
        }
        else if (winner === 'computer') {
            computerScore++;
        }
        console.log(`score: ${playerScore} to ${computerScore}`);
     }

    if (playerScore > computerScore) {
        alert(`You WIN!! ${playerScore} to ${computerScore}`);
    }
    else if (playerScore < computerScore) {
        alert(`You lose :( ${playerScore} to ${computerScore}`);
    }
    else {
        alert(`TIE! ${playerScore} to ${computerScore}`);
    }
}
    
