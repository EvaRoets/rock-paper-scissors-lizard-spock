// TODO register rock-paper-scissors buttons
document.getElementById("rock").addEventListener("click", function() {
    document.getElementById("paper").style.display="none";
    document.getElementById("scissors").style.display="none";
    document.getElementById("spock").style.display="none";
    document.getElementById("lizard").style.display="none";
});

document.getElementById("paper").addEventListener("click", function() {
    document.getElementById("rock").style.display="none";
    document.getElementById("scissors").style.display="none";
    document.getElementById("spock").style.display="none";
    document.getElementById("lizard").style.display="none";
});

document.getElementById("scissors").addEventListener("click", function() {
    document.getElementById("rock").style.display="none";
    document.getElementById("paper").style.display="none";
    document.getElementById("spock").style.display="none";
    document.getElementById("lizard").style.display="none";
});

document.getElementById("spock").addEventListener("click", function() {
    document.getElementById("rock").style.display="none";
    document.getElementById("paper").style.display="none";
    document.getElementById("scissors").style.display="none";
    document.getElementById("lizard").style.display="none";
});

document.getElementById("lizatd").addEventListener("click", function() {
    document.getElementById("rock").style.display="none";
    document.getElementById("paper").style.display="none";
    document.getElementById("scissors").style.display="none";
    document.getElementById("spock").style.display="none";
});

const playersChoice = document.getElementById("").value;
console.log (playersChoice);



    document.getElementById("selectRock").addEventListener("click", function () {
        userClicked(0)
        document.getElementById("selectPaper").style.display="none";
        document.getElementById("selectScissors").style.display="none";
    });
    document.getElementById("selectPaper").addEventListener("click", function () {
        userClicked( 1)
        document.getElementById("selectRock").style.display="none";
        document.getElementById("selectScissors").style.display="none";
    });
    document.getElementById("selectScissors").addEventListener("click", function () {
        userClicked(2)
        document.getElementById("selectRock").style.display="none";
        document.getElementById("selectPaper").style.display="none";
    });





// make compute choose random playoption
const playOptions = ["Rock", "Paper", "Scissors", "Spock", "Lizard"]
const computerChoice = playOptions[Math.floor(Math.random() * playOptions.length)];
console.log(computerChoice, playOptions[computerChoice]);
// register click random computer choice




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
// play again button after game ended OK ---- > make it appear only after game
// clean code (html, css, js) - delete redundant code or out of date comments
// use functions to simplify code?
// make code more readable to other devs

// TODO nice to have
// highlight chosen button: OK ---> after choice, not only hover
// more player options (ex. high points, low chance)
// nog if statements (=> switch/case)
// make player win 75-100% of  games?