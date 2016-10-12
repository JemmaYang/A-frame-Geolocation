var portalLocations= [
//location 1 : libarry.
{
name: "Skiles Building",
latitude : 33.773576,
longitude: -84.395639
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
          var displayPortal = document.getElementById("firstPage");
          displayPortal.innerHTML = "<a-entity id='portalDae' collada-model='#portal'  position='0 3 -35' rotation='182 -90 90' onclick='show()'></a-entity>"

      }

      else
        {
          console.log("Location hasn't been reached yet.");
          resultText+="\nLocation hasn't been reached yet.";
        }
        var distanceText = document.getElementById("startText");
        distanceText.setAttribute("text", resultText);
      }

