var ifTravelFinished = false;

//var visitedNum = 0;

var visitedPlace = " ";

function countNum(){
  
  visitedNum ++ ;
  console.log(visitedNum);

  //var hideRobot = document.getElementById("robotContainer");

  //hideRobot.setAttribute("visible",false);
 
  


  //visitedPlace += locations[i].name;

  //console.log(visitedPlace) ;

  if(visitedNum>=locations.length)
    {
      //We are finished.  We can stop fetching locations.
      navigator.geolocation.clearWatch(geolocationCall);
      ifTravelFinished = true;
     }

};