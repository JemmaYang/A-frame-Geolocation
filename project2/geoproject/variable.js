var portalLocations= [
//location 1 : libarry.
{
name: "Skiles Building",
//latitude : 33.773688,
//longitude: -84.395913
latitude : 33.777390,
longitude: -84.408428
},


];


function circleDistance(lon1, lat1, lon2, lat2) {
  var R = 6371; // Radius of the earth in km
  var dLat = (lat2-lat1).toRad();  // Javascript functions in radians
  var dLon = (lon2-lon1).toRad();
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
          Math.sin(dLon/2) * Math.sin(dLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d;
}

/** Converts numeric degrees to radians */
if (typeof(Number.prototype.toRad) === "undefined") {
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }
}


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
     console.log(portalLocations[0].longitude);
     console.log(portalLocations[0].latitude);


    if (newDistance <= 0.055 )
      {
          //You have reached the location.
         
          resultText+="\nYou have found the time machine!\nBegin to travel in Time!";
          console.log("Location was reached. Updating scene now.");
          var displayPortal = document.getElementById("firstPage");
          displayPortal.innerHTML = "<a-entity id='timeMachine' obj-model='obj:#timemachine-obj; mtl:#timemachine-mtl' scale='0.05 0.05 0.05' position='0 -2 -5' rotation='0 60 10' onclick='show()'></a-entity>"
       
          
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
        var planeSize = document.getElementById("messagePlane");
        planeSize.setAttribute("height", 1.5);
        planeSize.setAttribute("position",{x:1.3,y:0.2,z:-0.5});
      }

