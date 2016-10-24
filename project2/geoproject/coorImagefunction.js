

// function circleDistance(lon1, lat1, lon2, lat2) {
//   var R = 6371; // Radius of the earth in km
//   var dLat = (lat2-lat1).toRad();  // Javascript functions in radians
//   var dLon = (lon2-lon1).toRad();
//   var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
//           Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
//           Math.sin(dLon/2) * Math.sin(dLon/2);
//   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
//   var d = R * c; // Distance in km
//   return d;
// }

// /** Converts numeric degrees to radians */
// if (typeof(Number.prototype.toRad) === "undefined") {
//   Number.prototype.toRad = function() {
//     return this * Math.PI / 180;
//   }
// }



function show(){

  
  
  console.log("Starting the program with five places.");
   
  //Make the geolocation call.  This function will do the rest of the
  //variable checking for us.
  geolocationCall = navigator.geolocation.watchPosition(checkReceivedLocation, geo_error, geo_options);
  infoWindow = new google.maps.InfoWindow({map: map});

}



function checkReceivedLocation(positionData)
{
    
    var hideTimeMachine = document.getElementById("firstPage");
   hideTimeMachine.innerHTML =" ";

    var displayCor = document.getElementById("coordiContainer");
    displayCor.setAttribute("visible",true);
  //var addDivMenu = document.body;
  //addDivMenu.innerHTML = addDivMenu.innerHTML + "<div id='footArea'><div>You have visited: </div></div>";

    var imageIndex = document.getElementsByClassName("oldImage");
    var textList = document.getElementsByClassName("CoordText");
    console.log(imageIndex);

    console.log("checking five locations.");

    var currentLocation = positionData.coords;

    //try combine map

    finishtour();

     var pos = {
         lat: currentLocation.latitude,
         lng: currentLocation.longitude

       };

       console.log("run here");
      infoWindow.setPosition(pos);
      infoWindow.setContent('Your position.');

      //try combine  map
   

    
    
    for(var i=0; i<locations.length; i++){
    //calculating distance with the circleDistance script.
      var resultText =" ";

      var newDistance=circleDistance(currentLocation.longitude,
                                   currentLocation.latitude,
                                   locations[i].longitude,
                                   locations[i].latitude);


      resultText += "\n"+locations[i].name+" is "+ newDistance.toFixed(4)+" km.";

      console.log(resultText);
      console.log(currentLocation.longitude);
      console.log(currentLocation.latitude);
      console.log(locations[i].longitude);
      console.log(locations[i].latitude);


      if (newDistance <= maxDistance )
        {
          //You have reached the location.
         
          resultText+="\nLocation was reached! Updating scene now.";
          console.log("Location was reached. Updating scene now.");

          var showImagePlane = document.getElementsByClassName("historicImage");
          showImagePlane[i].setAttribute("visible",true);
          //showImagePlane.innerHTML += "<a-entity id='robotContainer' visible = 'true' ><a-entity id='robotSecond' obj-model='obj:#robot-obj; mtl:#robot-mtl' scale='0.05 0.05 0.05' position='0 0 2' rotation='0 -25 0' onclick='countNum()'></a-entity></a-entity>"

          var getImage = imageIndex[i].src;
          showImagePlane[i].setAttribute("src", getImage);

          var displayCor = document.getElementById("coordiContainer");
          displayCor.setAttribute("visible",false);

          console.log(locations[i].name);

          var showGotSign = document.getElementsByClassName("signFinish");
          console.log(showGotSign[i]);
          showGotSign[i].setAttribute("visible",true);

          //var addPlaceMenu =document.getElementById("footArea")
          //addPlaceMenu.innerHTML += "<div>"+ locations[i].name +"</div>"
          //console.log(addPlaceMenu.innerHTML);

        }

        else 
          {
            
            console.log("Location hasn't been reached yet.");
            resultText+="\nLocation hasn't been reached yet.";
           var hideImagePlane = document.getElementsByClassName("historicImage");
           hideImagePlane[i].setAttribute("visible",false);
          }

        textList[i].setAttribute("text",resultText) ;
      }

          var debugText = document.getElementById("startText")
          debugText.setAttribute("visible", false);
}


function finishtour(){
  var signCollect = document.getElementsByClassName("signFinish")
  var signVisible = new Array(5);
  var ifTourFinish = false;
  for(var a=0; a<signCollect.length; a++){
     signVisible[a] = signCollect[a].getAttribute("visible")};

     console.log(signVisible);

  for(var c=0; c<signVisible.length; c++){
    console.log(signVisible[c]);
    if(signVisible[c]==true){
       ifTourFinish = true;

    }
    else{
      ifTourFinish = false;
      break};
  }

     console.log(ifTourFinish);

   if (ifTourFinish==true){
    var showFinishText = document.getElementById("firstPage")
    showFinishText.innerHTML ="<a-text id='youFinished' text='You have completely visited five historical places in this tour. Do you want to finish this tour?' color='#52DACA' position='-2 0 -2' scalse='1.2 1.2 1.2' width='500' align='left' onclick='finishThisTour()'></a-text>"
    var finishTextPlane = document.getElementById("youFinished")
    finishTextPlane.innerHTML = "<a-plane color='#292931' width='3.2' height='1.5' rotation='0 0 0' position='1.2 0.5 -0.5' opacity='0.5'></a-plane>"
       console.log("finish.")  
   }
  
};
