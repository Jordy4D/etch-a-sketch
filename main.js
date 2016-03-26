$(document).ready(function(){

		for (var x = 0; x < 16; x++) {
			$('#container').append("<div class='grid'></div>")
		};
		for (var x = 0; x < 16; x++) {
			$('.grid').append("<div class='row'></div>")
		};

		

		$('.row').hover(
			function() {
	    		$(this).addClass( "drawing" );
	  	});
		
		$('button').click(function(){
			$('.drawing').removeClass("drawing")
		});
	
	});

