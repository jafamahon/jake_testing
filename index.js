var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomNumber1String = randomNumber1.toString();
var randomNumber2String = randomNumber2.toString();
document.querySelector(".img1").src="images/dice"+randomNumber1String+".png";
document.querySelector(".img2").src="images/dice"+randomNumber2String+".png";
if(randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="🚩 Player 1 wins!"
} 
else if {
    document.querySelector("h1").innerHTML="Player 2 wins! 🚩"
} 
else {
    document.querySelector("h1").innerHTML="It's a draw!"
};
