// this function will return a random selection between these three choices as it is the choice of the computer aka opponent of the human

function getComputerChoice(){
  const models = ["rock","paper","scissors"]
  return models[Math.floor((Math.random()*3))]
}

// the below function names as playRound will perform a match round between player and computer

function playRound(playerSelection, computerSelection){

  if(playerSelection === computerSelection){
    return `Draw :)`
  }else if(playerSelection === 'rock' && computerSelection === 'paper'){
    return `You Lose! Paper beats Rock`
  }else if(playerSelection === 'paper' && computerSelection === 'scissors'){
    return `You Lose! Scissors beats Paper`
  }else if(playerSelection === 'scissors' && computerSelection === 'rock'){
    return `You Lose! Rock beats Scissors`
  }
  return `You Win! ${playerSelection} beats ${computerSelection}`
}

// function will perform 5 rounds between player and the computer

function game(){
  let playerScore = 0
  let computerScore = 0
  for(let i = 0 ; i < 5 ; i++){
    const statement = playRound(prompt("Enter your choice "),getComputerChoice());
    console.log(statement);
    if(statement.includes('Win')){
      playerScore++
    }else{
      computerScore++
    }
  }
  if(playerScore > computerScore){
    console.log("Congratulation! Player Human Won! ")
    console.log("Player Score : "+playerScore);
    console.log("Computer Score : "+computerScore)
  }else{
    console.log("Oh no! Better luck next time :(")
    console.log("Player Score : "+playerScore);
    console.log("Computer Score : "+computerScore)
  }
}

game();