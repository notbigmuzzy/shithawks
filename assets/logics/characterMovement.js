export const characterMovement = () => {
	var character = $('player-character'),
		currentFieldWithPlayer = $('.has-character');

	$(document).on('click','.field', function() {
		var clickedField = $(this),
			allowedFieldForPlayer = $(this).hasClass('mountain') || $(this).hasClass('coast') || $(this).hasClass('sea');

		if(!allowedFieldForPlayer) {
			character.appendTo(clickedField);
		}
	})
}