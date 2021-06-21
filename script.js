//options
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock =document.getElementById("spock");

/ player's choice
const playerChoice = document.getElementsByClassName("playerchoice");
console.log (playerChoice);

/ computer's choice
function computerChoice () {
    const playOptions = ["rock", "paper", "scissors", "spock", "lizard"]; // 4 indices, 5 length
    const computerChoice = playOptions[Math.floor(Math.random() * playOptions.length)];
    return playOptions[computerChoice];
}
console.log(computerChoice());

/ computer vs computer
function computervscomputerChoice () {
    const computervscomputerChoice = playOptions[Math.floor(Math.random() * playOptions.length)];
    return playOptions[computervscomputerChoice];
}
console.log(computervscomputerChoice());

// register click player/random computer choice
letsPlay();
function letsPlay(){ //=main

    function clickCapture (playerChoice) {
        const computerChoice = computerChoice();
    }


    rock.addEventListener("click", function() {
        paper.style.display="none";
        scissors.style.display="none";
        spock.style.display="none";
        lizard.style.display="none";
        computerChoice.style.display="none";
        clickCapture ("rock");
        console.log("You clicked rock");

    });

    paper.addEventListener("click", function() {
        rock.style.display="none";
        scissors.style.display="none";
        spock.style.display="none";
        lizard.style.display="none";
        computerChoice.style.display="none";
        clickCapture ("paper");
        console.log("You clicked paper");
    });

    scissors.addEventListener("click", function() {
        rock.style.display="none";
        paper.style.display="none";
        spock.style.display="none";
        lizard.style.display="none";
        computerChoice.style.display="none";
        clickCapture ("scissors");
        console.log("You clicked scissors");
    });

    lizard.addEventListener("click", function() {
        rock.style.display="none";
        paper.style.display="none";
        scissors.style.display="none";
        spock.style.display="none";
        computerChoice.style.display="none";
        clickCapture ("lizard");
        console.log("You clicked lizard");
    });

    spock.addEventListener("click", function() {
        rock.style.display="none";
        paper.style.display="none";
        scissors.style.display="none";
        lizard.style.display="none";
        computerChoice.style.display="none";7
        clickCapture ("spock");
        console.log("You clicked spock");
    });

    computerChoice.addEventListener("click", function() {
        rock.style.display="none";
        paper.style.display="none";
        scissors.style.display="none";
        spock.style.display="none";
        lizard.style.display="none";
        clickCapture (computerChoice())
        console.log("You let the computer fight you battle");
    });


}


function result() {
    const result = document.getElementById("result");

    if (playerChoice === computerChoice) {
        result.style.display="inline";
        result.innerHTML = `It's a draw! Play again.`;
    }
    else if (playerChoice === 0 && computerChoice === 2) {
        result.style.display="inline";
        result.innerHTML = `You win`;
        playerScore++;
    }


    else if (playerChoice === 2 && computerChoice === 0) {
        result.style.display="inline";
        document.getElementById("result").innerHTML = `Computer wins`;
        computerScore++;
    }
    else if (playerChoice < randomIcon) {
        result.style.display="inline";
        document.getElementById("result").innerHTML = `Computer wins`;
        computerScore++;
    }
    else {
        result.style.display="inline";
        document.getElementById("result").innerHTML = `You win`
        userScore++;
    }
    document.getElementById("playAgain").style.display="inline";
}
}



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


// play again button after game ended OK ---- > make it appear only after game
// clean code (html, css, js) - delete redundant code or out of date comments
// use functions to simplify code?
// make code more readable to other devs

// TODO nice to have
// highlight chosen button: OK ---> after choice, not only hover
// more player options (ex. high points, low chance)
// nog if statements (=> switch/case)
// make player win 75-100% of  games?