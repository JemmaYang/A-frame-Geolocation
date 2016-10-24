var portalLocations= [
//location 1 : libarry.
{
name: "Skiles Building",

//real position
latitude : 33.773688,
longitude: -84.395913


//apartment
// latitude : 33.777390,
// longitude: -84.408428

//tech square
//latitude : 33.777238,
//longitude: -84.390215

},

];


var locations= [
//location 1 : libarry.
{
name:"Library",
//real location
latitude: 33.7740584,
longitude: -84.395784



},

//location 2 : swann building.
{
name:"Swann Building",
//real location
 latitude:33.7715825,
 longitude:-84.3974803 
// latitude : 33.777390,
//  longitude: -84.408428
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



//var geolocationCall;


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
