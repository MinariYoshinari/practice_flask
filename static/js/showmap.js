var marker = new Array();
var infoWindow = new Array();

function initMap(lat, lng, waypoints) {

    var opts = {
        zoom: 15,
        center: new google.maps.LatLng(lat, lng)
     };

    var map = new google.maps.Map(document.getElementById("map"), opts);

    //show fav_restaurants
    for(var i = 0; i < waypoints.length; i++){
      
      marker[i] = new google.maps.Marker({
        position: new google.maps.LatLng(waypoints[i].lat, waypoints[i].lng),
        map: map
      });
  
      markerInfo(i, waypoints);

      markerEvent(i);

    }

 }

 //show infomation
function markerInfo(i, waypoints){
    infoWindow[i] = new google.maps.InfoWindow({
        content: waypoints[i].name 
    }); 
}

//show infomation on click 
function markerEvent(i) {
    marker[i].addListener('click', function() {
        infoWindow[i].open(map, marker[i]); 
    });
}