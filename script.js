
    // The algorithm of the game: 

// Create a variable for computer calculation 
let computerCalculation;


// computerChoice is created globally
let computerChoice;

// User input is defined globally, but has to be changeable (so the value is defined only within the loop)
let playerChoice;

//Track the wins
let computerVictories = 0;
let playerVictories = 0;


function winner(player, computer) {
// The computer randomly generates a number from 0 to 99
computerCalculation = Math.floor(Math.random() * 100);

// That number is then divided by 33; 0 to 33 is scissors, <33 to 66 is paper, and <66 to 99 is rock
 if (computerCalculation <= 33) {
    computerChoice = "scissors";
} else if (computerCalculation >33 && computerCalculation <=66){    
    computerChoice = "paper"; 
} else {
    computerChoice = "rock";
}

// the player is asked for the choice
// Player inputs 1 of the 3 options: Rock Paper or Scissors
    let playerInput = prompt("Choose Rock | Paper | Scissors", " ");
// The user choice is case-insensitive so the input is converted to lower case for consistency
playerChoice = playerInput.toLowerCase();

 // We then evaluate the computer choice against the user choice, and declare a winner of the round
    switch (playerChoice) {
        //case part 1: user chose scissors
        case "scissors":
            if (computerChoice === "rock") {
                ++computerVictories;
                console.log("You lost this round, the computer chose " + computerChoice);
                console.log("Your score is " + playerVictories + " while computer score is " + computerVictories);
            } else if (computerChoice === "paper") {
                ++playerVictories;
                console.log("You won this round!");
                console.log("The computer's choice was " + computerChoice);
                console.log("Your score is " + playerVictories + " while the computer score is " + computerVictories);
            } else {
                console.log("It's a draw!");
                console.log("Your score is " + playerVictories + " while the computer score is " + computerVictories);
            }
        break;

            //case part 2: user chose paper
        case "paper":
            if (computerChoice === "rock") {
                ++playerVictories;
                console.log("You won this round!");
                console.log("The computer's choice was " + computerChoice);
                console.log("Your score is " + playerVictories + " while the computer score is " + computerVictories);
            } else if (computerChoice === "paper") {
                console.log("It's a draw!");
                console.log("Your score is " + playerVictories + " while the computer score is " + computerVictories);
            } else {
                ++computerVictories;
                console.log("You lost this round, the computer chose " + computerChoice);
                console.log("Your score is " + playerVictories + " while computer score is " + computerVictories); 
            }
        break;
            //case part 3: user chose rock
            case "rock":
                if (computerChoice === "rock") {
                    console.log("It's a draw!");
                    console.log("Your score is " + playerVictories + " while the computer score is " + computerVictories);
                } else if (computerChoice === "paper") {
                    ++computerVictories;
                    console.log("You lost this round, the computer chose " + computerChoice);
                    console.log("Your score is " + playerVictories + " while computer score is " + computerVictories); 
                } else {
                    ++playerVictories;
                    console.log("You won this round!");
                    console.log("The computer's choice was " + computerChoice);
                    console.log("Your score is " + playerVictories + " while the computer score is " + computerVictories);
                }
            break;
    }
}



// The looped game must keep track of victories, and stop whenever 1 of the 2 players wins 5 times in a single game
while(computerVictories < 5 || playerVictories < 5) {
// if a player or computer wins, a victory message must be displayed
if (computerVictories === 5) {
    console.log("The computer won, you lost by " + (computerVictories - playerVictories) + " point(s)");
    break;
} else if (playerVictories === 5) {
    console.log("Congratulations!!! You won!!!! wooo")
    console.log("You were up by " + (playerVictories - computerVictories) + " point(s)! Well Done")
    break;
} else {
    winner(playerChoice, computerChoice);
}
}

