// console.log("Hello World")

function getComputerChoice() {
    let random = Math.random()
    if(random <= 0.33){
        return "Rock"
    }else if(random <= 0.66){
        return "Paper"
    }else{
        return "Scissors"
    }
}

playerSelection = prompt("Enter Your Choice").toLowerCase()

computerSelection = getComputerChoice().toLowerCase()
function playGround(playerSelection, computerSelection){
    
    
    if(playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
        return `You Win ${playerSelection} beats ${computerSelection}`
    }else if(playerSelection === computerSelection){
        return "Its a tie"
    }
    else {
        return `You Lose ${computerSelection} beats ${playerSelection}`
    }
}

console.log(playGround(playerSelection, computerSelection))