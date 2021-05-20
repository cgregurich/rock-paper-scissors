function computerPlay() {
  let num = Math.ceil(Math.random() * 3);
  switch (num) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function singleRound(playerSelection, computerSelection){
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  
  if (playerSelection == computerSelection){
    return (`Both played ${playerSelection}. This round's a draw!`);
  }

  // All player winning conditions
  if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")){
    return `You win! ${firstLetterCapitalized(playerSelection)} beats ${computerSelection}.`
  }

  if ((computerSelection == "rock" && playerSelection == "scissors") || (computerSelection == "paper" && playerSelection == "rock") || (computerSelection == "scissors" && playerSelection == "paper")){
    return `Computer wins! ${firstLetterCapitalized(computerSelection)} beats ${playerSelection}.`
  }
}

function firstLetterCapitalized(str){
  if (str.length == 0) return "";
  if (str.length == 1) return str.toUpperCase();
  return str[0].toUpperCase() + str.substring(1, str.length);
}

function game(){
  let choice;
  for (i=0; i<6; i++){
    console.log(`\nRound ${i+1}!`);
    choice = prompt("Rock, paper, or scissors?").toLowerCase();
    while (choice != "rock" && choice != "paper" && choice != "scissors"){
      console.log("no buno");
      prompt("Rock, paper, or scissors?").toLowerCase();
    }
    console.log(singleRound(choice, computerPlay()));
  }
}

game();