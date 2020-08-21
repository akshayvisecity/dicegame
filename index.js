// dice 1
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
var no1 = randomNumber1;
randomNumber1 = "images/" + "dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", randomNumber1);

// dice 2

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;
var no2 = randomNumber2;
randomNumber2 = "images/" + "dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomNumber2);




if (no1 > no2) {
  document.querySelector("h1").innerHTML = "Player1 wins🏅";
} else if (no2 > no1) {
  document.querySelector("h1").innerHTML = "Player2 wins🏅";
} else {
  document.querySelector("h1").innerHTML = "Draw!! 🤣😂"; 

}
