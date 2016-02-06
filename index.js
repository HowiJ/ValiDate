$( document ).ready( function() {
	console.log('ready');
	$("#alert").hide();
	$("#errorN").hide();
	$(".date").datepicker();

	//Clicking Ok hides alert
	$("button").click( function() {
		$("#alert").hide();
	})

	//
	$("#check").click( function() {
		if ( !$("#from").val() || !$("#to").val() || !$("#name").val() ) {
			console.log("no");
			$("#errorN").show();
		} else {
			console.log("yes");
			$("#errorN").hide();
			$("#alert").show();
		}

		return false;
	})
})