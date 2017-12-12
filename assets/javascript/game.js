$(document).ready(function(){
	var gemValue; 
	var wins = 0;
	var losses = 0;
	var points = 0; 
	var random = Math.floor(Math.random() * (120-19)+19);
	var redCrystal = $("#red");
	var blueCrystal = $("#blue");
	var orangeCrystal = $("#orange");
	var rainbowCrystal = $("#rainbow");
	var displayNumber  = $("#displayNumber");

	initializeGame();

	function initializeGame (){
		random = Math.floor(Math.random() * (120-19)+19);
		displayNumber.text(random);
		valueAssigner(redCrystal);
		valueAssigner(blueCrystal);
		valueAssigner(orangeCrystal);
		valueAssigner(rainbowCrystal);

	};




// Assigns a value to each crystal for the round 

function valueAssigner(img){
	gemValue = Math.floor(Math.random() * (12-1)+1);
	img.attr("data-crystalValue", gemValue);
	// var crystalValue = (img.attr("data-crystalValue"));
	// crystalValue = parseInt(crystalValue);
	console.log("My Value is: " + img.attr("data-crystalValue"));
}


	// Updates points, notifies upon win or loss, restarts game
	// with no need for refreshing page 

	$(".crystal-pics").on("click", function(){

		var crystalValue = parseInt($(this).attr("data-crystalValue"));

		points += crystalValue;

		$("#totalScore").html(points);


		if (points == random) {
			wins++;
			$("#wins").text(wins);
			// img.removeData("data-crystalValue") 
			points = 0; 
			initializeGame();


		} else if (points < random) {
				console.log("The value of this crystal is: " + crystalValue);
			} else if (points > random) {
				losses++;
				$("#losses").text(losses);
				// img.removeData("data-crystalValue")  
				points = 0; 
				initializeGame();

			}


		});

});

































