//**VARIABLES**
// const gameButtons = document.getElementsByClassName("gameButtons")
const rock = document.getElementById("rock"); //player buttons
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const Spock = document.getElementById("Spock");
const play = document.getElementById("play");
const result = document.getElementById("result");
const gameOptions = ["rock", "paper", "scissors", "Spock", "lizard"]; //

let playerScore = 0;
let computerScore = 0;

//**EVENTS**
// when player pushes button, make other buttons disappear
rock.addEventListener("click", function () {
    paper.style.display = "none";
    scissors.style.display = "none";
    Spock.style.display = "none";
    lizard.style.display = "none";
    //console.log("You clicked rock");
});
paper.addEventListener("click", function () {
    rock.style.display = "none";
    scissors.style.display = "none";
    Spock.style.display = "none";
    lizard.style.display = "none";
    //console.log("You clicked paper");
});
scissors.addEventListener("click", function () {
    rock.style.display = "none";
    paper.style.display = "none";
    Spock.style.display = "none";
    lizard.style.display = "none";
    //pcVsPc.style.display = "none";
    //console.log("You clicked scissors");
});
lizard.addEventListener("click", function () {
    rock.style.display = "none";
    paper.style.display = "none";
    scissors.style.display = "none";
    Spock.style.display = "none";
    //console.log("You clicked lizard");
});
Spock.addEventListener("click", function () {
    rock.style.display = "none";
    paper.style.display = "none";
    scissors.style.display = "none";
    lizard.style.display = "none";
    //console.log("You clicked Spock");
});

// when player pushes play
play.addEventListener("click", function () {
    let computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)]
    //console.log(computerChoice)
})

//
// playerwins();
// computerwins();
// draw();
// result.style.display = "inline";
// result.innerHTML = "It's a draw! Play again to collect more points.";


// console.log("player chooses" + playerChoice)
// console.log("computer chooses" + computerChoice)

//possible outcomes
//YOU DRAW
switch (playerChoice + computerChoice) {
    case "rockrock":
        console.log('draw');

    case "paperpaper":
        console.log('draw');

    case "scissorsscisors":
        console.log('draw');

    case "SpockSpock":
        console.log('draw');

    case "lizardlizard":
        // draw();
        console.log('draw')
        break;
    // case ("rockscissors")
        ;

}

//YOU WIN
//ROCK
else
if (playerChoice === rock) {
    if (computerChoice === scissors) {
        result.innerHTML = `You win, rock crushes scissors!`; //replace with string literals
        playerScore++;
    }
} else if (playerChoice === rock) {
    if (computerChoice === lizard) {
        result.innerHTML = `You win, rock crushes lizard!`; //replace with string literals
        playerScore++;
    }
}
//PAPER
else if (playerChoice === paper) {
    if (computerChoice === Spock) {
        result.innerHTML = `You win, paper disproves Spock!`; //replace with string literals
        playerScore++;
    }
} else if (playerChoice === paper) {
    if (computerChoice === rock) {
        result.innerHTML = `You win, paper covers rock!`; //replace with string literals
        playerScore++;
    }
}

//SCISSORS
else if (playerChoice === scissors) {
    if (computerChoice === paper) {
        result.innerHTML = `You win, scissors cuts paper!`; //replace with string literals
        playerScore++;
    }
} else if (playerChoice === scissors) {
    if (computerChoice === lizard) {
        result.innerHTML = `You win, scissors decapitate lizard!`; //replace with string literals
        playerScore++;
    }
}

//Spock
else if (playerChoice === Spock) {
    if (computerChoice === scissors) {
        result.innerHTML = `You win, Spock smashes scissors!`; //replace with string literals
        playerScore++;
    }
} else if (playerChoice === Spock) {
    if (computerChoice === rock) {
        result.innerHTML = `You win, Spock vaporizes rock!`; //replace with string literals
        playerScore++;
    }
}

//LIZARD
else if (playerChoice === lizard) {
    if (computerChoice === Spock) {
        result.innerHTML = `You win, lizard poisons Spock!`; //replace with string literals
        playerScore++;
    }
} else if (playerChoice === lizard) {
    if (computerChoice === paper) {
        result.innerHTML = `You win, lizard eats paper!`; //replace with string literals
        playerScore++;
    }
}

    //YOU LOOSE
//ROCK
else if (playerChoice === rock) {
    if (computerChoice === paper) {
        result.innerHTML = `You loose, paper covers rock!`; //replace with string literals
        computerScore++;
    }
} else if (playerChoice === rock && computerChoice === Spock) {
    result.innerHTML = `You loose, Spock vaporizes rock!`; //replace with string literals
    computerScore++;
}

//PAPER
else if (playerChoice === paper) {
    if (computerChoice === scissors) {
        result.innerHTML = `You loose, scissors cuts paper!`; //replace with string literals
        computerScore++;
    }
} else if (playerChoice === paper) {
    if (computerChoice === lizard) {
        result.innerHTML = `You loose, lizard eats paper!`; //replace with string literals
        computerScore++;
    }
}

// SCISSORS
else if (playerChoice === scissors) {
    if (computerChoice === rock) {
        result.innerHTML = `You loose, rock crushes scissors!`; //replace with string literals
        computerScore++;
    }
} else if (playerChoice === scissors) {
    if (computerChoice === Spock) {
        result.innerHTML = `You loose, Spock smashes scissors!`; //replace with string literals
        computerScore++;
    }
}

// Spock
else if (playerChoice === Spock) {
    if (computerChoice === lizard) {
        result.innerHTML = `You loose, lizard poisons Spock!`; //replace with string literals
        computerScore++;
    }
} else if (playerChoice === Spock) {
    if (computerChoice === paper) {
        result.innerHTML = `You loose, paper disproves Spock!`; //replace with string literals
        computerScore++;
    }
}

// LIZARD
else if (playerChoice === lizard) {
    if (computerChoice === scissors) {
        result.innerHTML = `You loose, scissors decapitate lizard!`; //replace with string literals
        computerScore++;
    }
} else if (playerChoice === lizard) {
    if (computerChoice === rock) {
        result.innerHTML = `You loose, rock crushes lizard!`; //replace with string literals
        computerScore++;
    }
}
}


//playAgain.innerHTML

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
// make player win 75-100% of games?

// letsPlay();

//let playAgain = document.getElementById("playAgain"); // make appear after game is played
// const displayPlayerScore = document.getElementById("playerscore");
// const displayComputerScore = document.getElementById("computerscore");



