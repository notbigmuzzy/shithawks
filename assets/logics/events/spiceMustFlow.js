import { updateLog } from '../update/stats/updateLog.js'
import { randNO } from '../math/randNO.js'

export const spiceMustFlow = () => {
	//POSITIVE ECONOMY
	window.saveState.economy.globalEconomy = window.saveState.economy.positiveGlobalEconomy;
	window.saveState.flags.flagBullPeriod = 10;
	window.saveState.flags.flagGlobalEconomyCooldown = 20;
	//MESSAGE IN LOG
	let message = "",
		r = randNO(1,2);
	if (r == 1 ) {
		message = "Spice must flow!";
	} else if (r ==2)  {
		message = "A rising tide lifts all boats!";
	}
	updateLog(message,'notification');
}