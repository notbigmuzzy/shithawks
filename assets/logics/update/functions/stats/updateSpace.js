export const updateSpace = () => {
	var spaceField = $('.junfo-inventory .space');
	spaceField.html(window.saveState.inventory.space);
}