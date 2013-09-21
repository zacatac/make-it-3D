$(function() {
    $('#map').gmap('getCurrentPosition', function(position, status) {
        if ( status === 'OK' ) {
            var clientPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            $('#map').gmap('addMarker', {'position': clientPosition, 'bounds': true});
            $('#map').gmap('addShape', 'Circle', {
                'strokeWeight': 0,
                'fillColor': "#008595",
                'fillOpacity': 0.25,
                'center': clientPosition,
                'radius': 15,
                'clickable': false
            });
            
            $('#map').gmap('setOptions',{MapTypeID:SATELLITE})
        }
    });
});


var mapOptions = {
center: new google.maps.LatLng(37.09024, -95.712891),
zoom: 4, // smaller number --> zoom out
mapTypeId: google.maps.MapTypeId.TERRAIN,
    
    // removing all map controls
disableDefaultUI: true,
    
    // prevents map from being dragged
draggable: false,
    
    // disabling all keyboard shortcuts
keyboardShortcuts: false,
    
disableDoubleClickZoom: true,
    
    // do not clear the map div
noClear: true
};
