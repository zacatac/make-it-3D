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
            
            $('#map').gmap('setOptions',{mapTypeId: google.maps.MapTypeId.ROADMAP})
        }
    });
});



printer=[{
         name:'My Printer',
         id:'1',
         desc:'This printer prints well, and quickly',
         rating:4,
         owner:{
            lat: 37.87043207190647,
            long: -122.26816536668125,
            name: "Maker Man",
            speed: 24
         },
         materials:{
         0:{
            material:"ABS",
            price:22
            },
         1:{
            material:"ceramic",
            price:15
            }
         }

}]