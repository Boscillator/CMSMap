function initialize() {
        var mapOptions = {
          center: { lat: 0, lng: 0},
          zoom: 2
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
      }
google.maps.event.addDomListener(window, 'load', initialize);