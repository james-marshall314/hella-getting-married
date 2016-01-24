var  mn = $(".main-nav");
    mns = "main-nav-scrolled";
    hdr = $("header").height();

$(window).scroll(function() {
  if( $(this).scrollTop() > $("header").height()) {
    //mn.addClass(mns);
  } else {
    //mn.removeClass(mns);
  }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll, a.nav-link').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//highlight nav links when scrolled to section
$('body').scrollspy({ target: '.top-nav' });

$('')


// $("").click(function(){
//     alert("The paragraph was clicked.");
// });

$('a').on("click active", function(){
  //$("p").addClass('test');
  //alert("hey hey")
});

//clear button focus
$('button').mouseup(function() { this.blur() });

$('body').on("activate.bs.scrollspy", function(event){
        // var x = $(".nav li.active > a").text();
        // $("#demo").empty().html("You are currently viewing: " + x);
  //$("p").addClass('test');
  console.log(event.relatedTarget, event.target);
});

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
  
  // map = new google.maps.Map(document.getElementById('map2'), {
  //   center: {lat: -34.397, lng: 150.644},
  //   zoom: 8,
  //   mapTypeId: google.maps.MapTypeId.HYBRID
  // });
  // map = new google.maps.Map(document.getElementById('map3'), {
  //   center: {lat: -34.397, lng: 150.644},
  //   zoom: 8,
  //   mapTypeId: google.maps.MapTypeId.HYBRID
  // });
}








// Post form content to Google Forms
function postContactToGoogle() {
  var first = $('#First').val();
  var last = $('#Last').val();

  $.ajax({
    url: "https://docs.google.com/forms/d/1cZfgyAcljlKFfge-oujCsDxxl9Ed6KjX8ISjWrmE3_o/formResponse?",
    data: { 
      "entry.1726430803": first, 
      "entry.753165449": last 
    },
    type: "POST",
    //contentType: "text/plain",
    //dataType: "text/plain",
    accepts: "text/plain",

    statusCode: {
      0: function () {
        //window.location.replace("ThankYou.html");
        alert("Thanks!");
        $('h1').text('Hi ' + "shithead" + "!");
      },
      200: function () {
        //window.location.replace("ThankYou.html");
        //alert("Thanks!");
        $('h1').text('Hi ' + first + "!");
        $('input-form').reset();
      }
    }
  });
}

map();



