function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function changeDiceAndDetermineWinner() {
  let randomNumber1 = rollDice();
  let randomNumber2 = rollDice();

  document
    .querySelector(".img1")
    .setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document
    .querySelector(".img2")
    .setAttribute("src", "images/dice" + randomNumber2 + ".png");

  changeWinnerImage(randomNumber1, randomNumber2);
}

function changeWinnerImage(randomNumber1, randomNumber2) {
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!!!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!!!";
  } else {
    document.querySelector("h1").innerHTML = "It's a Draw!!!";
  }
}

window.onload = changeDiceAndDetermineWinner;
