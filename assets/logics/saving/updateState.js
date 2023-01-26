export const updateState = () => {
	//READ CURRENT STATE OF GLOBAL VAR
	var currentState = '';
	currentState = window.saveState;

	//MAKE CHANGES
	makeChanges(currentState);

	//WRITE OUT CHANGES TO GLOBAL VAR
	window.saveState = currentState;
}

function makeChanges(state) {
	var currentDay = state.date.day;
		state.date.day = currentDay + 1;

	var currentWeek = state.date.week;
		state.date.week = Math.trunc(currentDay / 7) + 1;

	var currentCharacter = $('.has-character'),
		movementPoints = 3;
	if (currentCharacter.hasClass('has-car')) {
		movementPoints = 5;
	} else if (currentCharacter.hasClass('has-boat')) {
		movementPoints = 5;
	}
	state.stats.energy = movementPoints;
}