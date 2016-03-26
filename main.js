$(document).ready(function(){

		var gridAmount = window.prompt("From 1 to 64, what is your grid's parameters (00 x 00)?");
		var gridSize;

		if (gridAmount === null || gridAmount === undefined || gridAmount > 64 || isNaN(gridAmount)){
			var gridSize = 16;
		} else {
			var gridSize = gridAmount;
		};

		for (var x = 0; x < gridSize; x++) {
			$('#container').append("<div class='grid'></div>");
			$('.grid').height(800 / gridSize);
		};
		for (var x = 0; x < gridSize; x++) {
			$('.grid').append("<div class='row'></div>")
			$('.row').width(800 / gridSize);
			$('.row').height(800 / gridSize);
		};

		

		$('.row').hover(
			function() {
	    		$(this).addClass( "drawing" );
	  	});
		
		$('#reset-grid').click(function(){
			$('.drawing').removeClass("drawing")
		});
		$('#reset-squares').click(function(){
			location.reload(true);
		});
	});

