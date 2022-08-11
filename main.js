let computerChoice = function getComputerChoice() {
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
    console.log(computerChoice())
    console.log(playerSelection)
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
        let run = playRound(String(prompt("Enter your choice")), computerChoice)
        if(run === "You win"){
            playerWin += 1
        }else if(run === "You Lose"){
            playerLose += 1
        }
    }
    if(playerWin === playerLose){
        console.log("Its a tie")
    }else if(playerWin > playerLose){
        console.log(playerWin)
        console.log(playerLose)
        console.log("You win")
    }else{
        console.log(playerWin)
        console.log(playerLose)
        console.log("You Lose")
    }
}

game()