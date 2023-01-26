import { markFieldsForMovement } from '../update/functions/markFieldsForMovement.js'
import { resetEnergy } from '../update/functions/stats/resetEnergy.js'

export const moveCharacterOnKeyboardInput = (fieldMovingTo) => {
	var movementPoints = window.saveState.stats.energy,
		canHavePlayer = fieldMovingTo.hasClass('can-have-player'),
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
				if (movementPoints > 0) {
					reduceEnergyOnMovement();
					currentFieldWithPlayer.removeClass('has-character has-car');
					fieldMovingTo.addClass('has-character has-car');
					character.appendTo(fieldMovingTo);
					characterCar.appendTo(fieldMovingTo);
					markFieldsForMovement();
				}
				if (movementPoints == 1) {
					removeMarkedFieldsForMovement();
				}
			} else {
				if (movementPoints > 0) {
					reduceEnergyOnMovement();
					currentFieldWithPlayer.removeClass('has-character');
					fieldMovingTo.addClass('has-character');
					character.appendTo(fieldMovingTo);
					markFieldsForMovement();
				}
				if (movementPoints == 1) {
					removeMarkedFieldsForMovement();
				}
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
				if (movementPoints > 0) {
					reduceEnergyOnMovement();
					currentFieldWithPlayer.removeClass('has-character has-boat');
					fieldMovingTo.addClass('has-character has-boat');
					character.appendTo(fieldMovingTo);
					characterBoat.appendTo(fieldMovingTo);
					markFieldsForMovement();
				}
				if (movementPoints == 1) {
					removeMarkedFieldsForMovement();
				}
			} else {
				if (movementPoints > 0) {
					reduceEnergyOnMovement();
					currentFieldWithPlayer.removeClass('has-character');
					fieldMovingTo.addClass('has-character');
					character.appendTo(fieldMovingTo);
					markFieldsForMovement();
				}
				if (movementPoints == 1) {
					removeMarkedFieldsForMovement();
				}
			}
		}
	} else {
		if (canHavePlayer && !forbidenFieldForPlayer) {
			var character = $('player-character'),
				characterIsSailing = fieldMovingTo.hasClass('coast') || fieldMovingTo.hasClass('bridge'),
				characterIsOnRoad = fieldMovingTo.hasClass('highway') || fieldMovingTo.hasClass('bridge'),
				currentFieldWithPlayer = $('.has-character');

			if (characterIsSailing || characterIsOnRoad) {
				if (movementPoints > 0) {
					reduceEnergyOnMovement();
					window.saveState.stats.energy = 5;
					var energyField = $('.junfo-stats .energy');
					energyField.html(window.saveState.stats.energy);
					currentFieldWithPlayer.removeClass('has-character');
					fieldMovingTo.addClass('has-character');
					character.appendTo(fieldMovingTo);
					markFieldsForMovement();
				}
				if (movementPoints == 1) {
					//removeMarkedFieldsForMovement();
				}
			} else {
				if (movementPoints > 0) {
					reduceEnergyOnMovement();
					currentFieldWithPlayer.removeClass('has-character');
					fieldMovingTo.addClass('has-character');
					character.appendTo(fieldMovingTo);
					markFieldsForMovement();
				}
				if (movementPoints == 1) {
					removeMarkedFieldsForMovement();
				}
			}
		}
	}
}

function removeMarkedFieldsForMovement() {
	$('.can-have-player').removeClass('can-have-player');
}

function reduceEnergyOnMovement() {
	var reducedEnergy = window.saveState.stats.energy - 1;
	window.saveState.stats.energy = reducedEnergy;
	var energyField = $('.junfo-stats .energy');
	energyField.html(reducedEnergy);
}