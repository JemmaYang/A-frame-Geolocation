var myCenter=new google.maps.LatLng(33.7730,-84.3960);
var infoWindow;
var map;
	
// var locations= [
// //location 1 : libarry.
// {
// name:"Library",
// //real location
// latitude: 33.7740584,
// longitude: -84.395784


// },

// //location 2 : swann building.
// {
// name:"Swann Building",
// //real location
// latitude:33.7715825,
// longitude:-84.3974803 
// },

// //location 3 : grant field.
// {
// name:"Grant Field",
// latitude:33.7724493,
// longitude:-84.3949941   
// },

// //location 4 : tech tower.
// {
// name:"Tech Tower",
// latitude:33.7723604,
// longitude:-84.3970267  
// },

// //location 5 : carnegie building.
// {
// name:"Carnegie Building",
// latitude: 33.773705,      
// longitude: -84.3970588
// }
// ];

function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:16,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

console.log("show the map.")

var marker;

    for (var i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i].latitude, locations[i].longitude),
        
      });
	
marker.setMap(map);
}



//   // Try HTML5 geolocation.
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(yourPosition, get_error, geolocation_options
//       );
//   } 

//   else {
//      //Browser doesn't support Geolocation
//     handleLocationError(false, infoWindow, map.getCenter());
//   }
 }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(browserHasGeolocation ?
//                         'Error: The Geolocation service failed.' :
//                         'Error: Your browser doesn\'t support geolocation.');

// };


 google.maps.event.addDomListener(window, 'load', initialize);


// function yourPosition(position) {
//        var pos = {
//          lat: position.coords.latitude,
//          lng: position.coords.longitude

//        };
//        console.log("run here");
//        infoWindow.setPosition(pos);
//       infoWindow.setContent('Your position.');
      
//      }

 

//  function get_error() {
//    alert("Sorry, your position is not available.");
//  }


//  var geolocation_options = {
//    enableHighAccuracy: true, 
//    maximumAge        : 100, 
//    //timeout           : 27000
//  };