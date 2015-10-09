$(document).ready(function () {

	$('#button').click(function () {
		alert('You clicked me!');
	});

	$('#button2').click(function () {
		alert($("#inputText").val());
	});

	$('#hoverBlue').on({
		mouseenter: function () {
			$(this).addClass("hover");
		},
		mouseleave: function () {
			$(this).removeClass("hover");
		}
	})

	$('#redText').click(function () {
		$(this).css('color', 'red');
	});

	$('#randomText').click(function () {
		$(this).animate({
			'color': 'rgb(' + (Math.floor(Math.random() * 256)) + ',' +
			(Math.floor(Math.random() * 256)) + ',' +
			(Math.floor(Math.random() * 256)) + ')'
		}, 500);
	});



});