export const updateGuns = () => {
	var gunField = $('.junfo-inventory .guns');
	gunField.html(window.saveState.inventory.guns);
}