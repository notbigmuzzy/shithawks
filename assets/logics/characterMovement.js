export const characterMovement = () => {
	//MARK FIELD FOR MOVEMENT
	markFieldsForMovement();
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
			nextFieldCantHavePlayer = nextField.hasClass('mountain') || nextField.hasClass('highway') && !nextField.hasClass('has-car') || nextField.hasClass('coast') && !nextField.hasClass('has-boat') || nextField.hasClass('sea'),
			prevFieldCantHavePlayer = prevField.hasClass('mountain') || prevField.hasClass('highway') && !prevField.hasClass('has-car') || prevField.hasClass('coast') && !prevField.hasClass('has-boat') || prevField.hasClass('sea'),
			upFieldCantHavePlayer = upField.hasClass('mountain') || upField.hasClass('highway') && !upField.hasClass('has-car') || upField.hasClass('coast') && !upField.hasClass('has-boat') || upField.hasClass('sea'),
			downFieldCantHavePlayer = downField.hasClass('mountain') || downField.hasClass('highway') && !downField.hasClass('has-car') || downField.hasClass('coast') && !downField.hasClass('has-boat') || downField.hasClass('sea');

		if (characterInCar) {
			nextFieldCantHavePlayer = nextField.hasClass('mountain') || nextField.hasClass('coast') && !nextField.hasClass('has-boat') || nextField.hasClass('sea');
			prevFieldCantHavePlayer = prevField.hasClass('mountain') || prevField.hasClass('coast') && !prevField.hasClass('has-boat') || prevField.hasClass('sea');
			upFieldCantHavePlayer = upField.hasClass('mountain') || upField.hasClass('coast') && !upField.hasClass('has-boat') || upField.hasClass('sea');
			downFieldCantHavePlayer = downField.hasClass('mountain') || downField.hasClass('coast') && !downField.hasClass('has-boat') || downField.hasClass('sea');
		}

		if (characterInBoat) {
			console.log('3')
			nextFieldCantHavePlayer = nextField.hasClass('mountain') || nextField.hasClass('highway') && !nextField.hasClass('has-car') || nextField.hasClass('sea'),
			prevFieldCantHavePlayer = prevField.hasClass('mountain') || prevField.hasClass('highway') && !prevField.hasClass('has-car') || prevField.hasClass('sea'),
			upFieldCantHavePlayer = upField.hasClass('mountain') || upField.hasClass('highway') && !upField.hasClass('has-car') || upField.hasClass('sea'),
			downFieldCantHavePlayer = downField.hasClass('mountain') || downField.hasClass('highway') && !downField.hasClass('has-car') || downField.hasClass('sea');
		}

		if (!nextFieldCantHavePlayer) {
			nextField.addClass('can-have-player');
		}

		if (!prevFieldCantHavePlayer) {
			prevField.addClass('can-have-player');
		}

		if (!upFieldCantHavePlayer) {
			upField.addClass('can-have-player');
		}

		if (!downFieldCantHavePlayer) {
			downField.addClass('can-have-player');
		}
	}

	//MOVE ON CLICK
	$(document).on('click','.field', function() {
		var clickedField = $(this), 
			canHavePlayer = clickedField.hasClass('can-have-player'),
			forbidenFieldForPlayer = clickedField.hasClass('mountain') || 
									 clickedField.hasClass('highway') && !clickedField.hasClass('has-car') ||
									 clickedField.hasClass('coast') && !clickedField.hasClass('has-boat') ||
									 clickedField.hasClass('sea');

		if(canHavePlayer && !forbidenFieldForPlayer) {
			var character = $('player-character'),
				currentFieldWithPlayer = $('.has-character'),
				clickedField = $(this);

			currentFieldWithPlayer.removeClass('has-character');
			clickedField.addClass('has-character');
			character.appendTo(clickedField);
			markFieldsForMovement();
		}
	});

	//MOVE ON KEYBOARD
	onkeyup = (e) => {
		if (e.key == "ArrowRight") {
			e.preventDefault();
			var nextField = $('.has-character').next();
			movePlayerCharacterOnKeyboardInput(nextField);
		} else if (e.key == "ArrowLeft") {
			e.preventDefault();
			var prevField = $('.has-character').prev();
			movePlayerCharacterOnKeyboardInput(prevField);
		} else if (e.key == "ArrowUp") {
			e.preventDefault();
			var upField = $('.has-character').prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev();
			movePlayerCharacterOnKeyboardInput(upField);
		} else if (e.key == "ArrowDown") {
			e.preventDefault();
			var downField = $('.has-character').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next();
			movePlayerCharacterOnKeyboardInput(downField);
		};
	};
	function movePlayerCharacterOnKeyboardInput(fieldMovingTo) {
		var canHavePlayer = fieldMovingTo.hasClass('can-have-player'),
			characterInCar = $('.has-character').hasClass('has-car'),
			characterInBoat = $('.has-character').hasClass('has-car'),
			forbidenFieldForPlayer = fieldMovingTo.hasClass('mountain') || 
									 fieldMovingTo.hasClass('highway') && !fieldMovingTo.hasClass('has-car') ||
									 fieldMovingTo.hasClass('coast') && !fieldMovingTo.hasClass('has-boat') ||
									 fieldMovingTo.hasClass('sea');

		if (characterInCar) {
			forbidenFieldForPlayer = fieldMovingTo.hasClass('mountain') ||
									 fieldMovingTo.hasClass('coast') ||
									 fieldMovingTo.hasClass('sea');
			if (canHavePlayer && !forbidenFieldForPlayer) {
				var character = $('player-character'),
					characterIsOnHighway = fieldMovingTo.hasClass('highway') || fieldMovingTo.hasClass('bridge') || fieldMovingTo.hasClass('dirtroad'),
					characterCar = $('in-car'),
					currentFieldWithPlayer = $('.has-character');

				if (characterIsOnHighway) {
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
}