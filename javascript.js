// Create function computerPlay
// Computer will choose a random number between 0-2 that will correspond
// to Rock, Paper, or Scissors. This will then be assigned to a string.

let computerSelection

function computerPlay() {
    let randNum = Math.floor(Math.random()*3);
    console.log(randNum);

    if (randNum === 0) {
        computerSelection = 'Rock';
    }
    else if (randNum === 1) {
        computerSelection = 'Paper';
    }
    else if (randNum === 2) {
        computerSelection = 'Scissors';
    }
    console.log(computerSelection);
}