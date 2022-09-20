$(document).ready(function(){

	const marca = "acer-logo";
	var body_cointainer = $(".momentum-body-1");
	body_cointainer.attr("id", marca)
	
	$(".scrollBtn").click(function(){
    	$(".momentum,.banner-explorar-area").slideUp("slow");
  	});

	$(".scrollBtn").click(function(){
		$(".momentum").addClass("show");
	});


	var brandLogos = [
		"acer","asus","bose","dell","echo","fitbit-luxe",
		"fitbit-sense","garmin","google","homedics","hp","hypervolt-bluetooth","jetson",
		"joy-resolve","kef","kindle","krups","lenovo","lg","mavic-3","miele",
		"monitor-audio","msi","polar-pacer-pro","roku","samsung","sonos","sony",
	]

	$(".signature").dblclick(function(event){
		
		event.preventDefault();

		$(".momentum-body").append(
			`<div class="modal fade" id="brandModal" tabindex="-1" aria-labelledby="brandModalLabel" aria-hidden="true">
			<div class="modal-dialog">
			  <div class="modal-content">
			  <div class="modal-header">
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body brand-grid"></div>
			  </div>
			</div>
		  </div>`
		);

		brandLogos.forEach((element) => {
			
			var finalSrc = `assets/images/${element}/${element}-logo.png`;

			$(".brand-grid").append(
				`<div class="brand-container">
					<button type="button" class="btn ${element}">
						<img src=${finalSrc} alt="${element}" data-bs-toggle="modal" data-bs-target="#brandModal" class="signature"></img>
					</button>
				</div>`
			);
		});
	})



	$(".modal").on("hidden.bs.modal", function(){
		$(".brand-container").remove()
	});
	
});


// $('.back-video').play();