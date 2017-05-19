;(function($){
	'use strict';

	$(window).on('load', function() {

		$('.ba-slider').slick({
			dots:true,
     		slidesToShow:1,
     		arrows:false,
     		slide:'.ba-slide',
     		// slidesToScroll:2,
     		autoplaySpeed:4000,
     		autoplay:true,
     		// centerMode:true,
     		
     	});
		$('.ba-testimonials-slider').slick({
			dots:true,
			
			slidesToShow:1,
			arrows:false,
			slide:'.ba-testimonials-slide',
     		// slidesToScroll:2,
     		autoplaySpeed:4000,
     		autoplay:true,
     		// centerMode:true,
     		
     	});
		

	});

	  // SCROLL FUNCTION

	  $('a[href*="#"]').on('click', function(){

	  	event.preventDefault();

	  	$('body').animate({
	  		scrollTop:$($(this).attr('href')).offset().top 

	  	}, 1500);

	  	

	  });

       // MAP SECTION

       function createMap () {
       	var $markers =$('.ba-marker');
       	var map = new google.maps.Map($('.ba-map')[0],{
       		zoom:18,
       		scrollwheel: false,

       		center: new google.maps.LatLng(0,0),
       		styles:[{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}],
       	});

       	addMarkers($markers, map);
       	centerMap($markers, map);
       }

       function addMarkers ($markers, map) {
       	$markers.each(function() {
       		var lat = $(this).data('lat');
       		var lng = $(this).data('lng');
       		var icon = $(this).data('icon')
       		var marker = new google.maps.Marker({
       			position: {lat: lat, lng:lng},
       			map: map,
       			icon:icon,
       		})
       		var content = $(this).find('.description').html()


       		var infoWindow = new google.maps.InfoWindow({
       			content:content,
       		})
       		marker.addListener('click', function  () {
       			infoWindow.open(map,marker);
       		});
       	});
       }

       function centerMap($markers, map) {

       	if ($markers.length == 1) {

       		var lat = $markers.data('lat');
       		var lng = $markers.data('lng');
       		var latLng = new google.maps.LatLng( lat, lng );
       		map.setCenter(latLng);
       		
       	} else { 

       		var bounds = new google.maps.LatLngBounds();

       		$markers.each( function() {
       			var lat = $(this).data('lat');
       			var lng = $(this).data('lng');
       			var latLng = new google.maps.LatLng( lat, lng );
       			bounds.extend(latLng);
       		});

       		map.fitBounds(bounds);

       	}

       }
       
       createMap()



       

   })(jQuery);

