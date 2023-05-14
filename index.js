function shuffleLeftDice(par1) {
  var leftDiceImage = document.querySelectorAll("img")[0];
  if (par1 == 1) {
    leftDiceImage.setAttribute("src", "./images/dice1.png");
  } else if (par1 == 2) {
    leftDiceImage.setAttribute("src", "./images/dice2.png");
  } else if (par1 == 3) {
    leftDiceImage.setAttribute("src", "./images/dice3.png");
  } else if (par1 == 4) {
    leftDiceImage.setAttribute("src", "./images/dice4.png");
  } else if (par1 == 5) {
    leftDiceImage.setAttribute("src", "./images/dice5.png");
  } else return;
}

function shuffleRightDice(par2) {
  var rightDiceImage = document.querySelectorAll("img")[1];
  if (par2 == 1) {
    rightDiceImage.setAttribute("src", "./images/dice1.png");
  } else if (par2 == 2) {
    rightDiceImage.setAttribute("src", "./images/dice2.png");
  } else if (par2 == 3) {
    rightDiceImage.setAttribute("src", "./images/dice3.png");
  } else if (par2 == 4) {
    rightDiceImage.setAttribute("src", "./images/dice4.png");
  } else if (par2 == 5) {
    rightDiceImage.setAttribute("src", "./images/dice5.png");
  } else return;
}

function shuffleDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var headingText = document.querySelector("h1");
  shuffleLeftDice(randomNumber1);
  shuffleRightDice(randomNumber2);
  if (randomNumber1 > randomNumber2) {
    headingText.innerHTML = "Player 1 wins!";
  } else if (randomNumber1 < randomNumber2) {
    headingText.innerHTML = "Player 2 wins!";
  } else {
    headingText.innerHTML = "Draw!";
  }
}
