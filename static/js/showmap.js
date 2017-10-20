function initMap(lat, lng) {

    var opts = {
        zoom: 15,
        center: new google.maps.LatLng(lat, lng)
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