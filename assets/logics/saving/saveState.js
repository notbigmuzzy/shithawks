export const saveState = () => {
	var saveState = window.saveState;

	if (typeof(saveState) == 'object') {
		localStorage.setItem('saveState', JSON.stringify(saveState));
	} else {
		localStorage.setItem('saveState', saveState);		
	}
}