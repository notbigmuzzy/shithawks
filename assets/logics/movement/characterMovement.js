import { markFieldsForMovement } from '../update/functions/markFieldsForMovement.js'

export const moveCharacterOnKeyboardInput = (fieldMovingTo) => {
	markFieldsForMovement();
	reduceEnergyOnMovement();

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

function reduceEnergyOnMovement() {
	var reducedEnergy = window.saveState.stats.energy - 1;
	window.saveState.stats.energy = reducedEnergy;
	var energyField = $('.junfo-stats .energy');
	energyField.html(reducedEnergy);
}