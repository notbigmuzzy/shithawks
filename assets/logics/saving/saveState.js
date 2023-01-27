export const saveState = () => {
	var saveState = window.saveState,
		oldSaveState = localStorage.getItem('saveState');

	//CREATE REDUNDANCY SAVE FILES
	if (oldSaveState) {
		var redundantSaveState = JSON.parse(oldSaveState),
			redundantSaveStateDay = redundantSaveState.date.day,
			redundantSaveStateWeek = redundantSaveState.date.week,
			reduntantSaveStateName = "saveState-" + redundantSaveStateDay;
		localStorage.setItem(reduntantSaveStateName, JSON.stringify(redundantSaveState));	
	}

	//SAVE NEW STATE
	if (typeof(saveState) == 'object') {
		localStorage.setItem('saveState', JSON.stringify(saveState));
	} else {
		localStorage.setItem('saveState', saveState);		
	}
}