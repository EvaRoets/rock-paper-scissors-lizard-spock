//player can push button
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const Spock = document.getElementById("spock");

//computer makes random choice
let play = document.getElementById("play");

const result = result;

// when player pushes play
play.addEventListener("click", function () {
    const playOptions = ["rock", "paper", "scissors", "spock", "lizard"]; // 4 indices, 5 length
    let randomChoice = playOptions[Math.floor(Math.random() * playOptions.length)]
    //console.log(randomChoice)
})

// when player pushes button
function getPlayerChoice() {
    rock.addEventListener("click", function () {
        clickCapture("rock");
        paper.style.display = "none";
        scissors.style.display = "none";
        spock.style.display = "none";
        lizard.style.display = "none";
        pcVsPc.style.display = "none";
        //console.log("You clicked rock");
    });
    paper.addEventListener("click", function () {
        clickCapture("paper");
        rock.style.display = "none";
        scissors.style.display = "none";
        spock.style.display = "none";
        lizard.style.display = "none";
        pcVsPc.style.display = "none";
        //console.log("You clicked paper");
    });
    scissors.addEventListener("click", function () {
        clickCapture("scissors");
        rock.style.display = "none";
        paper.style.display = "none";
        spock.style.display = "none";
        lizard.style.display = "none";
        pcVsPc.style.display = "none";
        //console.log("You clicked scissors");
    });
    lizard.addEventListener("click", function () {
        clickCapture("lizard");
        rock.style.display = "none";
        paper.style.display = "none";
        scissors.style.display = "none";
        spock.style.display = "none";
        pcVsPc.style.display = "none";
        //console.log("You clicked lizard");
    });
    spock.addEventListener("click", function () {
        clickCapture("spock");
        rock.style.display = "none";
        paper.style.display = "none";
        scissors.style.display = "none";
        lizard.style.display = "none";
        pcVsPc.style.display = "none";
        //console.log("You clicked spock");
    });
    //change displayed name pcVsPc to "Computer fights computer" + delay of result?
    // pcVsPc.addEventListener("click", function () {
    //     clickCapture("pcVsPc");
    //     rock.style.display = "none";
    //     paper.style.display = "none";
    //     scissors.style.display = "none";
    //     spock.style.display = "none";
    //     lizard.style.display = "none";
    //     console.log("You let the computer fight you battle");
    // });
}

//possible outcomes
if (playerChoice === computerChoice) {
result.style.display = "inline";
result.innerHTML = "It's a draw! Play again to collect more points.";
}
//YOU WIN
//ROCK
else if (playerChoice === rock && computerChoice === scissors) {
result.innerHTML = `You win, rock crushes scissors!`; //replace with string literals
playerScore++;
}
else if (playerChoice === rock && computerChoice === lizard) {
result.innerHTML = `You win, rock crushes lizard!`; //replace with string literals
    playerScore++;

//PAPER
}
else if (playerChoice === paper && computerChoice === Spock) {
result.innerHTML = `You win, paper disproves Spock!`; //replace with string literals
    playerScore++;
}
else if (playerChoice === paper && computerChoice === rock) {
result.innerHTML = `You win, paper covers rock!`; //replace with string literals
    playerScore++;

//SCISSORS
}
else if (playerChoice === scissors && computerChoice === paper) {
result.innerHTML = `You win, scissors cuts paper!`; //replace with string literals
    playerScore++;
}
else if (playerChoice === scissors && computerChoice === lizard) {
result.innerHTML = `You win, scissors decapitate lizard!`; //replace with string literals
    playerScore++;

//SPOCK
}
else if (playerChoice === Spock && computerChoice === scissors) {
result.innerHTML = `You win, Spock smashes scissors!`; //replace with string literals
    playerScore++;
}
else if (playerChoice === Spock && computerChoice === rock) {
result.innerHTML = `You win, Spock vaporizes rock!`; //replace with string literals
    playerScore++;

//LIZARD
}
else if (playerChoice === lizard && computerChoice === Spock) {
    result.innerHTML = `You win, lizard poisons Spock!`; //replace with string literals
    playerScore++;
}
else if (playerChoice === lizard && computerChoice === paper) {
        result.innerHTML = `You win, lizard eats paper!`; //replace with string literals
    playerScore++;
}
//YOU LOOSE
//ROCK
else if (playerChoice === rock && computerChoice === paper) {
    result.innerHTML = `You loose, paper covers rock!`; //replace with string literals
    computerScore++;
}
else if (playerChoice === rock && computerChoice === Spock) {
    result.innerHTML = `You loose, Spock vaporizes rock!`; //replace with string literals
    computerScore++;
//PAPER
}
else if (playerChoice === paper && computerChoice === scissors) {
    result.innerHTML = `You loose, scissors cuts paper!`; //replace with string literals
    computerScore++;
}
else if (playerChoice === paper && computerChoice === lizard) {
    result.innerHTML = `You loose, lizard eats paper!`; //replace with string literals
    computerScore++;
// SCISSORS
}
else if (playerChoice === scissors && computerChoice === rock) {
    result.innerHTML = `You loose, rock crushes scissors!`; //replace with string literals
    computerScore++;
}
else if (playerChoice === scissors && computerChoice === Spock) {
    result.innerHTML = `You loose, Spock smashes scissors!`; //replace with string literals
    computerScore++;
// SPOCK
}
else if (playerChoice === Spock && computerChoice === lizard) {
    result.innerHTML = `You loose, lizard poisons Spock!`; //replace with string literals
    computerScore++;
}
else if (playerChoice === Spock && computerChoice === paper) {
    result.innerHTML = `You loose, paper disproves Spock!`; //replace with string literals
    computerScore++;
// LIZARD
}
else if (playerChoice === lizard && computerChoice === scissors) {
    result.innerHTML = `You loose, scissors decapitate lizard!`; //replace with string literals
    computerScore++;
}
else if (playerChoice === lizard && computerChoice === rock) {
    result.innerHTML = `You loose, rock crushes lizard!`; //replace with string literals
    computerScore++;
}







//     document.getElementById("playAgain").style.display="inline";
// }
// }
//
//
//
//
//
// TODO phase 2
// different end message styling depending on the outcome (remove/add classes in js) -- phase2
// const playerScore = 0; //TODO update
// const computerScore = 0;//TODO update
// const displayPlayerScore = document.getElementById("playerscore");
// const displayComputerScore = document.getElementById("computerscore");
//
//
// play again button after game ended OK ---- > make it appear only after game
// clean code (html, css, js) - delete redundant code or out of date comments
// use functions to simplify code?
// make code more readable to other devs

// TODO nice to have
// highlight chosen button: OK ---> after choice, not only hover
// more player options (ex. high points, low chance)
// nog if statements (=> switch/case)
// make player win 75-100% of  games?

