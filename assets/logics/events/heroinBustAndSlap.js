import { updateLog } from '../update/stats/updateLog.js'
import { randNO } from '../math/randNO.js'

export const heroinSlap = (specialEvent,lastDopePrice,topPrice) => {
	let h = randNO(1,30),
		specialEventPrice = Math.floor(topPrice * 0.75);

	if (h == 1 && lastDopePrice < specialEventPrice) {
		specialEvent = 1;
		lastDopePrice = specialEventPrice;

		//MESSAGE IN LOG
		let message = "Cops made a big Heroin bust! Prices are outrageous!";
		updateLog(message,'notification');
	}

	//EXIT
	return [specialEvent,lastDopePrice];
}

export const heroinBust = (specialEvent,lastDopePrice,bottomPrice) => {
	let se = randNO(1,30),
		specialEventPrice = Math.floor(bottomPrice * 0.5);

	if (se == 1) {
		specialEvent = 1;
		lastDopePrice = specialEventPrice;

		//MESSAGE IN LOG
		let message = "Cowboys are riding high! Big H dirt-cheap!";
		updateLog(message,'notification');
	}

	//EXIT
	return [specialEvent,lastDopePrice];
}