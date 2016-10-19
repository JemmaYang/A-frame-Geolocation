var showFlyBox = document.getElementById("firstPage");





function jumpBox(){
showFlyBox.innerHTML = "<a-entity id='flyBox' obj-model='obj:#box-obj; mtl:#box-mtl' position='2 -3 -4' rotation='0 20 0' scale='0.05 0.05 0.05' onclick='shwoRobot()'></a-entity>"
var moveBox = document.getElementById("flyBox");

moveBox.setAttribute ("alongpath", "path:0,0,-50 3,-1,-12 2,0,-8; closed:false; dur:3000; delay:500; inspect:false")
moveBox.innerHTML +="<a-animation attribute='rotation' from='0 20 0' to='10 -30 0' during='1200' delay='3000' ></a-animation>"

};


var startMessage = "A time-travel machine has arrived on campus. If you find the time machine, you can travel back to 50 years ago and exlpore historical buildings around campus!"



function shwoRobot(){
var displayRobot = document.getElementById("firstPage");
var changeMessage = document.getElementById("startText");
displayRobot.innerHTML = "<a-entity id='robotobj' obj-model='obj:#robot-obj; mtl:#robot-mtl' scale='0.05 0.05 0.05' position='0 -2 -5' rotation='0 -25 0' onclick='showPortal()'></a-entity>"
displayRobot.innerHTML +="<a-animation attribute='position' from='0 -20 -30' to='0 1 -3' during='2500' ></a-animation>"
changeMessage.setAttribute("text", startMessage);
changeMessage.innerHTML += "<a-plane id='messagePlane' color='#292931'  width='3.6' height='2' rotation='0 0 0' position='1.4 0.5 -0.5' opacity='0.5'>"
console.log("show message")
};


