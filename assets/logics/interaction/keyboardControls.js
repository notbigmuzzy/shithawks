import { moveCharacterOnKeyboardInput } from '../movement/characterMovement.js';
import { nextDayUpdate } from '../nextDay.js';
import { markFieldsForMovement } from '../movement/markFieldsForMovement.js';

export const keyboardControls = () => {
	//INITIAL MARK FOR MOVEMENT
	markFieldsForMovement();

	//MOVE ON KEYBOARD
	onkeyup = (keyboard) => {
		if (keyboard.key == "ArrowRight" || keyboard.key == "d") {
			keyboard.preventDefault();
			let nextField = $('.has-character').next();
			moveCharacterOnKeyboardInput(nextField);
		} else if (keyboard.key == "ArrowLeft" || keyboard.key == "a") {
			keyboard.preventDefault();
			let prevField = $('.has-character').prev();
			moveCharacterOnKeyboardInput(prevField);
		} else if (keyboard.key == "ArrowUp" || keyboard.key == "w") {
			keyboard.preventDefault();
			let upField = $('.has-character').prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev();
			moveCharacterOnKeyboardInput(upField);
		} else if (keyboard.key == "ArrowDown" || keyboard.key == "s") {
			keyboard.preventDefault();
			let downField = $('.has-character').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next();
			moveCharacterOnKeyboardInput(downField);
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