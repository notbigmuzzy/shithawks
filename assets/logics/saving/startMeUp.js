import startGame from '../../../assets/themes/startGame.json' assert {type: 'json'};
import { updateMapPage } from '../update/updateMapPage.js';
import { updateDetailsPage } from '../update/updateDetailsPage.js';
import { updateBusinessPage } from '../update/updateBusinessPage.js';

export const startMeUp = () => {
	var readState = localStorage.getItem('saveState');

	if (readState) {
		window.saveState = JSON.parse(readState);
	} else {
		window.saveState = startGame;
	}

	//UPDATE HTML VALUES
	updateMapPage();
	updateDetailsPage();
	updateBusinessPage();
}