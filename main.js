const playerScore = document.querySelector('#player')
const computerScore = document.querySelector('#computer')
const div = document.querySelector('div')
const rock = document.querySelector('#rock')
const scissors = document.querySelector('#scissors')
const paper = document.querySelector("#paper")
const add = document.querySelector('h2')
let playerWon = 0
let computerWon = 0
let playerChoice


playerScore.innerText = `playerScore: ${playerWon}`
computerScore.innerText = `computerScore: ${computerWon}`


// Functionality


function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        playerWon = playerWon
        computerWon = computerWon
        return `its a tie ${playerSelection} === ${computerSelection}`
    }else if(playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" & computerSelection === "rock"){
        playerWon += 1
        return `You win ${playerSelection} beats ${computerSelection}` 
    }else if(computerSelection === "rock" &&playerSelection === "scissors" || computerSelection === "scissors" &&playerSelection === "paper" || computerSelection === "paper" &playerSelection === "rock") {
        computerWon += 1
        return `You Lose ${playerSelection} lost to ${computerSelection}`
    }
}



// Running the game

rock.addEventListener('click', rockStart)
paper.addEventListener('click', paperStart)
scissors.addEventListener('click', scissorsStart)

function rockStart() {
    playerChoice = 'rock'
    if(playerWon >= 5 || computerWon >= 5){
        if(playerWon > computerWon){
            div.innerText = `Game over You Won`
        }else {
            div.innerText = `Game over You Lost`
        }
        add.innerText = 'RESTART'
    }else {
        div.innerText = `${playRound(playerChoice,getComputerChoice())}`
        playerScore.innerText = `playerScore: ${playerWon}`
        computerScore.innerText = `computerScore: ${computerWon}`
    }   
}
function paperStart() {
    playerChoice = 'paper'
    if(playerWon >= 5 || computerWon >= 5){
        if(playerWon > computerWon){
            div.innerText = `Game over You Won`
        }else {
            div.innerText = `Game over You Lost`
        }
        add.innerText = 'RESTART'
    }else {
        div.innerText = `${playRound(playerChoice,getComputerChoice())}`
        playerScore.innerText = `playerScore: ${playerWon}`
        computerScore.innerText = `computerScore: ${computerWon}`
    }
}
function scissorsStart() {
    playerChoice = 'scissors'
    if(playerWon >= 5 || computerWon >= 5){
        if(playerWon > computerWon){
            div.innerText = `Game over You Won`
        }else {
            div.innerText = `Game over You Lost`
        }
        add.innerText = 'RESTART'
    }else {
        div.innerText = `${playRound(playerChoice,getComputerChoice())}`
        playerScore.innerText = `playerScore: ${playerWon}`
        computerScore.innerText = `computerScore: ${computerWon}`
    }
}


// restarting the game
add.addEventListener('click', restart)
function restart() {
    playerWon = 0
    computerWon = 0
    playerChoice
    playerScore.innerText = `playerScore: ${playerWon}`
    computerScore.innerText = `computerScore: ${computerWon}`
    div.innerText = ''
    add.innerText = 'May the force guide you'
}
// Random computer Choices
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









