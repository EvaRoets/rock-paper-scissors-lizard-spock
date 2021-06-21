// TODO register rock-paper-scissors buttons

//List const
//options
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock =document.getElementById("spock");
const playOptions = ["Rock", "Paper", "Scissors", "Spock", "Lizard"];

//player's choice
const playersChoice = document.getElementsByClassName("playerschoice");
console.log (playersChoice);

//computer's choice
const computerChoice = playOptions[Math.floor(Math.random() * playOptions.length)];
//console.log(computerChoice, playOptions[computerChoice]); // TODO can i replace array with reparate ids?

//computer's choice vs computer's choice
const computerPlayerChoice = playOptions[Math.floor(Math.random() * playOptions.length)];
//console.log(computerPlayerChoice, playOptions[computerPlayerChoice]);

//start function
function letPlay() {
}

playersChoice.addEventListener("click", );

// register click player/random computer choice
rock.addEventListener("click", function() {
    document.getElementById("paper").style.display="none";
    document.getElementById("scissors").style.display="none";
    document.getElementById("spock").style.display="none";
    document.getElementById("lizard").style.display="none";
});

paper.addEventListener("click", function() {
    document.getElementById("rock").style.display="none";
    document.getElementById("scissors").style.display="none";
    document.getElementById("spock").style.display="none";
    document.getElementById("lizard").style.display="none";
});

scissors.addEventListener("click", function() {
    document.getElementById("rock").style.display="none";
    document.getElementById("paper").style.display="none";
    document.getElementById("spock").style.display="none";
    document.getElementById("lizard").style.display="none";
});

lizard.addEventListener("click", function() {
    document.getElementById("rock").style.display="none";
    document.getElementById("paper").style.display="none";
    document.getElementById("scissors").style.display="none";
    document.getElementById("spock").style.display="none";
});

spock.addEventListener("click", function() {
    document.getElementById("rock").style.display="none";
    document.getElementById("paper").style.display="none";
    document.getElementById("scissors").style.display="none";
    document.getElementById("lizard").style.display="none";
});






// if else if else:Announce the winner through html message (no alert) = scoreboard?
// Result - switch

// It's a draw! Play again.
//ROCK
//You win, rock crushes scissors!
//You win, rock crushes lizard!
//You loose, paper covers rock!
//You loose, Spock vaporizes rock!
//PAPER
//You win, paper disproves Spock!
//You win, paper covers rock!
//You loose, scissors cuts paper!
//You loose, lizard eats paper!
//SCISSORS
//You win, scissors cuts paper!
//You win, scissors decapitate lizard!
//You loose, rock crushes scissors!
//You loose, Spock smashes scissors!
//SPOCK
//You win, Spock smashes scissors!
//You win, Spock vaporizes rock!
//You loose, lizard poisons spock!
//You loose, paper disproves Spock!
//LIZARD
//You win, lizard poisons spock!
//You win, lizard eats paper!
//You loose, scissors decapitate lizard!
//You loose, rock crushes lizard!


// TODO phase 2
// different end message styling depending on the outcome (remove/add classes in js) -- phase2
const playerScore = 0; //TODO update
const computerScore = 0;//TODO update
const displayPlayerScore = document.getElementById("playerscore");
const displayComputerScore = document.getElementById("computerscore");
const result = document.getElementById("result");

// play again button after game ended OK ---- > make it appear only after game
// clean code (html, css, js) - delete redundant code or out of date comments
// use functions to simplify code?
// make code more readable to other devs

// TODO nice to have
// highlight chosen button: OK ---> after choice, not only hover
// more player options (ex. high points, low chance)
// nog if statements (=> switch/case)
// make player win 75-100% of  games?