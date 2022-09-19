$(document).ready(function(){
  
	$(".scrollBtn").click(function(){
    	$(".momentum,.banner-explorar-area").slideUp("slow");
  	});
	$(".scrollBtn").click(function(){
		$(".momentum").addClass("show");
	});

	var brandLogos = [
		"acer",
		"asus",
		"bose",
		"bosé",
		"dell",
		"echo",
		"fitbit-luxe",
		"fitbit-sense",
		"garmin",
		"google",
		"homedics",
		"hp",
		"hypervolt-bluetooth",
		"jetson",
		"joy-resolve",
		"kef",
		"kindle",
		"krups",
		"lenovo",
		"lg",
		"mavic-3",
		"miele",
		"monitor-audio",
		"msi",
		"polar-pacer-pro",
		"roku",
		"samsung",
		"sonos",
		"sony",
	]

	brandLogos.forEach(element => console.log(element));
	
});


// $('.back-video').play();