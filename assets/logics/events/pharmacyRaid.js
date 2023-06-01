import { updateLog } from '../update/stats/updateLog.js'
import { randNO } from '../math/randNO.js'

export const pharmacyRaid = (specialEvent,lastDopePrice,topPrice) => {
	let l = randNO(1,30),
		specialEventPrice = Math.floor(topPrice * 0.8);

	if (l == 1 && lastDopePrice < specialEventPrice) {
		specialEvent = 1;
		lastDopePrice = specialEventPrice;

		//MESSAGE IN LOG
		let message = "Rival drug dealers raided a pharmacy and are selling cheap ludes!";
		updateLog(message,'notification');
	}

	//EXIT
	return [specialEvent,lastDopePrice];
}