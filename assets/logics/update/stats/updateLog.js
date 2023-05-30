export const updateLog = (message, priority) => {
	let logField = $('.junfo-log modal-body');
	
	//UPDATE ALL STATS FIELD
	logField.prepend('<p class="' + priority + '">' + message + '</p>')
}