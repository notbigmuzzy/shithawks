export const updateMapDetails = (field, modal) => {
	var clonedElement = field.clone(false);
	modal.find('.sprite').remove();
	clonedElement.appendTo(modal);
}