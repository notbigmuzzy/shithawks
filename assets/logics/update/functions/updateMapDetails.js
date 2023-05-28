export const updateMapDetails = (field, modal) => {
	let clonedElement = field.clone(false);
	modal.find('.sprite').remove();
	clonedElement.appendTo(modal);
}