import { updateLog } from '../update/stats/updateLog.js'
import { randNO } from '../math/randNO.js'

export const recessionTimeBaby = () => {
	//NEGATIVE ECONOMY
	window.saveState.economy.globalEconomy = window.saveState.economy.negativeGlobalEconomy;
	window.saveState.flags.flagBearPeriod = 10;
	window.saveState.flags.flagGlobalEconomyCooldown = 20;
	//MESSAGE IN LOG
	let message = "",
		r = randNO(1,2);

	if (r == 1 ) {
		message = "It's just a bit of transitory inflation dude!";
	} else if (r ==2)  {
		message = "Much uncertain! Very recession. So times!";
	}
	updateLog(message,'notification');
}