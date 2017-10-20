function initMap() {
    var center_lat = (origin_lat + destination_lat)/2;
    var center_lng = (origin_lng + destination_lng)/2;

    var opts = {
        zoom: 15,
        center: new google.maps.LatLng(center_lat, center_lng)
     };
    var map = new google.maps.Map(document.getElementById("map"), opts);
    console.log(origin_lat);
    console.log(origin_lng);
 }