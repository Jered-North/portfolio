$(document).ready(function() {

	$('.nav-links').on('mouseover', function() {
		$(this).css({
			color: "green"
		});
	});

	$('.nav-links').on('mouseout', function() {
		$(this).css({
			color: "white"
		})
	});

	$('.resume-download a').on('mouseover', function() {
		$(this).css({
			color: "lime"
		});
	});

	$('.resume-download a').on('mouseout', function() {
		$(this).css({
			color: "white"
		})
	});


});