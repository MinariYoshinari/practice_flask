    function initMap() {
      var opts = {
        zoom: 15,
        center: new google.maps.LatLng(destination_lat,destination_lng)
      };
      var map = new google.maps.Map(document.getElementById("map"), opts);
      console.log(origin_lat);
      console.log(origin_lng);
    }