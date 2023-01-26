export const updateState = () => {
	//READ CURRENT STATE OF GLOBAL VAR
	var currentState = '';
		currentState = window.saveState;




	//MAKE CHANGES
	var currentDay = currentState.date.day;
		currentState.date.day = currentDay + 1;
	var currentWeek = currentState.date.week;
		currentState.date.week = Math.trunc(currentDay / 7) + 1;










	//WRITE OUT CHANGES TO GLOBAL VAR
	window.saveState = currentState;
}