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
            
        }
    });
});

$(function() {
  $(document).foundation();
  $('.printer-detail-photos').slidesjs({
      width: 253,
      height: 160,
      navigation:{active:false}
      });
    $(".printer-listing .title-bar").click(function () {
                $(this).parent().children(".printer-details").slideToggle();
                $(this).parent().toggleClass("printer-listing-selected")
        });
  $(".printer-details").slideUp();
  $(".printer-print").click(function (e) {
    $("#printer-conversation").dialog({
      width: 500,
      modal: true,
      draggable:false,
      resizable:false
    });
    e.preventDefault();
  });
  $("#printer-conversation").hide()
  $(".f-dropdown li").click(function () {
            $(this).parent().children("li").removeClass("dropdown-selected")
            $(document).foundation('dropdown', 'close', $('[data-dropdown-content]'))
            $(this).parent().parent().children("a").children("span").text($(this).text())
            $(this).addClass("dropdown-selected")
                         return false;
        })
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
/*
printerModule(printerObject) {
    <div class="printer-listing">
        <div class="large-7 columns">
            <div class="printer-name">$Printer Name</div>
            <div class="printer-description">$Printer Description</div>
        </div>
        <div class="large-2 columns">
            <div class="printer-rating">$Rating in stars ★★★★☆</div>
            <div class="printer-price">$Price in cents</div>
        </div>
        <div class="large-3 columns">
            <button>Print!</button>
            <span> </span>
        </div>
    </div>

}
*/