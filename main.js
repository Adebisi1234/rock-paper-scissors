
const rock = document.querySelector("#rock").addEventListener('click', chooseRock)
const paper = document.querySelector("#paper").addEventListener('click', choosePaper)
const scissors = document.querySelector("#scissors").addEventListener('click', chooseScissors)

function chooseRock() {
    playerChoice = 'rock'
    console.log(playRound(playerChoice,getComputerChoice()))
    document.body.innerHTML = `${playRound(playerChoice,getComputerChoice())}    `
    
}
function choosePaper() {
    playerChoice = 'paper'
    console.log(playRound(playerChoice,getComputerChoice()))
    document.body.innerHTML = `${playRound(playerChoice,getComputerChoice())}    `
}
function chooseScissors() {
    playerChoice = 'scissors'
    console.log(playRound(playerChoice,getComputerChoice()))
    document.body.innerHTML = `${playRound(playerChoice,getComputerChoice())}    `
}


function getComputerChoice() {
    const random = Math.random()
    if(random < 0.33){
        return "rock"
    }else if(random < .66){
        return "paper"
    }else {
        return "scissors"
    }
}


function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        return `its a tie ${playerSelection} === ${computerSelection}`
    }else if(playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" & computerSelection === "rock"){
        return `You win ${playerSelection} beats ${computerSelection}` 
    }else {
        return `You Lose ${playerSelection} lost to ${computerSelection}`
    }
}