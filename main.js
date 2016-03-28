$(document).ready(function(){

		var gridSize;
		var gridAmount;

		//asks user to decide how fine the drawing's lines will be
		gridAmount = window.prompt("From 1 to 64, what is your grid's square parameters (00 x 00)?");

		if (gridAmount === "", null, undefined, false){
			gridSize = 16;
		} else if (gridAmount < 1 ||gridAmount > 64 || isNaN(gridAmount)) {
			gridSize = window.prompt("Please choose a number in the given range (1 through 64)");
		} else {
			gridSize = gridAmount;
		};


		//Below is the function to generate the size and amount of squares, given gridSize
		function grid() {

			for (x = 0; x < gridSize; x++) {
				$('#container').append("<div class='grid'></div>");
				$('.grid').height(800 / gridSize);
			};
			for (x = 0; x < gridSize; x++) {
				$('.grid').append("<div class='row'></div>")
				$('.row').width(800 / gridSize);
				$('.row').height(800 / gridSize);
			};
		};

		grid(gridSize);

		//the function used to draw the line based on the mouse movements

		$('.row').hover(function() {
	    	$(this).addClass( "drawing" );
	  	});
		
		//two requested buttons' functionality

		$('#reset-grid').click(function(){
			$('.drawing').removeClass("drawing")
		});
		$('#reset-squares').click(function(){
			location.reload(true);
			
		});
		
});

