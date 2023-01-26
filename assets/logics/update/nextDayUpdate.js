import { updateState } from '../saving/updateState.js';
import { saveState } from '../saving/saveState.js';
import { updateMapPage } from './updateMapPage.js';
import { updateDetailsPage } from './updateDetailsPage.js';
import { updateBusinessPage } from './updateBusinessPage.js';

export const nextDayUpdate = () => {
	//UPDATE STATE
		updateState();
	//SAVE STATE
		saveState();
	//UPDATE MAP PAGE
		updateMapPage();
	//UPDATE DETAILS PAGE
		updateDetailsPage();
	//UPDATE BUSINESS PAGE
		updateBusinessPage()
}