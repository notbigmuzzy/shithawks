function makeChanges(state) {
	//UPDATE DAY
	var currentDay = state.date.day;
		state.date.day = currentDay + 1;

	//UPDATE WEEK
	var currentWeek = state.date.week;
		state.date.week = Math.trunc(currentDay / 7) + 1;

	//UPDATE ENERGY
	var currentCharacter = $('.has-character'),
		movementPoints = 3;
	if (currentCharacter.hasClass('has-car')) {
		movementPoints = 5;
	} else if (currentCharacter.hasClass('has-boat')) {
		movementPoints = 5;
	}
	state.stats.energy = movementPoints;

	//UPDATE POSITION ON FOOT
	var currentPosition = $('.has-character').attr("data-ordinal");
		state.stats.playerordinal = currentPosition;

	//UPDATE POSITION IN CAR
	var currentCarPosition = $('.has-car').attr("data-ordinal");
		state.stats.carordinal = currentCarPosition;

	//UPDATE POSITION ON BOAT
	var currentBoatPosition = $('.has-boat').attr("data-ordinal");
		state.stats.boatordinal = currentBoatPosition;
}

export const updateState = () => {
	//READ CURRENT STATE OF GLOBAL VAR
	var currentState = '';
	currentState = window.saveState;

	//MAKE CHANGES
	makeChanges(currentState);

	//WRITE OUT CHANGES TO GLOBAL VAR
	window.saveState = currentState;
}