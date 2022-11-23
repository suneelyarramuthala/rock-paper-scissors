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
    message = "System choice Rock and your Choice is Rock so it's a tie.";
  } else if (computerChoice == 1) {
    console.log("paper");
    sScore += 1;
    message = "Your Choice is Rock and system Choice is paper so you lost.";
  } else {
    console.log("scissors");
    yScore += 1;
    message = "Your Choice is Rock and system Choice is scissors so you won.";
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
    message = "System choice Rock and your Choice is paper so so you won.";
  } else if (computerChoice == 1) {
    console.log("paper");
    message = "Your Choice is paper and system Choice is paper so it's a tie.";
  } else {
    console.log("scissors");
    sScore += 1;
    message = "Your Choice is paper and system Choice is scissors so you lost.";
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
    message = "System choice Rock and your Choice is scissors so you lost.";
  } else if (computerChoice == 1) {
    console.log("paper");
    yScore += 1;
    message = "Your Choice is scissors and system Choice is paper so you won.";
  } else {
    console.log("scissors");
    message =
      "Your Choice is scissors and system Choice is scissors so its a tie.";
  }
  resultMessage.innerHTML = message;
  yourScore.innerHTML = yScore;
  systemScore.innerHTML = sScore;
}
function reset() {
  yScore = 0;
  sScore = 0;
  message = "Result Message";
  resultMessage.innerHTML = message;
  yourScore.innerHTML = yScore;
  systemScore.innerHTML = sScore;
}
