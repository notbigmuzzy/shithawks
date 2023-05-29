export const updateDrugPrices = () => {
	let gunField = $('.junfo-inventory .guns');
	gunField.html(window.saveState.inventory.guns);
}