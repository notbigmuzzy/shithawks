export const updateDrugs = () => {
	let drugField = $('.junfo-inventory .drugs');
	drugField.html(window.saveState.inventory.drugs);
}