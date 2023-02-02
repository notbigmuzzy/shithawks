export const updateCash = () => {
	var cashField = $('.junfo-inventory .cash');
	cashField.html(window.saveState.inventory.cash + '$');
}