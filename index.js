var randomNumber1=Math.floor(6*(Math.random()))+1;
var randomNumber2=Math.floor(6*(Math.random()))+1;
document.getElementsByClassName("img1")[0].setAttribute("src",'images/dice'+randomNumber1+'.png');
document.getElementsByClassName("img2")[0].setAttribute("src",'images/dice'+randomNumber2+'.png');
if(randomNumber1==randomNumber2)
{
  document.querySelector("h1").innerHTML="🚩Match Draw🚩";
}
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="🚩Player 1 wins";
}
if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 2 wins🚩";
}
