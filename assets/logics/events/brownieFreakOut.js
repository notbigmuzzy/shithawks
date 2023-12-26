import { updateLog } from '../update/stats/updateLog.js'
import { randNO } from '../math/randNO.js'

export const brownieFreakOut = (specialEvent,lastDopePrice,topPrice) => {
	let w = randNO(1,30),
		specialEventPrice = Math.floor(topPrice * 0.5);

	if (w == 1 && lastDopePrice < specialEventPrice) {
		specialEvent = 1;
		lastDopePrice = specialEventPrice;

		//MESSAGE IN LOG
		let message = "Guy sells his grandma brownies! They are special.";
		updateLog(message,'notification');
	}

	//EXIT
	return [specialEvent,lastDopePrice];
}