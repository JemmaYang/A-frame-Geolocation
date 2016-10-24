var showFlyBox = document.getElementById("firstPage");





function jumpBox(){
showFlyBox.innerHTML = "<a-entity id='flyBox' obj-model='obj:#box-obj; mtl:#box-mtl' position='2 -3 -4' rotation='0 20 0' scale='0.05 0.05 0.05' onclick='shwoRobot()'></a-entity>"
var moveBox = document.getElementById("flyBox");

moveBox.setAttribute ("alongpath", "path:0,0,-50 3,-1,-12 2,0,-8; closed:false; dur:3000; delay:500; inspect:false")
var getYourText = document.getElementById("getText");
getYourText.setAttribute("text",getMessage);
getYourText.innerHTML += "<a-plane id='messagePlane' color='#292931'  width='3' height='0.8' rotation='0 0 0' position='1.1 0.1 -0.5' opacity='0.5'></a-plane>"

moveBox.innerHTML +="<a-animation attribute='rotation' from='0 20 0' to='10 -30 0' during='1200' delay='3000' ></a-animation>"

};

var getMessage = "You got a message. \n Click the fly-box to read the message."
var startMessage = "A time-travel machine has arrived on campus. If you find the time machine, you can travel back to 50 years ago and exlpore historical buildings around campus! Click the robot to show dstance."



function shwoRobot(){
var displayRobot = document.getElementById("firstPage");
var changeMessage = document.getElementById("startText");
displayRobot.innerHTML = "<a-entity id='robotobj' obj-model='obj:#robot-obj; mtl:#robot-mtl' scale='0.05 0.05 0.05' position='0 -2 -5' rotation='0 -25 0' onclick='showPortal()'></a-entity>"
displayRobot.innerHTML +="<a-animation attribute='position' from='0 -20 -30' to='0 1 -3' during='2500' ></a-animation>"
changeMessage.setAttribute("text", startMessage);
changeMessage.innerHTML += "<a-plane id='messagePlane' color='#292931'  width='3.6' height='2' rotation='0 0 0' position='1.4 0.7 -0.5' opacity='0.5'></a-plane>"
var hideYourText = document.getElementById("getText");
hideYourText.setAttribute("visible",false);
console.log("show message")

};


function toggle(){
  var bt=document.getElementById("bt");
  var googleMap=document.getElementById("googleMap");
  
  if(googleMap.style.display=="block"){
    googleMap.style.display="none";
    bt.src="../image/locationmap.png";
  } 
  else{
    googleMap.style.display="block";
    bt.src="../image/locationmaphide.png";
  }
}

function finishThisTour(){
   navigator.geolocation.clearWatch(geolocationCall);
   var hidePlane = document.getElementById("planeContainer")
   hidePlane.setAttribute("visible", false);

   
   
   var hideSign = document.getElementById("gotSignContainer")
   hideSign.innerHTML=" " ;

    var finishPage = document.getElementById("firstPage")
    finishPage.innerHTML = "<a-entity obj-model='obj: #timemachine-obj; mtl: #timemachine-mtl' scale='0.07 0.07 0.07' rotation='20 70 20'><a-animation attribute='scale' from='0 0 0' to='0.07 0.07 0.07' delay='1500' dur='1200' fill='both' easing='ease-out'></a-animation><a-animation attribute='position' from='0.5 -0.8 0' to='0.5 1 -5' delay='500' dur='500' fill='both' easing='ease-out'></a-animation><a-entity obj-model='obj:#libraryobj; mtl:#librarymtl' scale='0.2 0.2 0.2' position='0 20 30' rotation='0 -80 0' ><a-animation attribute='rotation' from='0 -80 0' to='0 280 0' repeat='indefinite' during='6000'></a-animation></a-entity><a-entity obj-model='obj:#swannobj; mtl:#swannmtl' scale='0.2 0.2 0.2' position='0 28 15' rotation='0 -90 0' ><a-animation attribute='rotation' from='0 -90 0' to='0 270 0' repeat='indefinite' during='6000'></a-animation></a-entity><a-entity  obj-model='obj:#grantobj; mtl:#grantmtl' scale='0.2 0.2 0.2' position='0 32 -10' rotation='0 -90 0' ><a-animation attribute='rotation' from='0 -90 0' to='0 270 0' repeat='indefinite' during='6000'></a-animation></a-entity><a-entity obj-model='obj:#towerobj; mtl:#towermtl' scale='0.2 0.2 0.2' position='0 18 -35' rotation='0 -90 0' ><a-animation attribute='rotation' from='0 -90 0' to='0 270 0' repeat='indefinite' during='6000'></a-animation></a-entity><a-entity obj-model='obj:#carnegieobj; mtl:#carnegiemtl' scale='0.2 0.2 0.2' position='-30 10 -40' rotation='0 -70 0'><a-animation attribute='rotation' from='0 -70 0' to='0 290 0' repeat='indefinite' during='6000'></a-animation></a-entity><a-text text='Welcome to Gatech Historic tour. You have finished this journey.' color='#52DACA' position='-60 -3 -5' rotation= '-20 -70 10' scale='15 15 15' width='600' align='left' rotation='70 0 70'><a-plane color='#292931' width='3.2' height='1' rotation='0 0 0' position='1.3 0 -0.5' opacity='0.5' rotation= '100 -70 0'></a-plane></a-text></a-entity>  "
   console.log("finishPage")

}