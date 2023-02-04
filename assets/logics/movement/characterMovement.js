import { markFieldsForMovement } from '../update/functions/markFieldsForMovement.js'
import { resetEnergy } from '../update/functions/stats/resetEnergy.js'
import { summonCar } from './summonCar.js'
import { summonBoat } from './summonBoat.js'
import { endMovement } from './endMovement.js'
import { reduceEnergyOnMovement } from './reduceEnergyOnMovement.js'

export const moveCharacterOnKeyboardInput = (fieldMovingTo) => {
	var movementPoints = window.saveState.stats.energy,
		canHavePlayer = fieldMovingTo.hasClass('can-have-player'),
		characterInCar = $('.has-character').hasClass('has-car'),
		characterInBoat = $('.has-character').hasClass('has-boat'),
		forbidenFieldForPlayer = fieldMovingTo.hasClass('mountain') || 
								 fieldMovingTo.hasClass('bridge') ||
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
					fieldMovingTo.addClass('has-character has-car');
					if (currentFieldWithPlayer.hasClass('refilled')) {
						fieldMovingTo.addClass('refilled');
					}
					currentFieldWithPlayer.removeClass('has-character has-car refilled');
					character.appendTo(fieldMovingTo);
					characterCar.appendTo(fieldMovingTo);
					markFieldsForMovement();
				}
				if (movementPoints == 1) {
					endMovement();
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
					endMovement();
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
					fieldMovingTo.addClass('has-character has-boat');
					if (currentFieldWithPlayer.hasClass('refilled')) {
						fieldMovingTo.addClass('refilled');
					}
					currentFieldWithPlayer.removeClass('has-character has-boat refilled');
					character.appendTo(fieldMovingTo);
					characterBoat.appendTo(fieldMovingTo);
					markFieldsForMovement();
				}
				if (movementPoints == 1) {
					endMovement();
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
					endMovement();
				}
			}
		}
	} else {
		if (canHavePlayer && !forbidenFieldForPlayer) {
			var character = $('player-character'),
				characterIsSailing = fieldMovingTo.hasClass('coast') || fieldMovingTo.hasClass('bridge'),
				characterIsOnRoad = fieldMovingTo.hasClass('highway') || fieldMovingTo.hasClass('bridge'),
				currentFieldWithPlayer = $('.has-character');

			if (characterIsOnRoad) {
				if (movementPoints > 0) {
					if ( fieldMovingTo.hasClass('summon-car') && fieldMovingTo.hasClass('can-have-player') ) {
						summonCar(fieldMovingTo);
						reduceEnergyOnMovement();
						if (movementPoints == 1) {
							endMovement();
						}
						return false;
					}
					reduceEnergyOnMovement();
					currentFieldWithPlayer.removeClass('has-character');
					fieldMovingTo.addClass('has-character');
					character.appendTo(fieldMovingTo);
					if (!fieldMovingTo.hasClass('refilled')) {
						fieldMovingTo.addClass('refilled');
						window.saveState.stats.energy = window.saveState.stats.carenergy;
						var energyField = $('.junfo-stats .energy');
						energyField.html(window.saveState.stats.energy);
					}
					markFieldsForMovement();
				}
				if (movementPoints == 1) {
					endMovement();
				}
			} else if (characterIsSailing) {
				if (movementPoints > 0) {
					if ( fieldMovingTo.hasClass('summon-boat') && fieldMovingTo.hasClass('can-have-player') ) {
						summonBoat(fieldMovingTo);
						reduceEnergyOnMovement();
						if (movementPoints == 1) {
							endMovement();
						}
						return false;
					}
					reduceEnergyOnMovement();
					currentFieldWithPlayer.removeClass('has-character');
					fieldMovingTo.addClass('has-character');
					character.appendTo(fieldMovingTo);
					if (!fieldMovingTo.hasClass('refilled')) {
						fieldMovingTo.addClass('refilled');
						window.saveState.stats.energy = window.saveState.stats.boatenergy;
						var energyField = $('.junfo-stats .energy');
						energyField.html(window.saveState.stats.energy);
					}
					markFieldsForMovement();
				}
				if (movementPoints == 1) {
					endMovement();
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
					endMovement();
				}
			}
		}
	}
}