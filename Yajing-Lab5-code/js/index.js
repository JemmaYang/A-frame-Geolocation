var boxParent = document.getElementById("boxParent");

boxParent.innerHTML += "<a-sphere radius='0.4' color='#F08080' position='-1.5 0.5 -2'></a-sphere>" 

boxParent.innerHTML += "<a-cone radius-bottom='0.8' radius-top='0.1' position='4 0.6 2.5' color='#FF6347'></a-cone>"

boxParent.innerHTML += "<a-animation attribute='rotation' from='0 30 0' to='0 330 0' repeat='indefinite' dur='2000'></a-animation>"

var skyBackGround = document.getElementById("skyGround")

skyBackGround.setAttribute("src","#sky") 

var cylinderOne = document.getElementById("cylinder");

cylinderOne.setAttribute("color","#FFFF66")
cylinderOne.setAttribute("opacity","0.5")


cylinderOne.innerHTML += "<a-animation attribute='position' from='2 4 -8' to='1 1 1.5' repeat='indefinite' dur='2000'></a-animation>";

var sphereOne =document.getElementById("sphereParent");

var prox= Math.floor((Math.random() * 4) + 1);
var proy= Math.floor((Math.random() * 4) + 1);
var proz= Math.floor((Math.random() * 4) + 1);
sphereOne.setAttribute("position",{x:prox,y:proy,z:proz});

var planeOne =document.getElementById("planeParent");

planeOne.innerHTML += "<a-sphere id='sphereChild' radius='1.5' color='#FFC0CB' position='-10 6 -4' onclick='beginMove()'></a-sphere>"  

function beginMove(){
  var childMove = document.getElementById("sphereChild");
  childMove.innerHTML += "<a-animation attribute='position' from='-10 6 7' to='-10 6 -8' dur='1000'></a-animation>"
};