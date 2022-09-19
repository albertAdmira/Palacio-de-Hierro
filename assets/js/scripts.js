$(document).ready(function(){
  
	$(".scrollBtn").click(function(){
    	$(".momentum,.banner-explorar-area").slideUp("slow");
  	});

	$(".scrollBtn").click(function(){
		$(".momentum").addClass("show");
	});


	var brandLogos = [
		"acer","asus","bose","bosé","dell","echo","fitbit-luxe",
		"fitbit-sense","garmin","google","homedics","hp","hypervolt-bluetooth","jetson",
		"joy-resolve","kef","kindle","krups","lenovo","lg","mavic-3","miele",
		"monitor-audio","msi","polar-pacer-pro","roku","samsung","sonos","sony",
	]

	$(".signature").click(function(){

		brandLogos.forEach((element) => {

			
			if(element === 'acer' || element === 'Acer') {
				element = "acer/predator";
			}
			
			var finalSrc = `assets/images/${element}/${element}-logo.ai`;

			console.log(finalSrc)

			$(".brand-grid").append(
				`<div class="brand-container">
					<img src=${finalSrc} alt="${element}" data-bs-toggle="modal" data-bs-target="#brandModal" class="signature"></img>
				</div>`
			);
			
		});
	})

	$("#close-modal").click(function(){
	})

	
});


// $('.back-video').play();