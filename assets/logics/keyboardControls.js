import { moveCharacterOnKeyboardInput } from './movement/characterMovement.js';
import { nextDayUpdate } from './update/nextDayUpdate.js';

export const keyboardControls = () => {
	moveCharacterOnKeyboardInput($('.has-character'));

	//MOVE ON KEYBOARD
	onkeyup = (keyboard) => {
		if (keyboard.key == "ArrowRight") {
			keyboard.preventDefault();
			var nextField = $('.has-character').next();
			moveCharacterOnKeyboardInput(nextField);
		} else if (keyboard.key == "ArrowLeft") {
			keyboard.preventDefault();
			var prevField = $('.has-character').prev();
			moveCharacterOnKeyboardInput(prevField);
		} else if (keyboard.key == "ArrowUp") {
			keyboard.preventDefault();
			var upField = $('.has-character').prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev();
			moveCharacterOnKeyboardInput(upField);
		} else if (keyboard.key == "ArrowDown") {
			keyboard.preventDefault();
			var downField = $('.has-character').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next();
			moveCharacterOnKeyboardInput(downField);
		} else if (keyboard.key == "m") {
			keyboard.preventDefault();
			window.location.hash = "#map";
		} else if (keyboard.key == "d") {
			keyboard.preventDefault();
			window.location.hash = "#details";
		} else if (keyboard.key == "b") {
			keyboard.preventDefault();
			window.location.hash = "#business";
		} else if (keyboard.key == "h") {
			keyboard.preventDefault();
			window.location.hash = "#help";
		}  else if (keyboard.key == "Enter") {
			keyboard.preventDefault();
			nextDayUpdate();
		}
	};
}