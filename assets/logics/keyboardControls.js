import { moveCharacterOnKeyboardInput } from './movement/characterMovement.js';
import { nextDayUpdate } from './update/nextDayUpdate.js';

export const keyboardControls = () => {
	moveCharacterOnKeyboardInput($('.has-character'));

	//MOVE ON KEYBOARD
	onkeyup = (keyboard) => {
		if (keyboard.key == "ArrowRight" || keyboard.key == "d") {
			keyboard.preventDefault();
			var nextField = $('.has-character').next();
			moveCharacterOnKeyboardInput(nextField);
		} else if (keyboard.key == "ArrowLeft" || keyboard.key == "a") {
			keyboard.preventDefault();
			var prevField = $('.has-character').prev();
			moveCharacterOnKeyboardInput(prevField);
		} else if (keyboard.key == "ArrowUp" || keyboard.key == "w") {
			keyboard.preventDefault();
			var upField = $('.has-character').prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev();
			moveCharacterOnKeyboardInput(upField);
		} else if (keyboard.key == "ArrowDown" || keyboard.key == "s") {
			keyboard.preventDefault();
			var downField = $('.has-character').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next();
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