export const saveState = () => {
	var saveState = window.saveState,
		oldSaveState = localStorage.getItem('saveState');

	//CREATE REDUNDANCY SAVE FILES
	if (oldSaveState) {
		var redundantSaveState = JSON.parse(oldSaveState),
			redundantSaveStateDay = redundantSaveState.date.day,
			redundantSaveStateWeek = redundantSaveState.date.week,
			reduntantSaveStateName = "saveState-" + redundantSaveStateDay,
			reallyOldSaves = "saveState-" + (parseInt(redundantSaveStateDay) - 20);
		localStorage.setItem(reduntantSaveStateName, JSON.stringify(redundantSaveState));
		localStorage.removeItem(reallyOldSaves);
	}

	//SAVE NEW STATE
	if (typeof(saveState) == 'object') {
		localStorage.setItem('saveState', JSON.stringify(saveState));
	} else {
		localStorage.setItem('saveState', saveState);
	}
}