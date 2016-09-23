$(document).ready(function() {

var owl = $("#work-carousel");

owl.owlCarousel({
      items : 5, //10 items above 1000px browser width
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
      autoScrolling: false,
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
      scrollOverflow: false,
      scrollOverflowOptions: null,
      touchSensitivity: 15,
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
});
