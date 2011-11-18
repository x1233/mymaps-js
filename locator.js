	$.fx.speeds._default = 1000;
	function handleMap(){
		$("#map").dialog("open");
		
		var mylatLng = new google.maps.LatLng(10.951332919520652, 108.25180038987924);
		var myOptions = {
			zoom: 15,
			center: mylatLng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
	  	}
	  	var map = new google.maps.Map($("#map")[0], myOptions);
		var marker = new google.maps.Marker();
		var geocoder = new google.maps.Geocoder();
		marker.setPosition(mylatLng);
		marker.setDraggable(true);
		marker.setMap(map);
		google.maps.event.addListener(marker, 'dragend', 
			function() { 
				mylatLng=marker.getPosition();
//	            $('#lng').val(mylatLng.lng()); 
//	            $('#lat').val(mylatLng.lat()); 
//				geocoder.geocode({'latLng': mylatLng}, 
//					function(results, status) {
//						if (status == google.maps.GeocoderStatus.OK)
//	                       	$('#address').val(results[1].formatted_address); 
//						else $('#address').val("Geocoder failed due to: " + status);
//					}
//				);
	         } 
	     ); 
		
		return false;
	}
	
	$(function() {
		$( "#map" ).dialog({
			autoOpen: false,
			show: "blind",
			hide: "explode",
			height: 500,
			width: 600
		});

		$("#widgetkit").delegate(".loc-data","click", handleMap);
	});