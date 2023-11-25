function getComputerChoice() {
  const options = [
    "rock",
    "paper",
    "scissors"
  ]
  let i = Math.floor(Math.random() * 3)
  return options[i]
}

function playRound(playerSelection, computerSelection) {
  let winner
  if (playerSelection === "rock") {
    if (computerSelection === "rock") winner = null
    else if (computerSelection === "scissors") winner = 0 
    else if (computerSelection === "paper") winner = 1
  }
  else if (playerSelection === "paper") {
    if (computerSelection === "paper") winner = null
    else if (computerSelection === "rock") winner = 0 
    else if (computerSelection === "scissors") winner = 1
  }
  else if (playerSelection === "scissors") {
    if (computerSelection === "scissors") winner = null
    else if (computerSelection === "paper") winner = 0 
    else if (computerSelection === "rock") winner = 1
  }
  if (winner === 0) {
    console.log(`Player wins! Player: ${playerSelection}. Computer: ${computerSelection}`)
  } else if (winner === 1) {
    console.log(`Computer wins! Player: ${playerSelection}. Computer: ${computerSelection}`)
  } else {
    console.log(`Draw Game! Player: ${playerSelection}. Computer: ${computerSelection}`)
  }
  
  return winner
}

function game() {
  let playerPoints = 0;
  let computerPoints = 0;
  for(let i = 0; i < 5; i++) {
    const playerSelection = prompt("rock, paper or scissors?").toLowerCase();
    const computerSelection = getComputerChoice();
    let winnerPoint = playRound(playerSelection, computerSelection)
    if (winnerPoint === 0) playerPoints++
    else if (winnerPoint === 1) computerPoints++
  }
  if (playerPoints > computerPoints) {
    console.log(`Player wins by ${playerPoints} to ${computerPoints}`)
  } else if (playerPoints < computerPoints) {
    console.log(`Computer wins by ${computerPoints} to ${playerPoints}`)
  } else {
    console.log(`Draw game: ${computerPoints} to ${playerPoints}`)
  }
}

game()


