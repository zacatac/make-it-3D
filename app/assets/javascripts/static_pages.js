window.mkit = window.mkit || {};

mkit.home = (function($, mkit){
	var init = function(){
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
            
            $('#map').gmap('setOptions',{mapTypeId: google.maps.MapTypeId.ROADMAP})
        }
    });
	}

	return {
		init: init
	}
})(jQuery, mkit);