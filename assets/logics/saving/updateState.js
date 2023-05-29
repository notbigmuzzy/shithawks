function makeChanges(state) {
	//UPDATE DAY
	let currentDay = state.date.day;
		state.date.day = currentDay + 1;

	//UPDATE WEEK
	let currentWeek = state.date.week;
		state.date.week = Math.trunc(currentDay / 7) + 1;

	//UPDATE ENERGY
	let currentCharacter = $('.has-character'),
		movementPoints = 3;
	if (currentCharacter.hasClass('has-car')) {
		movementPoints = 5;
	} else if (currentCharacter.hasClass('has-boat')) {
		movementPoints = 5;
	}
	state.stats.energy = movementPoints;

	//UPDATE POSITION ON FOOT
	let currentPosition = $('.has-character').attr("data-ordinal");
		state.stats.playerordinal = currentPosition;

	//UPDATE POSITION IN CAR
	let currentCarPosition = $('.has-car').attr("data-ordinal");
		state.stats.carordinal = currentCarPosition;

	//UPDATE POSITION ON BOAT
	let currentBoatPosition = $('.has-boat').attr("data-ordinal");
		state.stats.boatordinal = currentBoatPosition;
}

export const updateState = () => {
	//READ CURRENT STATE OF GLOBAL VAR
	let currentState = '';
	currentState = window.saveState;

	//MAKE CHANGES
	makeChanges(currentState);

	console.log(currentState.drugs)

	//WRITE OUT CHANGES TO GLOBAL VAR
	window.saveState = currentState;
}