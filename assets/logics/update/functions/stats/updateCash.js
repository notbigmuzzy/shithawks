export const updateCash = () => {
	let cashField = $('.junfo-inventory .cash');
	cashField.html(window.saveState.inventory.cash + '$');
}