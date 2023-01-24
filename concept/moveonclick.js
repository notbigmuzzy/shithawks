//MOVE ON CLICK
$(document).on('click','.field', function() {
	var clickedField = $(this),
		characterInCar = $('.has-character').hasClass('has-car'),
		characterInBoat = $('.has-character').hasClass('has-boat'),
		canHavePlayer = clickedField.hasClass('can-have-player'),
		forbidenFieldForPlayer = clickedField.hasClass('mountain') || 
								 clickedField.hasClass('bridge') || 
								 clickedField.hasClass('highway') && !clickedField.hasClass('has-car') ||
								 clickedField.hasClass('coast') && !clickedField.hasClass('has-boat') ||
								 clickedField.hasClass('sea');

	if (characterInCar) {
		forbidenFieldForPlayer = clickedField.hasClass('mountain') ||
								 clickedField.hasClass('coast') && !clickedField.hasClass('has-boat') ||
								 clickedField.hasClass('sea');
		if (canHavePlayer && !forbidenFieldForPlayer) {
			var character = $('player-character'),
				characterIsOnRoad = clickedField.hasClass('highway') || clickedField.hasClass('bridge'),
				characterCar = $('in-car'),
				currentFieldWithPlayer = $('.has-character');

			if (characterIsOnRoad) {
				currentFieldWithPlayer.removeClass('has-character has-car');
				clickedField.addClass('has-character has-car');
				character.appendTo(clickedField);
				characterCar.appendTo(clickedField);
				markFieldsForMovement();
			} else {
				currentFieldWithPlayer.removeClass('has-character');
				clickedField.addClass('has-character');
				character.appendTo(clickedField);
				markFieldsForMovement();
			}
		}
	} else if (characterInBoat) {
		forbidenFieldForPlayer = clickedField.hasClass('mountain') ||
								 clickedField.hasClass('sea');
		if (canHavePlayer && !forbidenFieldForPlayer) {
			var character = $('player-character'),
				characterIsSailing = clickedField.hasClass('coast') || clickedField.hasClass('bridge'),
				characterBoat = $('in-boat'),
				currentFieldWithPlayer = $('.has-character');

			if (characterIsSailing) {
				currentFieldWithPlayer.removeClass('has-character has-boat');
				clickedField.addClass('has-character has-boat');
				character.appendTo(clickedField);
				characterBoat.appendTo(clickedField);
				markFieldsForMovement();
			} else {
				currentFieldWithPlayer.removeClass('has-character');
				clickedField.addClass('has-character');
				character.appendTo(clickedField);
				markFieldsForMovement();
			}
		}
	} else {
		if (canHavePlayer && !forbidenFieldForPlayer) {
			var character = $('player-character'),
				currentFieldWithPlayer = $('.has-character'),
				clickedField = $(this);

			currentFieldWithPlayer.removeClass('has-character');
			clickedField.addClass('has-character');
			character.appendTo(clickedField);
			markFieldsForMovement();
		}
	}
});