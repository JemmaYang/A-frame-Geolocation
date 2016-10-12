function jumpBox(){
var showGlassBox = document.getElementById("firstPage");
showGlassBox.innerHTML = "<a-entity id='galssBoxdae' collada-model='#glassBox' position='0 2 -3' rotation='0 45 0' onclick='shwoArrows()'></a-entity>"
var moveBox = document.getElementById("galssBoxdae");
moveBox.innerHTML += "<a-animation attribute='position' from='-2 4 -10' to='1 -1 -1' dur='1500'repeat='1' direction='alternate' ></a-animation>"
moveBox.innerHTML +="<a-animation attribute='rotation' from='0 300 0' to='0 -60 0' during='2500' repeat='2'></a-animation>"
};


var startMessage = "Students in the School of Physics have made a Wormhole on campus as a mistake when they did experiments. If you find the Wormhole, you can travel back to 50 years ago. Exlpore the historical campus now!"



function shwoArrows(){
var displayArrows = document.getElementById("firstPage");
var changeMessage = document.getElementById("startText");
displayArrows.innerHTML = "<a-entity id='arrowsDae' collada-model='#arrows' scale='2 2 2' position='0 5 -75' rotation='-5 180 180' onclick='showPortal()'></a-entity>"
changeMessage.setAttribute("text", startMessage);
};


