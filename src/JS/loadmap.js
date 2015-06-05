var jsonFile = "../JSON/cms.json"
var map;

function addMarkers()
{
    console.log("adding markers...");
    $(document).ready(function(){
        console.log("Doc Ready");
        setTimeout(function(){
            console.log("timeout")
            $.getJSON( jsonFile, function( data ) {
                console.log("Got json");
                $.each(data, function(index,value){
                    
                    var myLatlng = new google.maps.LatLng(value.lat,value.lng);
                    //console.log(value.lat);
                    //console.log(value.lng);
                    //console.log(index);
                    var marker = new google.maps.Marker({
                        position: myLatlng,
                        map: map,
                        title: index
                    });
                    google.maps.event.addDomListener(marker,'click',function() {
                        if (value.img) {
                            $("#image").attr("src", value.img);
                        }
                        else {
                            $("#image").attr("src", "../IMG/na.gif");
                        }
                        if (value.web) {
                            $("#image_website").text("Website");
                            $("#image_website").attr("href",value.web);
                        }
                        else {
                            $("#image_website").text("No website listed");
                        }
                        $('#image_title').text(index);
                        $("#image_modal").modal('show'); 
                    });
                    
                });
            });
        },1);
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