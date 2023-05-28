export const reduceEnergyOnMovement = () => {
	let reducedEnergy = window.saveState.stats.energy - 1;
	window.saveState.stats.energy = reducedEnergy;
	let energyField = $('.junfo-stats .energy');
	energyField.html(reducedEnergy);
}