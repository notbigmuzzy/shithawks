export const moveCharacterOnKeyboardInput = (fieldMovingTo) => {
	markFieldsForMovement();

	var canHavePlayer = fieldMovingTo.hasClass('can-have-player'),
		characterInCar = $('.has-character').hasClass('has-car'),
		characterInBoat = $('.has-character').hasClass('has-boat'),
		forbidenFieldForPlayer = fieldMovingTo.hasClass('mountain') || 
								 fieldMovingTo.hasClass('bridge') || 
								 fieldMovingTo.hasClass('highway') && !fieldMovingTo.hasClass('has-car') ||
								 fieldMovingTo.hasClass('coast') && !fieldMovingTo.hasClass('has-boat') ||
								 fieldMovingTo.hasClass('sea');

	if (characterInCar) {
		forbidenFieldForPlayer = fieldMovingTo.hasClass('mountain') ||
								 fieldMovingTo.hasClass('coast') && !fieldMovingTo.hasClass('has-boat') ||
								 fieldMovingTo.hasClass('sea');
		if (canHavePlayer && !forbidenFieldForPlayer) {
			var character = $('player-character'),
				characterIsOnRoad = fieldMovingTo.hasClass('highway') || fieldMovingTo.hasClass('bridge'),
				characterCar = $('in-car'),
				currentFieldWithPlayer = $('.has-character');

			if (characterIsOnRoad) {
				currentFieldWithPlayer.removeClass('has-character has-car');
				fieldMovingTo.addClass('has-character has-car');
				character.appendTo(fieldMovingTo);
				characterCar.appendTo(fieldMovingTo);
				markFieldsForMovement();
			} else {
				currentFieldWithPlayer.removeClass('has-character');
				fieldMovingTo.addClass('has-character');
				character.appendTo(fieldMovingTo);
				markFieldsForMovement();
			}
		}
	} else if (characterInBoat) {
		forbidenFieldForPlayer = fieldMovingTo.hasClass('mountain') ||
								 fieldMovingTo.hasClass('sea');
		if (canHavePlayer && !forbidenFieldForPlayer) {
			var character = $('player-character'),
				characterIsSailing = fieldMovingTo.hasClass('coast') || fieldMovingTo.hasClass('bridge'),
				characterBoat = $('in-boat'),
				currentFieldWithPlayer = $('.has-character');

			if (characterIsSailing) {
				currentFieldWithPlayer.removeClass('has-character has-boat');
				fieldMovingTo.addClass('has-character has-boat');
				character.appendTo(fieldMovingTo);
				characterBoat.appendTo(fieldMovingTo);
				markFieldsForMovement();
			} else {
				currentFieldWithPlayer.removeClass('has-character');
				fieldMovingTo.addClass('has-character');
				character.appendTo(fieldMovingTo);
				markFieldsForMovement();
			}
		}
	} else {
		if (canHavePlayer && !forbidenFieldForPlayer) {
			var character = $('player-character'),
				currentFieldWithPlayer = $('.has-character');
			currentFieldWithPlayer.removeClass('has-character');
			fieldMovingTo.addClass('has-character');
			character.appendTo(fieldMovingTo);
			markFieldsForMovement();
		}
	}
}

function markFieldsForMovement() {
		//Clean prev fields
		$('.can-have-player').removeClass('can-have-player');

		//Setup fields
		var fieldWithCharacter = $('.has-character'),
			characterInCar = $('.has-character').hasClass('has-car'),
			characterInBoat = $('.has-character').hasClass('has-boat'),
			nextField = fieldWithCharacter.next(),
			prevField = fieldWithCharacter.prev(),
			upField = fieldWithCharacter.prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev(),
			downField = fieldWithCharacter.next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next(),
			nextFieldCantHavePlayer = nextField.hasClass('mountain') || nextField.hasClass('highway') && !nextField.hasClass('has-car') || nextField.hasClass('coast') && !nextField.hasClass('has-boat') || nextField.hasClass('sea') || nextField.hasClass('bridge'),
			prevFieldCantHavePlayer = prevField.hasClass('mountain') || prevField.hasClass('highway') && !prevField.hasClass('has-car') || prevField.hasClass('coast') && !prevField.hasClass('has-boat') || prevField.hasClass('sea') || prevField.hasClass('bridge'),
			upFieldCantHavePlayer = upField.hasClass('mountain') || upField.hasClass('highway') && !upField.hasClass('has-car') || upField.hasClass('coast') && !upField.hasClass('has-boat') || upField.hasClass('sea') || upField.hasClass('bridge'),
			downFieldCantHavePlayer = downField.hasClass('mountain') || downField.hasClass('highway') && !downField.hasClass('has-car') || downField.hasClass('coast') && !downField.hasClass('has-boat') || downField.hasClass('sea') || downField.hasClass('bridge');

		if (characterInCar) {
			nextFieldCantHavePlayer = nextField.hasClass('mountain') || nextField.hasClass('coast') && !nextField.hasClass('has-boat') || nextField.hasClass('sea') || nextField.hasClass('bridge') && nextField.hasClass('has-boat');
			prevFieldCantHavePlayer = prevField.hasClass('mountain') || prevField.hasClass('coast') && !prevField.hasClass('has-boat') || prevField.hasClass('sea') || prevField.hasClass('bridge') && prevField.hasClass('has-boat');
			upFieldCantHavePlayer = upField.hasClass('mountain') || upField.hasClass('coast') && !upField.hasClass('has-boat') || upField.hasClass('sea') || upField.hasClass('bridge') && upField.hasClass('has-boat');
			downFieldCantHavePlayer = downField.hasClass('mountain') || downField.hasClass('coast') && !downField.hasClass('has-boat') || downField.hasClass('sea') || downField.hasClass('bridge') && downField.hasClass('has-boat');
		}

		if (characterInBoat) {
			nextFieldCantHavePlayer = nextField.hasClass('mountain') || nextField.hasClass('highway') && !nextField.hasClass('has-car') || nextField.hasClass('sea') || nextField.hasClass('bridge') && nextField.hasClass('has-car'),
			prevFieldCantHavePlayer = prevField.hasClass('mountain') || prevField.hasClass('highway') && !prevField.hasClass('has-car') || prevField.hasClass('sea') || prevField.hasClass('bridge') && prevField.hasClass('has-car'),
			upFieldCantHavePlayer = upField.hasClass('mountain') || upField.hasClass('highway') && !upField.hasClass('has-car') || upField.hasClass('sea') || upField.hasClass('bridge') && upField.hasClass('has-car'),
			downFieldCantHavePlayer = downField.hasClass('mountain') || downField.hasClass('highway') && !downField.hasClass('has-car') || downField.hasClass('sea') || downField.hasClass('bridge') && downField.hasClass('has-car');
		}

		!nextFieldCantHavePlayer ? nextField.addClass('can-have-player') : "";
		!prevFieldCantHavePlayer ? prevField.addClass('can-have-player') : "";
		!upFieldCantHavePlayer ? upField.addClass('can-have-player') : "";
		!downFieldCantHavePlayer ? downField.addClass('can-have-player') : "";
	}