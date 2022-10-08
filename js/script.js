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


const buttons = document.querySelectorAll("button");
let counter = 0;
  for(let i = 0 ; i < buttons.length ; i++){

    buttons[i].addEventListener("click",function(){
      const outcome = playRound((buttons[i].id),getComputerChoice());
      const results = document.createElement("div");
      const resultsText = document.createTextNode(outcome);
      results.appendChild(resultsText);
      document.getElementById('results').appendChild(results);
      results.classList.add("winOrLose");
      console.log(outcome);
      counter += game(outcome);
      if(counter === 6){
        const main = document.getElementById('main');
        main.innerHTML =  '';
        const finalStatement = document.createElement('div');
        finalStatement.appendChild(document.createTextNode("END OF THE GAME."));
        finalStatement.classList.add('final');
        main.appendChild(finalStatement);

      }
    })
  }
// function will perform 5 rounds between player and the computer

function game( statement ){
  let playerScore = 0
  let computerScore = 0
  
  console.log(statement);
  if(statement.includes('Win')){
    playerScore++;
    const p = document.createElement('p');
    p.appendChild(document.createTextNode(playerScore));
    document.getElementById('person').appendChild(p);
  }else if(statement.includes('Lose')){
    computerScore++
    const p = document.createElement('p');
    p.appendChild(document.createTextNode(computerScore));
    document.getElementById('computer').appendChild(p);
  }
  return playerScore + computerScore;
}
