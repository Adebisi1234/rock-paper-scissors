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
    if(playerSelection === computerSelection){
        return `its a tie ${playerSelection} === ${computerSelection}`
    }else if(playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" & computerSelection === "rock"){
        return `You win ${playerSelection} beats ${computerSelection}` 
    }else {
        return `You Lose ${playerSelection} lost to ${computerSelection}`
    }
}

function game() {
    let playerWin = 0
    let playerLose = 0;
    let tie = 0
    for(let i = 0; i < 5; i++){
        let run = playRound(String(prompt("Enter your choice")).toLowerCase(), computerChoice())
        if(run.includes("You win")){
            console.log(run)
            playerWin += 1
        }else if(run.includes("You Lose")){
            console.log(run)
            playerLose += 1
        }else if(run.includes("its a tie")){
            console.log(run)
            tie += 1
        }
    }
    if(playerWin === playerLose){
        console.log(`you got ${playerWin}`)
        console.log(`you lost ${playerLose}`)
        console.log("Its a tie")
        console.log(`${tie} draws`)
    }else if(playerWin > playerLose){
        console.log(`you got ${playerWin}`)
        console.log(`you lost ${playerLose}`)
        console.log("You win")
        console.log(`${tie} draws`)
    }else{
        console.log(`you got ${playerWin}`)
        console.log(`you lost ${playerLose}`)
        console.log("You Lose")
        console.log(`${tie} draws`)
    }
}

game()