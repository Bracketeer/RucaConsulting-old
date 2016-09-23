$(document).ready(function() {

	$('.navbar-collapse ul li a').click(function(){
            $('.navbar-toggle:visible').click();
    });

var owlWork = $("#work-carousel");
var owlTestimonial = $("#testimonial-carousel")

owlWork.owlCarousel({
      items : 5, //10 items above 1000px browser width
      itemsDesktop : [1000,3], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,2], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });
owlTestimonial.owlCarousel({
      items : 3, //10 items above 1000px browser width
      itemsDesktop : [1000,3], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,2], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });

  $('#fullpage').fullpage({
      //Navigation
			menu: true,
      menu: '#ruca-menu',
      lockAnchors: false,
      anchors: ['home', 'promise', 'services', 'testimonials', 'work', 'about', 'contact'],
      navigation: false,
      navigationPosition: 'right',
      navigationTooltips: ['home', 'promise', 'services', 'testimonials', 'work', 'about', 'contact'],
      showActiveTooltip: true,
      slidesNavigation: true,
      slidesNavPosition: 'bottom',

      //Scrolling
      css3: true,
      scrollingSpeed: 700,
      autoScrolling: true,
      fitToSection: true,
      fitToSectionDelay: 1000,
      scrollBar: false,
      easing: 'easeInOutCubic',
      easingcss3: 'ease',
      loopBottom: false,
      loopTop: false,
      loopHorizontal: true,
      continuousVertical: false,
      continuousHorizontal: true,
      scrollHorizontally: true,
      interlockedSlides: false,
      resetSliders: false,
      fadingEffect: true,
      normalScrollElements: '#element1, .element2',
      scrollOverflow: true,
      scrollOverflowOptions: null,
      touchSensitivity: 30,
      normalScrollElementTouchThreshold: 5,
      bigSectionsDestination: null,
			scrollOverflow: true,

      //Accessibility
      keyboardScrolling: true,
      animateAnchor: false,
      recordHistory: true,

      //Design
      controlArrows: true,
      verticalCentered: true,
      // paddingTop: '3em',
      // paddingBottom: '10px',
      fixedElements: '#header, .footer',
      responsiveWidth: 0,
      responsiveHeight: 0,
      responsiveSlides: false,

      //Custom selectors
      sectionSelector: '.section',
      slideSelector: '.slide',

      //events
      onLeave: function(index, nextIndex, direction){},
      afterLoad: function(anchorLink, index){},
      afterRender: function(){},
      afterResize: function(){},
      afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
      onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
  });

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
