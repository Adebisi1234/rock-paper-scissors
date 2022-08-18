// let round = 0
// let playerWin = 0
// let computerWins = 0

// const rock = document.querySelector("#rock").addEventListener('click', chooseRock)
// const paper = document.querySelector("#paper").addEventListener('click', choosePaper)
// const scissors = document.querySelector("#scissors").addEventListener('click', chooseScissors)
// const div = document.querySelector('div')

// function chooseRock() {
//     playerChoice = 'rock'
//     console.log(playRound(playerChoice,getComputerChoice()))
//     if(round === 5){
//         console.log(playerWin)
//         console.log(computerWins)
//         div.innerHTML = `Game over ${playerWin} vs ${computerWins}`
//     }else {
//         console.log(computerWins)
//         console.log(playerWin)
//         div.innerHTML = `${playRound(playerChoice,getComputerChoice())}`
//     round += 1
//     }
// }
// function choosePaper() {
//     playerChoice = 'paper'
//     console.log(playRound(playerChoice,getComputerChoice()))
//     if(round === 5){
//         div.innerHTML = `Game over ${playerWin} vs ${computerWins}`
//     }else {
//         div.innerHTML = `${playRound(playerChoice,getComputerChoice())}`
//     round += 1
//     }
// }
// function chooseScissors() {
//     playerChoice = 'scissors'
//     console.log(playRound(playerChoice,getComputerChoice()))
//     if(round === 5){
//         div.innerHTML = `Game over ${playerWin} vs ${computerWins}`
//     }else {
//         div.innerHTML = `${playRound(playerChoice,getComputerChoice())}`
//     round += 1
//     }
// }


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
        playerWon = playerWon
        computerWon = computerWon
        return `its a tie ${playerSelection} === ${computerSelection}`
    }else if(playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" & computerSelection === "rock"){
        playerWon += 1
        console.log(playerWon)
        return `You win ${playerSelection} beats ${computerSelection}` 
    }else if(computerSelection === "rock" &&playerSelection === "scissors" || computerSelection === "scissors" &&playerSelection === "paper" || computerSelection === "paper" &playerSelection === "rock") {
        computerWon += 1
        console.log(computerWon)
        return `You Lose ${playerSelection} lost to ${computerSelection}`
    }
}

let round = 0
let playerWon = 0
let computerWon = 0
let playerChoice

const div = document.querySelector('div')
const rock = document.querySelector('#rock')
const scissors = document.querySelector('#scissors')
const paper = document.querySelector("#paper")



function start() {

    rock.addEventListener('click', rockStart)
    paper.addEventListener('click', paperStart)
    scissors.addEventListener('click', scissorsStart)

    function rockStart() {
        playerChoice = 'rock'
        if(round === 5){
        div.innerHTML = `Game over ${playerWon} vs ${computerWon}`
    }else {
        div.innerHTML = `${playRound(playerChoice,getComputerChoice())}`
    round += 1
    }   
    }

    function paperStart() {
        playerChoice = 'paper'
        if(round === 5){
            div.innerHTML = `Game over ${playerWon} vs ${computerWon}`
        }else {
            div.innerHTML = `${playRound(playerChoice,getComputerChoice())}`
        round += 1
        }
    }

    function scissorsStart() {
        playerChoice = 'scissors'
        if(round === 5){
        div.innerHTML = `Game over ${playerWon} vs ${computerWon}`
        }else {
            div.innerHTML = `${playRound(playerChoice,getComputerChoice())}`
        round += 1
        }
    }
}
start()