

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

          var showImagePlane = document.getElementById("historicImage");
          showImagePlane.setAttribute("visible",true);
          //showImagePlane.innerHTML += "<a-entity id='robotContainer' visible = 'true' ><a-entity id='robotSecond' obj-model='obj:#robot-obj; mtl:#robot-mtl' scale='0.05 0.05 0.05' position='0 0 2' rotation='0 -25 0' onclick='countNum()'></a-entity></a-entity>"

          var getImage = imageIndex[i].src;
          showImagePlane.setAttribute("src", getImage);

          var displayCor = document.getElementById("coordiContainer");
          displayCor.setAttribute("visible",false);

          console.log(locations[i].name);

          //var addPlaceMenu =document.getElementById("footArea")
          //addPlaceMenu.innerHTML += "<div>"+ locations[i].name +"</div>"
          //console.log(addPlaceMenu.innerHTML);

        }

        else 
          {
            
            console.log("Location hasn't been reached yet.");
            resultText+="\nLocation hasn't been reached yet.";
          }

        textList[i].setAttribute("text",resultText) ;
      }

          var debugText = document.getElementById("startText")
          debugText.setAttribute("visible", false);
}

