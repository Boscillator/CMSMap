var jsonFile = "../JSON/cms.json"
var map;

function addMarkers()
{
    console.log("adding markers...");
    $(document).ready(function(){
        console.log("Doc Ready");
        $.getJSON( jsonFile, function( data ) {
            console.log("Got json");
            $.each(data, function(index,value){
                
                var myLatlng = new google.maps.LatLng(value.lat,value.lng);
                console.log(myLatlng);
                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map,
                    title: 'hello world'
                });
                
            });
        });
    });
}

function initialize() {
        var mapOptions = {
          center: { lat: 0, lng: 0},
          zoom: 2
        };
        map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
        addMarkers();
      }
google.maps.event.addDomListener(window, 'load', initialize);