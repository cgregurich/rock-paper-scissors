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

function getResults(playerSelection, computerSelection=computerPlay()){
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  
  // Player and computer tie
  if (playerSelection == computerSelection){
    playerScore++;
    computerScore++;
    return (`Both played ${playerSelection}. This round's a draw!`);
  }

  // All player winning conditions
  if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")){
    playerScore++;
    return `You win! ${firstLetterCapitalized(playerSelection)} beats ${computerSelection}.`
  }
  
  // All computer winning conditions
  if ((computerSelection == "rock" && playerSelection == "scissors") || (computerSelection == "paper" && playerSelection == "rock") || (computerSelection == "scissors" && playerSelection == "paper")){
    computerScore++;
    return `Computer wins! ${firstLetterCapitalized(computerSelection)} beats ${playerSelection}.`
  }
  roundsPlayed++;
}

function firstLetterCapitalized(str){
  if (str.length == 0) return "";
  if (str.length == 1) return str.toUpperCase();
  return str[0].toUpperCase() + str.substring(1, str.length);
}

function clearButtonBorders(){
}

function addStyle(element){
}

function buttonClicked(e){
  clearButtonBorders();
  
  addStyle(e.target);
  const playerChoice = e.target.value;
  const computerChoice = computerPlay();
  const results = getResults(playerChoice, computerChoice);
  drawResults(playerChoice, computerChoice, results);
  
  roundsPlayed++;
  updateScore();
  checkForGameCompletion();
  if (!isGameActive){
    buttons.forEach((btn) => btn.disabled=true);
  }
}

function resetGame(){
  const gameOver = document.querySelector("#game-over");
  gameOver.textContent = "";
  playerScore = 0;
  computerScore = 0;
  roundsPlayed = 0;
  const resetBtn = document.querySelector("#reset");
  resetBtn.remove();
  updateScore();  
  buttons.forEach((btn) => btn.disabled=false);
}

function updateScore(){
  if (roundsPlayed >= 0) {
    const resultsDiv = document.querySelector("#directions");
    resultsDiv.textContent = `Player: ${playerScore}  Computer: ${computerScore}`;
    isGameActive = true;
  }
}

function checkForGameCompletion(){
  if ((playerScore >= 5 || computerScore >= 5) && playerScore != computerScore){
    let gameOver = document.querySelector("#game-over");
    if (gameOver == null){
      gameOver = document.createElement("h1");
      gameOver.id = "game-over";
      
    }
    gameOver.textContent = "GAME OVER";
    if (playerScore > computerScore) {gameOver.textContent += " Suck it machines"}
    else{
      gameOver.textContent += " Dang bro you got beat by a literal bot";
    }
    const resetBtn = document.createElement("button");
    resetBtn.textContent = "Reset";
    resetBtn.addEventListener("click", resetGame);
    resetBtn.id = "reset";

    resultsDiv.appendChild(gameOver);
    resultsDiv.appendChild(resetBtn);
    isGameActive = false;
  }
  
}

function drawResults(playerChoice, computerChoice, results){
  resultsParas[0].textContent = `Player chose ${playerChoice.toUpperCase()}
  `;
  resultsParas[1].textContent = `Computer chose ${computerChoice.toUpperCase()}`;
  resultsParas[2].textContent = results;
}

const resultsDiv = document.querySelector("#results");
const buttons = document.querySelectorAll(".my-btn");
const resultsParas = document.querySelectorAll(".results-p");
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let isGameActive = false;

buttons.forEach((btn) => btn.addEventListener("click", buttonClicked));