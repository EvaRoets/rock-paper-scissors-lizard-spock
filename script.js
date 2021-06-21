//options
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock =document.getElementById("spock");
const pcVsPc =document.getElementById("pcVsPc");

// register clicks - declare function
// player's choice
function getPlayerChoice () {
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
    //TODO change displayed name pcVsPc to "Computer fights computer" + delay of result?
    pcVsPc.addEventListener("click", function () {
        clickCapture("pcVsPc");
        rock.style.display = "none";
        paper.style.display = "none";
        scissors.style.display = "none";
        spock.style.display = "none";
        lizard.style.display = "none";
        console.log("You let the computer fight you battle");
    });
}
//computer's choice
function getComputerChoice() {
    const playOptions = ["rock", "paper", "scissors", "spock", "lizard"]; // 4 indices, 5 length
    const randomChoice = [Math.floor(Math.random() * playOptions.length)];
    return playOptions[randomChoice];
}
//store clicks
function clickCapture (playerChoice) {
    const computerChoice = getComputerChoice();
    console.log("You choose " + playerChoice);
    console.log("The computer choose " + computerChoice);
}
//call function
getPlayerChoice ();

//compare scores - declare function
function getResult() {
    const result = document.getElementById("result");
    // if -else OR switch?
    if (playerChoice === computerChoice) {
        result.style.display = "inline";
        result.innerHTML = "It's a draw! Play again to collect more points.";
    }
    //YOU WIN
    else if ()
        //ROCK
        //You win, rock crushes scissors!
        //You win, rock crushes lizard!
        //PAPER
        //You win, paper disproves Spock!
        //You win, paper covers rock!

        //SCISSORS
        //You win, scissors cuts paper!
        //You win, scissors decapitate lizard!

        //SPOCK
        //You win, Spock smashes scissors!
        //You win, Spock vaporizes rock!

        //LIZARD
        //You win, lizard poisons spock!
        //You win, lizard eats paper!

    //YOU LOOSE/Computer wins
    else if ()
        //ROCK
        //You loose, paper covers rock!
        //You loose, Spock vaporizes rock!

        //PAPER
        //You loose, scissors cuts paper!
        //You loose, lizard eats paper!

        //SCISSORS
        //You loose, rock crushes scissors!
        //You loose, Spock smashes scissors!

        //SPOCK
        //You loose, lizard poisons spock!
        //You loose, paper disproves Spock!

        //LIZARD
        //You loose, scissors decapitate lizard!
        //You loose, rock crushes lizard!

        }

//call function
getResult();



/*
//letsPlay();
//function letsPlay(){ //



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



 */