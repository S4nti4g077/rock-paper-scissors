const info = document.querySelector("#info");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result");
const counter = document.querySelector("#counter");
let p1 = true;
let p2 = false;
counter.innerHTML = 0;
let counterNum = 0;
rock.addEventListener("click", function () {
  console.log("rock");
  p1 = false;
  p2 = true;
  info.innerHTML = "P2 select";

  if (p2 === true) {
    rock.addEventListener("click", function () {
      console.log("p2 rock");
      p1 = true;
      p2 = false;
      info.innerHTML = "p1 select";
      counterNum++;
      counter.innerHTML = counterNum;
      console.log("counter =", counter);
    });
  }
});
