$(document).ready(function() {

	$(".nav-links").on("mouseover", function() {
		$(this).css({
			"color": "green"
		});
	});

	$(".nav-links").on("mouseout", function() {
		$(this).css({
			"color": "white"
		});
	});

});