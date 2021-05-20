var images = ['images/dice1.png','images/dice2.png','images/dice3.png','images/dice4.png','images/dice5.png','images/dice6.png'];

function diceFace() {
  var randomNumber1 = Math.floor(Math.random()*6);
  var randomNumber2 = Math.floor(Math.random()*6);
  var img1 = document.querySelector(".img1");
  var img2 = document.querySelector(".img2");
  img1.src = images[randomNumber1];
  img2.src = images[randomNumber2];
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}
