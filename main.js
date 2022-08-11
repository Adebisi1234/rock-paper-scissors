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

function playerChoice() {
    prompt("Enter You choice:")
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        return "its a tie"
    }else if(playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" & computerSelection === "rock"){
        return "You win"
    }else {
        return "You Lose"
    }
}

function game() {
    let playerWin = 0
    let playerLose = 0;
    for(let i = 0; i <= 5; i++){
        let run = playRound(playerChoice(), getComputerChoice())
        if(run === "You win"){
            playerWin += 1
        }else if(run === "You Lose"){
            playerLose += 1
        }
    }
    if(playerWin === playerLose){
        console.log("Its a tie")
    }else if(playerWin > playerLose){
        console.log("You win")
    }else{
        console.log("You Lose")
    }
}

game()