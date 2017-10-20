var marker = new Array();
var infoWindow = new Array();

function initMap(lat, lng, stores) {

  var opts = {
    zoom: 15,
    center: new google.maps.LatLng(lat, lng)
  };

  var map = new google.maps.Map(document.getElementById("map"), opts);

  //show fav_restaurants
  for(var i = 0; i < stores.length; i++){
      
    putMarker(i, stores, map);
  
    addInfo(i, stores);

    clickEvent(i);

  }

}


function putMarker(i, stores, map){
  marker[i] = new google.maps.Marker({
    position: new google.maps.LatLng(stores[i].lat, stores[i].lng),
    map: map
  }); 
}

//show infomation
function addInfo(i, stores){
  infoWindow[i] = new google.maps.InfoWindow({
    content: stores[i].name 
  }); 
}

//show infomation on click 
function clickEvent(i) {
  marker[i].addListener('click', function() {
    infoWindow[i].open(map, marker[i]); 
  });
}