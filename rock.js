const body = document.querySelector('body')
const container = document.getElementById('container')
const roundsSection = document.getElementById('rounds-section')
const buttonsSection = document.getElementById('buttons-section')
const scoreSection = document.getElementById('score-section')

const btn_01 = document.createElement('button')
const btn_02 = document.createElement('button')
const btn_03 = document.createElement('button')
buttonsSection.appendChild(btn_01)
buttonsSection.appendChild(btn_02)
buttonsSection.appendChild(btn_03)

btn_01.setAttribute('id', 'btn-01')
btn_02.setAttribute('id', 'btn-02')
btn_03.setAttribute('id', 'btn-03')
btn_01.textContent = 'rock'
btn_02.textContent = 'paper'
btn_03.textContent = 'scissors'

btn_01.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const result = playRound('rock', computerSelection)
  // console.log(result)
})

btn_02.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const result = playRound('paper', computerSelection)
  // console.log(result)
})

btn_03.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const result = playRound('scissors', computerSelection)
  // console.log(result)
})

button_div.appendChild(btn_01)
button_div.appendChild(btn_02)
button_div.appendChild(btn_03)

const score_div = document.createElement('div');
container.appendChild(score_div)
score_div.setAttribute('id', 'score-box' );

// const player_label = document.createElement('label')
// score_div.appendChild(player_label)
// player_label.setAttribute('class', 'score-label')
// player_label.textContent = 'Player:'

// const player_score = document.createElement('div')
// score_div.appendChild(player_score)
// player_score.setAttribute('class', 'score-div')
// player_score.textContent = '0'


// const computer_label = document.createElement('label')
// score_div.appendChild(computer_label)
// computer_label.setAttribute('class', 'score-label')
// computer_label.textContent = 'Computer:'

// const computer_score = document.createElement('div')
// score_div.appendChild(computer_score)
// computer_score.setAttribute('class', 'score-div')
// computer_score.textContent = '0'

// -----------------------------------------------------------------------------
let counter = 0;
  let playerPoints = 0;
  let computerPoints = 0;

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
    else if (computerSelection === "scissors") { 
      winner = 0; playerPoints++;
    }
    else if (computerSelection === "paper") {
      winner = 1; computerPoints++;
    }
  }
  else if (playerSelection === "paper") {
    if (computerSelection === "paper") winner = null
    else if (computerSelection === "rock") {
      winner = 0; playerPoints++
    }
    else if (computerSelection === "scissors") { 
      winner = 1; computerPoints++
    }
  }
  else if (playerSelection === "scissors") {
    if (computerSelection === "scissors") winner = null
    else if (computerSelection === "paper") {
      winner = 0; playerPoints++
    }
    else if (computerSelection === "rock") {
      winner = 1; computerPoints++
    }
  }
  if (winner === 0) {
    console.log(`Player wins! Player: ${playerSelection}. Computer: ${computerSelection}`)
  } else if (winner === 1) {
    console.log(`Computer wins! Player: ${playerSelection}. Computer: ${computerSelection}`)
  } else {
    console.log(`Draw Game! Player: ${playerSelection}. Computer: ${computerSelection}`)
  }
  counter = counter + 1

  if (counter === 5) {
    alert(`Game Over! Player: ${playerPoints}, Computer: ${computerPoints}`)
  }

  return winner
}

// function game() {
//   let playerPoints = 0;
//   let computerPoints = 0;
//   let counter = 0;
  
//   for(let i = 0; i < 5; i++) {
//     const playerSelection = prompt("rock, paper or scissors?").toLowerCase();
//     const computerSelection = getComputerChoice();
//     let winnerPoint = playRound(playerSelection, computerSelection)
//     if (winnerPoint === 0) playerPoints++
//     else if (winnerPoint === 1) computerPoints++
//   }
//   if (counter > 5) {
//     if (playerPoints > computerPoints) {
//       console.log(`Player wins by ${playerPoints} to ${computerPoints}`)
//     } else if (playerPoints < computerPoints) {
//       console.log(`Computer wins by ${computerPoints} to ${playerPoints}`)
//     } else {
//       console.log(`Draw game: ${computerPoints} to ${playerPoints}`)
//     }
//   }
// }

// game()


