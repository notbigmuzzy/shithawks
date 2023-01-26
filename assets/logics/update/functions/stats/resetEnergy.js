export const resetEnergy = () => {
	var currentCharacter = $('.has-character'),
		movementPoints = 3;
	if (currentCharacter.hasClass('has-car')) {
		movementPoints = 5;
	} else if (currentCharacter.hasClass('has-boat')) {
		movementPoints = 5;
	}

	window.saveState.stats.energy = movementPoints;
	var energyField = $('.junfo-stats .energy');
	energyField.html(window.saveState.stats.energy);
}