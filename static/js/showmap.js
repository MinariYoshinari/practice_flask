function initMap(center_lat, center_lng) {
    var center_lat = (origin_lat + destination_lat)/2;
    var center_lng = (origin_lng + destination_lng)/2;

    var opts = {
        zoom: 15,
        center: new google.maps.LatLng(center_lat, center_lng)
     };


    var map = new google.maps.Map(document.getElementById("map"), opts);

    var m_latlng1 = new google.maps.LatLng(38.26017, 140.871184);
    var marker1 = new google.maps.Marker({
      position: m_latlng1,
      map: map
    });
    infoWindow = new google.maps.InfoWindow({ // 吹き出しの追加
      content: '<div>場所</div>' // 吹き出しに表示する内容
    });
    marker.addListener('click', function() { // マーカーをクリックしたとき
      infoWindow.open(map, marker); // 吹き出しの表示
    });


 }