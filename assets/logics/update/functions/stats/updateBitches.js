export const updateBitches = () => {
	var bitchesField = $('.junfo-inventory .bitches');
	bitchesField.html(window.saveState.inventory.bitches);
}