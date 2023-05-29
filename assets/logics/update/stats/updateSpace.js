export const updateSpace = () => {
	let spaceField = $('.junfo-inventory .space');
	spaceField.html(window.saveState.inventory.space);
}