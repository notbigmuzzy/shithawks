import { moveCharacterOnKeyboardInput } from './movement/characterMovement.js';
import { nextDayUpdate } from './update/nextDayUpdate.js';
import { markFieldsForMovement } from './update/functions/markFieldsForMovement.js';

export const keyboardControls = () => {
	markFieldsForMovement();

	//MOVE ON KEYBOARD
	onkeyup = (keyboard) => {
		if (keyboard.key == "ArrowRight" || keyboard.key == "d") {
			keyboard.preventDefault();
			var movementPoints = window.saveState.stats.energy;
			if (movementPoints > 0) {
				var nextField = $('.has-character').next();
				moveCharacterOnKeyboardInput(nextField);
			} 
			if (movementPoints == 1) {
				removeMarkedFieldsForMovement()
			}
		} else if (keyboard.key == "ArrowLeft" || keyboard.key == "a") {
			keyboard.preventDefault();
			var movementPoints = window.saveState.stats.energy;
			if (movementPoints > 0) {
				var prevField = $('.has-character').prev();
				moveCharacterOnKeyboardInput(prevField);
			}
			if (movementPoints == 1) {
				removeMarkedFieldsForMovement()
			}
		} else if (keyboard.key == "ArrowUp" || keyboard.key == "w") {
			keyboard.preventDefault();
			var movementPoints = window.saveState.stats.energy;
			if (movementPoints > 0) {
				var upField = $('.has-character').prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev();
				moveCharacterOnKeyboardInput(upField);
			} 
			if (movementPoints == 1) {
				removeMarkedFieldsForMovement()
			}
		} else if (keyboard.key == "ArrowDown" || keyboard.key == "s") {
			keyboard.preventDefault();
			var movementPoints = window.saveState.stats.energy;
			if (movementPoints > 0) {
				var downField = $('.has-character').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next();
				moveCharacterOnKeyboardInput(downField);
			}
			if (movementPoints == 1) {
				removeMarkedFieldsForMovement()
			}
		} else if (keyboard.key == "1" || keyboard.key == "m") {
			keyboard.preventDefault();
			window.location.hash = "#map";
		} else if (keyboard.key == "2" || keyboard.key == ",") {
			keyboard.preventDefault();
			window.location.hash = "#details";
		} else if (keyboard.key == "3" || keyboard.key == ".") {
			keyboard.preventDefault();
			window.location.hash = "#business";
		} else if (keyboard.key == "4" || keyboard.key == "/") {
			keyboard.preventDefault();
			window.location.hash = "#help";
		}  else if (keyboard.key == "Shift") {
			keyboard.preventDefault();
			nextDayUpdate();
		}
	};
}

function removeMarkedFieldsForMovement() {
	$('.can-have-player').removeClass('can-have-player');
}

