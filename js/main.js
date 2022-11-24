var computerChoice;
var yourChoice;
var yScore = 0;
var sScore = 0;
var message;
var resultMessage = document.querySelector("#result-message");
var yourScore = document.querySelector("#your-score");
var systemScore = document.querySelector("#system-score");
function rock() {
  computerChoice = Math.floor(Math.random() * 3);
  console.log(computerChoice);
  if (computerChoice == 0) {
    console.log("rock");
    message = "You : ROCK | system : ROCK | TIE.";
  } else if (computerChoice == 1) {
    console.log("paper");
    sScore += 1;
    message = "You : ROCK | system : PAPER | LOST.";
  } else {
    console.log("scissors");
    yScore += 1;
    message = "You : ROCK | system : SCISSORS | WON.";
  }
  resultMessage.innerHTML = message;
  yourScore.innerHTML = yScore;
  systemScore.innerHTML = sScore;
}
function paper() {
  computerChoice = Math.floor(Math.random() * 3);
  console.log(computerChoice);
  if (computerChoice == 0) {
    console.log("rock");
    yScore += 1;
    message = "You : PAPER | system : ROCK | WON.";
  } else if (computerChoice == 1) {
    console.log("paper");
    message = "You : PAPER | system : PAPER | TIE.";
  } else {
    console.log("scissors");
    sScore += 1;
    message = "You : PAPER | system : SCISSORS | LOST.";
  }
  resultMessage.innerHTML = message;
  yourScore.innerHTML = yScore;
  systemScore.innerHTML = sScore;
}
function scissors() {
  computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice == 0) {
    console.log("rock");
    sScore += 1;
    message = "You : SCISSORS | system : ROCK | LOST.";
  } else if (computerChoice == 1) {
    console.log("paper");
    yScore += 1;
    message = "You : SCISSORS | system : PAPER | WON.";
  } else {
    console.log("scissors");
    message = "You : SCISSORS | system : SCISSORS | TIE.";
  }
  resultMessage.innerHTML = message;
  yourScore.innerHTML = yScore;
  systemScore.innerHTML = sScore;
}
function reset() {
  yScore = 0;
  sScore = 0;
  message = "You : ---- | system : ---- | RESULT.";
  resultMessage.innerHTML = message;
  yourScore.innerHTML = yScore;
  systemScore.innerHTML = sScore;
}
