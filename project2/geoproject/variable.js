var portalLocations= [
//location 1 : libarry.
{
name: "Skiles Building",
latitude : 33.774313,
longitude: -84.396504
},


];




function showPortal(){
  
  console.log("Starting portal program.");

  //Make the geolocation call.  This function will do the rest of the
  //variable checking for us.
  var geolocationCall = navigator.geolocation.watchPosition(checkPortalLocation);
  
}



function checkPortalLocation(positionData)
{
  
    console.log("checking portal location.");
    var resultText =" ";

    var currentLocation = positionData.coords;
   
    //calculating distance with the circleDistance script.

    var newDistance=circleDistance(currentLocation.longitude,
                                   currentLocation.latitude,
                                   portalLocations[0].longitude,
                                   portalLocations[0].latitude);


     resultText += "\nThe Time machine is "+ newDistance.toFixed(4)+" km.";

    console.log(resultText);
     console.log(currentLocation.longitude);
     console.log(currentLocation.latitude);
     console.log(locations[0].longitude);
     console.log(locations[0].latitude);


    if (newDistance <= maxDistance )
      {
          //You have reached the location.
         
          resultText+="\nYou have found the time machine!\nBegin to travel in Time!";
          console.log("Location was reached. Updating scene now.");
          var displayPortal = document.getElementById("firstPage");
          displayPortal.innerHTML = "<a-entity id='timeMachine' obj-model='obj:#timemachine-obj; mtl:#timemachine-mtl' scale='0.05 0.05 0.05' position='0 -2 -5' rotation='0 60 10' onclick='show()'></a-entity>"
          displayPortal.innerHTML += "<a-animation attribute='scale' from='0.4 0.4 0.4' to='0.9 0.9 0.9' during='2500' ></a-animation>"
      }

      else
        {
          console.log("Location hasn't been reached yet.");
          resultText+="\nLocation hasn't been reached yet.";
          var moveRobot = document.getElementById("robotobj")
          moveRobot.innerHTML += "<a-animation attribute='scale' from='0.04 0.04 0.04' to='0.05 0.05 0.05' during='2500' direction='alternate' repeat='2'></a-animation>"
        }
        var distanceText = document.getElementById("startText");
        distanceText.setAttribute("text", resultText);
      }

