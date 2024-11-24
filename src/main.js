// import src from './index.css'

// const btn = document.querySelector(".rules-btn");
// const span = document.querySelector(".close");
// const buttonEl = document.querySelectorAll(".circle");
// const winner = document.querySelector(".display-winner");
// const reset = document.querySelector(".reset");
// const computerPoints = document.querySelector(".computer-points");
// const playerPoints = document.querySelector(".player-points");

// let playerCount = 0;
// let computerCount = 0;

// btn.addEventListener("click", () => {
//   modal.style.display = "block";
// });

// span.addEventListener("click", () => {
//   modal.style.display = "none";
// });

// window.addEventListener("click", (e) => {
//   if (e.target === modal) {
//     modal.style.display = "none";
//   }
// });

// buttonEl.forEach((button) => {
//   button.addEventListener("click", () => {
//     let userChoice = button.value;
//     const options = ["rock", "paper", "scissor", "lizard", "spock"];
//     const computerChoice = options[Math.floor(Math.random() * options.length)];
//     if (computerChoice === userChoice) {
//       winner.textContent = `Tie`;
//     } else if (
//       (userChoice === "rock" && computerChoice === "lizard") ||
//       (userChoice === "rock" && computerChoice === "scissor") ||
//       (userChoice === "paper" && computerChoice === "rock") ||
//       (userChoice === "paper" && computerChoice === "spock") ||
//       (userChoice === "scissor" && computerChoice === "paper") ||
//       (userChoice === "scissor" && computerChoice === "lizard") ||
//       (userChoice === "lizard" && computerChoice === "paper") ||
//       (userChoice === "lizard" && computerChoice === "spock") ||
//       (userChoice === "spock" && computerChoice === "scissor") ||
//       (userChoice === "spock" && computerChoice === "rock")
//     ) {
//       winner.textContent = `Computer played : ${computerChoice}, Player Wins`;
//       playerCount += 1;
//       playerPoints.value = playerCount;
//     } else {
//       winner.textContent = `Computer Wins`;
//       computerCount += 1;
//       computerPoints.value = computerCount;
//     }
//   });
// });

// reset.addEventListener("click", () => {
//   computerPoints.value = 0;
//   playerPoints.value = 0;
//   winner.style.display = "none";
//   playerCount = 0;
//   computerCount = 0;
// });

// const rulesButton = document.querySelector('.rules-btn');
// const modal = document.querySelector('.modal');
// const closeButton = document.querySelector('.close');
// const body = document.querySelector('body');

// rulesButton.addEventListener('click', () => {
//   modal.classList.remove('hidden');
//   body.classList.add('modal-open');
// });

// closeButton.addEventListener('click', () => {
//   modal.classList.add('hidden');
//   body.classList.remove('modal-open');
// });
// // Modal related elements

// Get elements for interactions
const btn = document.querySelector(".rules-btn");
const span = document.querySelector(".close");
const winner = document.querySelector(".display-winner");
const reset = document.querySelector(".reset");
const computerPoints = document.querySelector(".computer-points");
const playerPoints = document.querySelector(".player-points");
const gameButtons = document.querySelectorAll(".game-btn"); // Get all game buttons
const modal = document.querySelector(".modal");
const rulesButton = document.querySelector('.rules-btn');
const body = document.querySelector('body');

let playerCount = 0;
let computerCount = 0;

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
  const winConditions = {
    rock: ["scissor", "lizard"],
    paper: ["rock", "spock"],
    scissor: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["scissor", "rock"]
  };

  if (playerChoice === computerChoice) {
    return "Tie";
  } else if (winConditions[playerChoice].includes(computerChoice)) {
    playerCount += 1;
    playerPoints.textContent = playerCount; // Update player score
    return `Computer played: ${computerChoice}. Player Wins!`;
  } else {
    computerCount += 1;
    computerPoints.textContent = computerCount; // Update computer score
    return `Computer played: ${computerChoice}. Computer Wins!`;
  }
}

// Event listener for game buttons
gameButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let playerChoice = button.value;
    const options = ["rock", "paper", "scissor", "lizard", "spock"];
    const computerChoice = options[Math.floor(Math.random() * options.length)];

    // Get result
    const result = determineWinner(playerChoice, computerChoice);
    winner.textContent = result;
  });
});

// Reset button functionality
reset.addEventListener("click", () => {
  playerCount = 0;
  computerCount = 0;
  playerPoints.textContent = playerCount;
  computerPoints.textContent = computerCount;
  winner.textContent = ''; // Clear winner text
});

// Modal logic for displaying game rules
rulesButton.addEventListener('click', () => {
  modal.classList.remove('hidden');
  body.classList.add('modal-open');
});

span.addEventListener('click', () => {
  modal.classList.add('hidden');
  body.classList.remove('modal-open');
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

