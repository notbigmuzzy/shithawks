export const updateHealth = () => {
	let healthField = $('.junfo-stats .health');
	healthField.html(window.saveState.stats.health);
}