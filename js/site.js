var  mn = $(".main-nav");
    mns = "main-nav-scrolled";
    hdr = $("header").height();

$.fn.scrollEnd = function(callback, timeout) {          
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll, a.nav-link, a.section-link').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//highlight nav links when scrolled to section
$('body').scrollspy({ target: '.top-nav' });

//clear button focus
$('button, a.nav-link.active, #uber, #lyft').mouseup(function() { this.blur() });
$('body').on("activate.bs.scrollspy", function(){ $('a').blur() });

//hide nav at rsvp
$('body').on('activate.bs.scrollspy', function() {
  var section = $('a.nav-link.active').attr("href");
  console.log(section);
  if (section === '#the-rsvp') {
    $("#main-nav").fadeOut(300);
  }
  else {
    $('.main-nav').fadeIn(300);
    // $('#cover').hide(); 
    //$('html,body').scrollTop(0);
  }
});

// $('#cover').click(function(){ 
//   $('#cover').fadeOut(); 
//   $(window).scrollTop();
// });

//show nav after rsvp link is clicked
$('#RSVP').click(function(){ $('.main-nav').fadeIn(300); });

// Google Maps //
var layer = "watercolor";
var map;
function map() {
  map = new google.maps.Map(document.getElementById('map1'), {
    center: {lat: 34.113724, lng: -118.585842}, //34.113724, -118.585842
    zoom: 10,
    disableDefaultUI: true,
    mapTypeId: layer,
    mapTypeControlOptions: {
        mapTypeIds: [layer]
    }

  });
  map.mapTypes.set(layer, new google.maps.StamenMapType(layer));
  var marker = new google.maps.Marker({
    position: {lat: 34.113724, lng: -118.585842},
    map: map,
    title: 'Hello World!'
  });

  // $(window).scroll(function() { 
  //   map.setOptions({ scrollwheel: false });
  // });
  // $(window).scrollEnd(function(){
  //     map.setOptions({ scrollwheel: true });
  // }, 500);
  
  map.setOptions({ disableDefaultUI: false })
  map.setOptions({ scrollwheel: false });
}




