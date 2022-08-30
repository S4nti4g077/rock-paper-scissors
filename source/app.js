const info = document.querySelector("#info");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result");
const form = document.querySelector("#select");
let counterNum = 0;

const gameBoard = {
  player1: true,
  player2: false,
  firstChose: 0,
  secondChose: 0,
  score: 0,
};

const rockPress = rock.addEventListener("click", function (e) {
  e.preventDefault();
  if (gameBoard.player1) {
    gameBoard.player1 = false;
    gameBoard.player2 = true;
    gameBoard.firstChose = "rock";
    return;
  }
  if (gameBoard.player2) {
    gameBoard.player1 = true;
    gameBoard.player2 = false;
    gameBoard.secondChose = "rock";
    return game(gameBoard.firstChose, gameBoard.secondChose);
  }
});

const paperPress = paper.addEventListener("click", function (e) {
  e.preventDefault();
  if (gameBoard.player1) {
    gameBoard.player1 = false;
    gameBoard.player2 = true;
    gameBoard.firstChose = "paper";
    return;
  }
  if (gameBoard.player2) {
    gameBoard.player1 = true;
    gameBoard.player2 = false;
    gameBoard.secondChose = "paper";
    return game(gameBoard.firstChose, gameBoard.secondChose);
  }
});

const scissorsPress = scissors.addEventListener("click", function (e) {
  e.preventDefault();
  if (gameBoard.player1) {
    gameBoard.player1 = false;
    gameBoard.player2 = true;
    gameBoard.firstChose = "scissors";
    return;
  }
  if (gameBoard.player2) {
    gameBoard.player1 = true;
    gameBoard.player2 = false;
    gameBoard.secondChose = "scissors";
    return game(gameBoard.firstChose, gameBoard.secondChose);
  }
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
      console.log("player 2 wins!");
    } else if (player2 === "paper") {
      console.log("player 2 wins!");
    } else if (player2 === "scissors") {
      console.log("draw");
    }
  }
}
