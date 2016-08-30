$("document").ready(function($){

  var sticky = new Waypoint.Sticky({
    element: $('#work')[0]
  })

//   var waypoint = new Waypoint({
//   element: document.getElementById('function-offset'),
//   handler: function(direction) {
//   },
//   offset: function() {
//     return -this.element.clientHeight
//   }
// })
$('#navbar').scrollspy()
$("#work-carousel").owlCarousel();
// Custom Navigation Events
$(".next").click(function(){
  owl.trigger('owl.next');
})
$(".prev").click(function(){
  owl.trigger('owl.prev');
})
$(".play").click(function(){
  owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
})
$(".stop").click(function(){
  owl.trigger('owl.stop');
})

// Google Maps Code

// create a LatLng object containing the coordinate for the center of the map
var latlng = new google.maps.LatLng(39.7392, -104.9903);

// prepare the map properties
var options = {
  zoom: 15,
  center: latlng,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  navigationControl: true,
  mapTypeControl: false,
  scrollwheel: false,
  disableDoubleClickZoom: true,
  styles: [
    {
    "stylers": [
      { "visibility": "simplified" },
      { "hue": "#9050a0" },
      { "saturation": -80},
      { "lightness": -30}
    ]
  },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [
                { hue: '#9050a0' },
                { saturation: 50 }
              ]
            }
          ]
};

// initialize the map object
var map = new google.maps.Map(document.getElementById('google_map'), options);

// add Marker
var marker1 = new google.maps.Marker({
  position: latlng, map: map
});

// add listener for a click on the pin
google.maps.event.addListener(marker1, 'click', function() {
  infowindow.open(map, marker1);
});

// add information window
var infowindow = new google.maps.InfoWindow({
  content:  '<div class="info">Address 1</strong><br><br>this is some content<br><img src="http://placehold.it/200x200" style="margin: 0 auto;"/></div>'
});

});
