$( document ).ready( function() {
	initHides();
	$("#alert").hide();
	$(".date").datepicker();

	var message = "Thanks "

	//Clicking Ok hides alert
	$("button").click( function() {
		$("#alert").hide();
	})

	//
	$("#check").click( function() {
		if ( !$("#from").val() || !$("#to").val() || !$("#name").val() ) {
			checkBlanks();
		} else if ( invalidDate() ) {
			checkBlanks();
		} else {
			initHides();
			checkBlanks();
			confirmDate();
		}

		return false;
	})

	//NecessaryHides() just to keep it clean.
	function initHides() {
		$("#errorF").hide();
		$("#errorT").hide();
		$("#errorN").hide();
		$("#invalidDate").hide();
	}

	//Creates a message confirming the date
	function confirmDate() {
		createMessage();
		$("#text").html( message );
		$("#alert").show();
	}
	//Creates the message for above function
	function createMessage() {
		message = "<p>Thanks "+$("#name").val()+"! Your trip leaves on "+$("#from").val()+" and returns on "+$("#to").val()+"!</p>";
	}

	//Validate Date
	function invalidDate() {
		if ( $("#to").val() < $("#from").val() ) {
			console.log("Disallow");
			$("#invalidDate").show();
			return true;
		}
		else {
			$("#invalidDate").hide();
			return false;
		}
	}

	//Checks input fields for blanks
	function checkBlanks() {
		checkBlank( "#from", "#errorF" );
		checkBlank( "#to", "#errorT" );
		checkBlank( "#name", "#errorN" );
	}
	function checkBlank( check, err ) {
		if ( !$( check ).val() ) {
			$( err ).show();
			$( check ).addClass("err");
		} else {
			$( err ).hide();
			$( check ).removeClass("err");
		}
	}
})