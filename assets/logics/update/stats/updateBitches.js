export const updateBitches = () => {
	let bitchesField = $('.junfo-inventory .bitches');
	bitchesField.html(window.saveState.inventory.bitches);
}