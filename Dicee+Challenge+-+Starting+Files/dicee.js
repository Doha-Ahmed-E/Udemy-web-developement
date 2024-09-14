var rand1 = Math.floor(Math.random() * 6) + 1;
var diceImg1 = "images/dice"+rand1+".png";
var rand2 = Math.floor(Math.random() * 6) + 1;
var diceImg2 = "images/dice"+rand2+".png";

document.querySelector(".img1").setAttribute("src",diceImg1);
document.querySelector(".img2").setAttribute("src",diceImg2);

if(rand1>rand2) 
    document.querySelector("h1").textContent = "Player1 Wins!";
else if(rand2>rand1)
    document.querySelector("h1").textContent = "Player2 Wins!";
else document.querySelector("h1").textContent = "Draw!";
