
   // variable for computer calculation for the function
   let computerCalculation;

   // define computer choice globally
   let computerGeneratedChoice;

   //define user input globally clear
   let playerGeneratedChoice;

   // track the wins
   let computerVictories = 0;
   let playerVictories = 0;

   // defining DOM elements to modify in the functions 
   const displayContainer = document.querySelector(".displayContainer");
   const roundResultDisplay = document.querySelector(".roundResultDisplay");
   const choiceContainer = document.querySelector(".container");
       choiceContainer.addEventListener("click", winner);

   // Result display 
   const playerScore = document.querySelector(".playerScore");
   const computerScore = document.querySelector(".computerScore");
   const pointsToWin = document.querySelector(".pointsToWin");

   // Post Result Display
   const afterLoss = document.querySelector(".afterLoss");
   const afterWin = document.querySelector(".afterWin");
   const playAgain = document.querySelector(".playAgain");

    function winner(e) {
       playerChoice = e.target.id;
       computerChoiceGenerator();
       // evaluate comp choice vs user choice 
       if (playerChoice === computerChoice) {
           roundResultDisplay.textContent = "You chose " + playerChoice + " while the computer also chose " + computerChoice + " it's a draw this round!"
           //add a score display
           displayContainer.appendChild(roundResultDisplay);
       }
       switch (playerChoice) {
           case "scissors":
               if (computerChoice === "rock") {
                   ++computerVictories;
                   victoryDisplay();
                   revealChoices();
               } else if (computerChoice === "paper") {
                   ++playerVictories;
                   victoryDisplay();
                   revealChoices();
               } 
               break;
           
           //part 2: user chose paper
           case "paper":
               if (computerChoice === "rock") {
                   ++playerVictories;
                   victoryDisplay();
                   revealChoices();
               } else if (computerChoice === "scissors") {
                   ++computerVictories;
                   victoryDisplay();
                   revealChoices();
               }
               break;
           
           //part 3: user chose rock
           case "rock":
               if (computerChoice === "paper") {
                   ++computerVictories
                   victoryDisplay();
                   revealChoices();
               } else if (computerChoice === "scissors") {
                   ++playerVictories;
                   revealChoices();
               }
       }
       scoreCounter();
   }


   function scoreCounter() {
       //if a player or computer wins, a victory message is displayed
       if (computerVictories === 5) {
           clearGame();
           afterLoss.textContent = "You lost this game by " + (computerVictories - playerVictories) + " points. Don't worry, you can try again."
           playAgain.textContent = "Play Again?"
       } else if (playerVictories === 5) {
           clearGame();
           afterWin.textContent = "YOU WON! You were up by " + (playerVictories - computerVictories) + " points. Well done!"
           playAgain.textContent = "Play Again?"
       } 
   } 


   function computerChoiceGenerator() {
       // Random number between 0 and 99 
       computerCalculation = Math.floor(Math.random() * 100);

       //divide number into 3 parts, to feign a computer choice
       if (computerCalculation <= 33) {
       computerChoice = "scissors";
       } else if (computerCalculation >33 && computerCalculation <=66){    
       computerChoice = "paper"; 
       } else {
       computerChoice = "rock";
       }
   }
   
   function victoryDisplay() {
       computerScore.textContent = "The computer has " + computerVictories + " points.";
       playerScore.textContent = "You have " + playerVictories + " points.";
       pointsToWin.textContent = "You need just " + (5 - playerVictories) + " more points to win!";
   }

   function revealChoices() {
       roundResultDisplay.textContent = "You chose " +playerChoice + " while the computer chose " + computerChoice + ".";
   }

   //upon gameOver, clear games for another match
   function clearGame() {
       playerScore.textContent = '';
       computerScore.textContent = '';
       pointsToWin.textContent = '';
   }
   
   //play again reset function 
   playAgain.addEventListener("click", restartGame);

   function restartGame() { 
       playerVictories = 0;
       computerVictories = 0;
       afterLoss.textContent = '';
       afterWin.textContent = '';
       playAgain.textContent = '';
   }

