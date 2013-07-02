$(document).ready(function(){
	$('#get_color').on('click', function() {
		$.ajax({
			type: 'POST',
			url: '/color'
		}).done( function (response) {
			relevant_square = $('#color_me li:nth-child(' + response["cell"] + ')');
			relevant_square.css('background-color', response["color"]);
		});
	});
});