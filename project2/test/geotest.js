var locations= [
//location 1 : libarry.
{
name:"Library",
latitude: 33.774192,
longitude: -84.395110
},

//location 2 : swann building.
{
name:"Swann Building",
latitude:33.7715825,
longitude:-84.3974803 
},

//location 3 : grant field.
{
name:"Grant Field",
latitude:33.7724493,
longitude:-84.3949941   
},

//location 4 : tech tower.
{
name:"Tech Tower",
latitude:33.7723604,
longitude:-84.3970267  
},

//location 5 : carnegie building.
{
name:"Carnegie Building",
latitude: 33.773705,      
longitude: -84.3970588
}
];

var maxDistance=0.055;

var geolocationOptions = {

    enableHighAccuracy: true,
    maximumAge: 0};

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



function show(){
  
  console.log("Starting the program with five places.");

  //Make the geolocation call.  This function will do the rest of the
  //variable checking for us.
  var geolocationCall = navigator.geolocation.watchPosition(checkReceivedLocation);

}



function checkReceivedLocation(positionData)
{
  
    console.log("checking five locations.");
    var resultText =" ";

    var displayCor = document.getElementById("firstPage");
      displayCor.innerHTML = "<a-entity id='cordiLib' class='Coordinates' obj-model='obj:#coordinate-obj; mtl:#coordinate-mtl' scale='0.02 0.02 0.02' position='-3 -2 -7' rotation='0 60 10'></a-entity>"
      displayCor.innerHTML += "<a-entity id='cordiSwa' class='Coordinates' obj-model='obj:#coordinate-obj; mtl:#coordinate-mtl' scale='0.02 0.02 0.02' position='-1 -2 -5' rotation='0 60 10'></a-entity>"
      displayCor.innerHTML += "<a-entity id='cordiGra' class='Coordinates' obj-model='obj:#coordinate-obj; mtl:#coordinate-mtl' scale='0.02 0.02 0.02' position='0 -2 -10' rotation='0 60 10'></a-entity>"
      displayCor.innerHTML += "<a-entity id='cordiTow' class='Coordinates' obj-model='obj:#coordinate-obj; mtl:#coordinate-mtl' scale='0.02 0.02 0.02' position='1 -2 -5' rotation='0 60 10'></a-entity>"
      displayCor.innerHTML += "<a-entity id='cordiCar' class='Coordinates' obj-model='obj:#coordinate-obj; mtl:#coordinate-mtl' scale='0.02 0.02 0.02' position='3 -2 -7' rotation='0 60 10'></a-entity>"
      displayCor.innerHTML += "<a-animation attribute='ratation' from='0 -330 0' to='0 30 0' during='2000'  repeat='indefinite' "

    var currentLocation = positionData.coords;
    for(var i=0; i<locations.length; i++){
    //calculating distance with the circleDistance script.

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

        }

        else
          {
            console.log("Location hasn't been reached yet.");
            resultText+="\nLocation hasn't been reached yet.";
          }
        var textList = document.getElementsByClassName("Coordinates")   
        textList[i].innerHTML += "<a-text id= 'distanceText' text=' ' color='#52DACA' position='-20 115 -2' width='400' align='left' scale ='60 60 60' rotation='0 -90 0'></a-text>"
        var showDistance = document.getElementById("distanceText")
        showDistance.setAttribute("text", resultText)
      }
   var debugText = document.getElementById("startText")
          debugText.setAttribute("visible", false);
}