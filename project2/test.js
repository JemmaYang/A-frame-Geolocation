function jumpBox(){
var showFlyBox = document.getElementById("firstPage");
showFlyBox.innerHTML = "<a-entity id='flyBox' obj-model='obj:#box-obj; mtl:#box-mtl' position='2 -3 -4' rotation='0 70 0' scale='0.05 0.05 0.05' onclick='shwoRobot()'></a-entity>"
 

var moveBox = document.getElementById("flyBox");
moveBox.innerHTML += "<a-animation attribute='position' from='-2 -2 -8' to='1 -4 -3' dur='1500'repeat='1' direction='alternate' ></a-animation>"
moveBox.innerHTML +="<a-animation attribute='rotation' from='0 350 0' to='0 -10 0' during='2500' repeat='1'></a-animation>"
};


var startMessage = "A time-travel machine has arrived on campus. If you find the time machine, you can travel back to 50 years ago. Exlpore the historical campus now!"



function shwoRobot(){
var displayRobot = document.getElementById("firstPage");
var changeMessage = document.getElementById("startText");
displayRobot.innerHTML = "<a-entity id='robotobj' obj-model='obj:#robot-obj; mtl:#robot-mtl' scale='0.05 0.05 0.05' position='0 0 -5' rotation='-5 -20 0' onclick='showPortal()'></a-entity>"
changeMessage.setAttribute("text", startMessage);
};


