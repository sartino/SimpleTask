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

	var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' +
		(Math.floor(Math.random() * 256)) + ',' +
		(Math.floor(Math.random() * 256)) + ')';
	$('#randomText').click(function () {
		$(this).css("color", hue);
	});

	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
		$("#randomText2").click(function () {
			$(this).css("color", color);
		});
	};

	$('#emptyDiv').click(function () {
		$(this).append(' Steve Sartino');
	});

	var arr = ['Steve', ' Mike', ' James', ' Gene', ' Ralph', ' Daniel'];
	$('#arrayul').append(arr);

});
