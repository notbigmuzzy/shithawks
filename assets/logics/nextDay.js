import { nextDayUpdate } from './update/nextDayUpdate.js'

export const nextDay = () => {
	nextDayUpdate();
	
	$(document).on('click', 'button.next-day-button', function(e) {
		e.preventDefault();
		nextDayUpdate();
	});
}