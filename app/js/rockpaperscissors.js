////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    //var move = `getInput()`;
    if (move == 7) {
        //do something
    }

    // return move || getInput;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    // var move = `randomPlay`;
    return move || randomPlay ();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.

        if (playerMove === computerMove) {
        winner = "tie";
    }else if (playerMove ==="rock" && computerMove ==="scissors") {
        console.log("rock" + "is a winner!");

    }else if (playerMove === "scissors" && computerMove === "paper") {
        console.log ("scissors" + "is a  winner!");

    }else if (playerMove === "paper" && computerMove === "rock") {
            console.log("paper" + "is a winner!");

    }else if (playerMove === "scissors" && computerMove === "rock") {
        console.log("computer" + "is a winer!");

    } else if (playerMove === "paper" && computerMove === "scissors") {
        console.log("player" + "is a winer");

    } else {
       winner = "You win!";
    }

    return winner;
}
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < 5 && computerWins < 5){
        var playerMove = getInput();
        var computerMove = randomPlay();
        var winner = getWinner (playerMove, computerMove);
        if (winner === "player") {
            console.log("player chose" + playerMove + " while computer chose" + computerMove + " player wins!");

        }else if (winner === "computer"){
            console.log("player chose" + playerMove + " while computer chose" + computerMove + " computer wins!");

        }
            computerWins ++;
        }
    return [playerWins, computerWins];
}
playToFive();
