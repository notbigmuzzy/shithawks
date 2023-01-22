export const characterMovement = () => {
	//MARK FIELD FOR MOVEMENT
	markFieldsForMovement();
	function markFieldsForMovement() {
		//Clean prev fields
		$('.can-have-player').removeClass('can-have-player');

		//Setup fields
		var fieldWithCharacter = $('.has-character'),
			nextField = fieldWithCharacter.next(),
			prevField = fieldWithCharacter.prev(),
			upField = fieldWithCharacter.prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev(),
			downField = fieldWithCharacter.next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next(),
			nextFieldCantHavePlayer = nextField.hasClass('mountain') || nextField.hasClass('coast') || nextField.hasClass('sea'),
			prevFieldCantHavePlayer = prevField.hasClass('mountain') || prevField.hasClass('coast') || prevField.hasClass('sea'),
			upFieldCantHavePlayer = upField.hasClass('mountain') || upField.hasClass('coast') || upField.hasClass('sea'),
			downFieldCantHavePlayer = downField.hasClass('mountain') || downField.hasClass('coast') || downField.hasClass('sea');

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
		var canHavePlayer = $(this).hasClass('can-have-player'),
			forbidenFieldForPlayer = $(this).hasClass('mountain') || 
									$(this).hasClass('coast') || 
									$(this).hasClass('sea');

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
	onkeydown = (e) => {
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

	function movePlayerCharacterOnKeyboardInput(characterField) {
		var canHavePlayer = characterField.hasClass('can-have-player'),
			forbidenFieldForPlayer = characterField.hasClass('mountain') || 
									characterField.hasClass('coast') || 
									characterField.hasClass('sea');

		if(canHavePlayer && !forbidenFieldForPlayer) {
			var character = $('player-character'),
				currentFieldWithPlayer = $('.has-character');

			currentFieldWithPlayer.removeClass('has-character');
			characterField.addClass('has-character');
			character.appendTo(characterField);
			markFieldsForMovement();
		}
	}
}