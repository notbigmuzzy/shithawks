import { updateState } from './saving/updateState.js';
import { saveState } from './saving/saveState.js';
import { happening } from './events/happening.js';
import { runEconomy } from './economy/runEconomy.js';
import { updateMapPage } from './update/updateMapPage.js';
import { updateDetailsPage } from './update/updateDetailsPage.js';
import { updateBusinessPage } from './update/updateBusinessPage.js';
import { markFieldsForMovement } from './movement/markFieldsForMovement.js'

export const nextDayUpdate = () => {
	$('.next-day-button').removeClass('next');
	//UPDATE STATE
	updateState();
	//SAVE STATE
	saveState();
	//RANDOM EVENT
	happening();
	//ECONOMY
	runEconomy();
	//UPDATE MAP PAGE
	updateMapPage();
	//UPDATE DETAILS PAGE
	updateDetailsPage();
	//UPDATE BUSINESS PAGE
	updateBusinessPage();
	//MARK FIELDS FOR MOVEMENT
	markFieldsForMovement();
}