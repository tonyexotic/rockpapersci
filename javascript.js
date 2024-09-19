let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choiceArray = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * 3);
    return(choiceArray[choice]);
}

function getHumanChoice() {
    let choice = prompt("Type in 'Rock', 'Paper' or 'Scissors'");
    return (choice.toLowerCase());
}

function playRound(humanChoice, computerChoice) {
    let result = ''
    if (humanChoice == 'rock') {
        if (computerChoice == 'paper') {
            result = 'win';
        } else if (computerChoice == 'scissors') {
            result = 'lose';
        } else {
            result = 'tie';
        }
    } else if (humanChoice == 'paper') {
        if (computerChoice == 'scissors') {
            result = 'lose';
        } else if (computerChoice == 'rock') {
            result = 'win';
        } else {
            result = 'tie';
        }
    } else if (humanChoice == 'scissors') {
        if (computerChoice == 'rock') {
            result = 'lose';
        } else if (computerChoice == 'paper') {
            result = 'win';
        } else {
            result = 'tie';
        }
    }
    return result
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        console.log(`You chose ${humanChoice}`);
        let computerChoice = getComputerChoice();
        console.log(`Computer chose ${computerChoice}`);
        let result = playRound(humanChoice, computerChoice);
        if (result == 'win') {
            humanScore ++;
            console.log(`You ${result}! ${humanChoice} beats ${computerChoice}.`);
        } else if (result == 'lose') {
            computerScore ++;
            console.log(`You ${result}! ${computerChoice} beats ${humanChoice}.`);
        } else {
            console.log(`It's a tie !`);
        }
        console.log(`Your score : ${humanScore} - ${computerScore} : Computer Score`);
    }
}

playGame();
