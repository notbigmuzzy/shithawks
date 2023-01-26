export const resetEnergy = () => {
	var currentCharacter = $('.has-character'),
		movementPoints = window.saveState.stats.energy;

	if (currentCharacter.hasClass('city') || currentCharacter.hasClass('sand') || currentCharacter.hasClass('forest')) {
		movementPoints = window.saveState.stats.lowenergy;
	} else if (currentCharacter.hasClass('has-car')) {
		movementPoints = window.saveState.stats.carenergy;
	} else if (currentCharacter.hasClass('has-boat')) {
		movementPoints = window.saveState.stats.boatenergy;
	}

	window.saveState.stats.energy = movementPoints;
	var energyField = $('.junfo-stats .energy');
	energyField.html(window.saveState.stats.energy);
}