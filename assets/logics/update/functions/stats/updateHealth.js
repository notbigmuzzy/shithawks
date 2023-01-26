export const updateHealth = () => {
	var healthField = $('.junfo-stats .health');
	healthField.html(window.saveState.stats.health);
}