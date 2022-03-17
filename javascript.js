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
    let winnerMsg = '';

    //There are 9 possible outcomes for Rock, Paper, Scissors. Nested if statements should do the trick.
    //Consider updating this at some point with logic that recognizes the heirarchy of rock, paper and scissors.
    //How could this expand more easily to include logic for more options?

    if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') {
            winnerMsg = 'You win! Rock beats scissors.';
        }
        else if (computerSelection == 'paper') {
            winnerMsg = 'You lose! Paper beats rock.';
        }
        else if (computerSelection == 'rock'){
            winnerMsg = 'Tie! You both picked rock.';
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            winnerMsg = 'You lose! Scissors beats paper.';
        }
        else if (computerSelection == 'paper') {
            winnerMsg = 'Tie! You both picked paper.';
        }
        else if (computerSelection == 'rock'){
            winnerMsg = 'You win! Paper beats rock.';
        }
    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'scissors') {
            winnerMsg = 'Tie! You both picked scissors.';
        }
        else if (computerSelection == 'paper') {
            winnerMsg = 'You win! Scissors beats paper';
        }
        else if (computerSelection == 'rock'){
            winnerMsg = 'You lose! Rock beats scissors';
        }
    }
    else {
        console.log("Please use 'Rock', 'Paper', or 'Scissor'");
    }
    return winnerMsg

}