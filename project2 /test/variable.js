var portalLocations= [
//location 1 : libarry.
{
name: "Skiles Building",
latitude : 33.773576,
longitude: -84.395639
},


];




function showPortal(){
  
   var displayPortal = document.getElementById("firstPage");
   displayPortal.innerHTML = "<a-entity id='timeMachine' obj-model='obj:#timemachine-obj; mtl:#timemachine-mtl' scale='0.05 0.05 0.05' position='0 -2 -5' rotation='0 60 10' onclick='show()'></a-entity>"
  
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


     resultText += "\nThe Wormhole Portal is "+ newDistance.toFixed(4)+" km.";

    console.log(resultText);
     console.log(currentLocation.longitude);
     console.log(currentLocation.latitude);
     console.log(locations[0].longitude);
     console.log(locations[0].latitude);


    if (newDistance <= maxDistance )
      {
          //You have reached the location.
         
          resultText+="\nLocation was reached!";
          console.log("Location was reached. Updating scene now.");
         

      }

      else
        {
          console.log("Location hasn't been reached yet.");
          resultText+="\nLocation hasn't been reached yet.";
        }
        var distanceText = document.getElementById("startText");
        distanceText.setAttribute("text", resultText);
      }

