
var n=Math.random();
n=Math.floor(n*6)+1;
console.log(n);
if (n===1) {
    document.querySelector("img.img1").getAttribute("dice1.png");

}
else if (n===2) {document.querySelector("img.img1").setAttribute("src","dice2.png");

}
else if (n===3) {
document.querySelector("img.img1").setAttribute("src","dice3.png");

}
else if (n===4) {document.querySelector("img.img1").setAttribute("src","dice4.png");
}
else if (n===5) {document.querySelector("img.img1").setAttribute("src","dice5.png");

}
else if (n===6) {document.querySelector("img.img1").setAttribute("src","dice6.png");

}




var m=Math.random();
m=Math.floor(m*6)+1;
console.log(m);
if (m===1) {
    document.querySelector("img.img2").getAttribute("dice1.png");

}
else if (m===2) {document.querySelector("img.img2").setAttribute("src","dice2.png");

}
else if (m===3) {
document.querySelector("img.img2").setAttribute("src","dice3.png");

}
else if (m===4) {document.querySelector("img.img2").setAttribute("src","dice4.png");
}
else if (m===5) {document.querySelector("img.img2").setAttribute("src","dice5.png");

}
else if (m===6) {document.querySelector("img.img2").setAttribute("src","dice6.png");

}






if(n>m){
  document.querySelector("h1").innerHTML="🥇player 1 wins";
}
else if (n===m){
  document.querySelector("h1").innerHTML="draw";
}
else{
  document.querySelector("h1").innerHTML="player 2 wins🥇";
}
