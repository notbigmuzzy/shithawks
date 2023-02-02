export const updateDrugs = () => {
	var drugField = $('.junfo-inventory .drugs');
	drugField.html(window.saveState.inventory.drugs);
}