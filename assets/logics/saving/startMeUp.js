import { updateMapPage } from '../update/updateMapPage.js';
import { updateDetailsPage } from '../update/updateDetailsPage.js';
import { updateBusinessPage } from '../update/updateBusinessPage.js';

export const startMeUp = () => {
	let readState = localStorage.getItem('saveState');

	if (readState) {
		window.saveState = JSON.parse(readState);
		updateMapPage();
		updateDetailsPage();
		updateBusinessPage();
	} else {
		let startGameJSON = "./assets/themes/startGame.json";
		fetch(startGameJSON).then((response) => response.json()).then((data) => {
			window.saveState = data;
			updateMapPage();
			updateDetailsPage();
			updateBusinessPage();
		});	
	}
}