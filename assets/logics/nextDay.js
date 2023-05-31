import { updateState } from './saving/updateState.js';
import { saveState } from './saving/saveState.js';
import { runEconomy } from './economy/runEconomy.js';
import { updateMapPage } from './update/updateMapPage.js';
import { updateDetailsPage } from './update/updateDetailsPage.js';
import { updateBusinessPage } from './update/updateBusinessPage.js';
import { markFieldsForMovement } from './movement/markFieldsForMovement.js'
import { flagCooldown } from './flags/flagCooldown.js'
import { debugFlags } from './debug/debugControl.js'
 
export const nextDayUpdate = () => {
	//FLAGS
	flagCooldown();
	//ECONOMY
	runEconomy();
	//UPDATE STATE
	updateState();
	//SAVE STATE
	saveState();
	//UPDATE MAP PAGE
	updateMapPage();
	//UPDATE DETAILS PAGE
	updateDetailsPage();
	//UPDATE BUSINESS PAGE
	updateBusinessPage();
	//MARK FIELDS FOR MOVEMENT
	markFieldsForMovement();
	//MISC
	debugFlags();
	$('.next-day-button').removeClass('next');
}