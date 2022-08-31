const info = document.querySelector("#info");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result");
const reset = document.querySelector("#reset");

const gameBoard = {
  player1: true,
  player2: false,
  firstChose: 0,
  secondChose: 0,
  p1score: 0,
  p2score: 0,
};

function turnInfo() {
  if (gameBoard.player1) {
    info.innerHTML = "Player 1 select:";
    return;
  } else {
    info.innerHTML = "Player 2 select:";
    return;
  }
}
function p1Turn() {
  gameBoard.player1 = false;
  gameBoard.player2 = true;
  turnInfo();
}
function p2Turn() {
  gameBoard.player1 = true;
  gameBoard.player2 = false;
  turnInfo();
}

rock.addEventListener("click", function (e) {
  e.preventDefault();
  if (gameBoard.player1) {
    p1Turn();
    gameBoard.firstChose = "rock";
    return;
  }
  if (gameBoard.player2) {
    p2Turn();
    gameBoard.secondChose = "rock";
    return game(gameBoard.firstChose, gameBoard.secondChose);
  }
});

paper.addEventListener("click", function (e) {
  e.preventDefault();
  if (gameBoard.player1) {
    p1Turn();
    gameBoard.firstChose = "paper";
    return;
  }
  if (gameBoard.player2) {
    p2Turn();
    gameBoard.secondChose = "paper";
    return game(gameBoard.firstChose, gameBoard.secondChose);
  }
});

scissors.addEventListener("click", function (e) {
  e.preventDefault();
  if (gameBoard.player1) {
    p1Turn();
    gameBoard.firstChose = "scissors";
    return;
  }
  if (gameBoard.player2) {
    p2Turn();
    gameBoard.secondChose = "scissors";
    return game(gameBoard.firstChose, gameBoard.secondChose);
  }
});

function game(player1, player2) {
  if (player1 === "rock") {
    if (player2 === "rock") {
      console.log("draw");
    } else if (player2 === "paper") {
      gameBoard.p2score++;
      console.log("player 2 wins!", gameBoard.p2score);
    } else if (player2 === "scissors") {
      gameBoard.p1score++;
      console.log("player 1 wins!", gameBoard.p2score);
    }
  } else if (player1 === "paper") {
    if (player2 === "paper") {
      console.log("draw");
    } else if (player2 === "scissors") {
      gameBoard.p2score++;
      console.log("player 2 wins!", gameBoard.p2score);
    } else if (player2 === "rock") {
      gameBoard.p1score++;
      console.log("player 1 wins!", gameBoard.p1score);
    }
  } else if (player1 === "scissors") {
    if (player2 === "rock") {
      gameBoard.p2score++;
      console.log("player 2 wins!", gameBoard.p2score);
    } else if (player2 === "paper") {
      gameBoard.p1score++;
      console.log("player 1 wins!", gameBoard.p1score);
    } else if (player2 === "scissors") {
      console.log("draw");
    }
  }
  result.innerHTML = `P1: ${gameBoard.p1score} : P2: ${gameBoard.p2score}`;
}

reset.addEventListener("click", function (e) {
  e.preventDefault();
  gameBoard.p1score = 0;
  gameBoard.p2score = 0;
  result.innerHTML = `P1: ${gameBoard.p1score} : P2: ${gameBoard.p2score}`;
});
