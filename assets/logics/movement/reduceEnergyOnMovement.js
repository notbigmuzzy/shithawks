export const reduceEnergyOnMovement = () => {
	var reducedEnergy = window.saveState.stats.energy - 1;
	window.saveState.stats.energy = reducedEnergy;
	var energyField = $('.junfo-stats .energy');
	energyField.html(reducedEnergy);
}