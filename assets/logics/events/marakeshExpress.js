import { updateLog } from '../update/stats/updateLog.js'
import { randNO } from '../math/randNO.js'

export const marakeshExpress = (specialEvent,lastDopePrice,topPrice) => {
	let o = randNO(1,30),
		specialEventPrice = Math.floor(topPrice * 0.6);

	if (o == 1 && lastDopePrice < specialEventPrice) {
		specialEvent = 1;
		lastDopePrice = specialEventPrice;

		//MESSAGE IN LOG
		let message = "The Marrakesh Express has arrived!";
		updateLog(message,'notification');
	}

	//EXIT
	return [specialEvent,lastDopePrice];
}