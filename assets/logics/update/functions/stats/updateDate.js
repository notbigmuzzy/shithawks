export const updateDate = () => {
	let dayField = $('.junfo-time .day'),
		weekField = $('.junfo-time .week');

	dayField.html(window.saveState.date.day);
	weekField.html(window.saveState.date.week);
}