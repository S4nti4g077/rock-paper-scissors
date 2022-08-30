const info = document.querySelector("#info");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result");
let counterNum = 0;

const rockPress = rock.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("rock");
  return "rock";
});
const paperPress = paper.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("paper");
  return "paper";
});
const scissorsPress = scissors.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("scissors");
  return "scissors";
});

const player1 = document.querySelector("#select");
function game(player1, player2) {
  if (player1 === "rock") {
    if (player2 === "rock") {
      console.log("draw");
    } else if (player2 === "paper") {
      console.log("player 2 wins!");
    } else if (player2 === "scissors") {
      console.log("player 1 wins!");
    }
  } else if (player1 === "paper") {
    if (player2 === "paper") {
      console.log("draw");
    } else if (player2 === "scissors") {
      console.log("player 2 wins!");
    } else if (player2 === "rock") {
      console.log("player 1 wins!");
    }
  } else if (player1 === "scissors") {
    if (player2 === "rock") {
      console.log("draw");
    } else if (player2 === "paper") {
      console.log("player 2 wins!");
    } else if (player2 === "scissors") {
      console.log("player 1 wins!");
    }
  }
}
