import { updateLog } from '../update/stats/updateLog.js'
import { randNO } from '../math/randNO.js'

export const heroinSlap = (specialEvent,lastDopePrice,topPrice) => {
	let se = randNO(1,30);
	if (se == 1) {
		specialEvent = 1;
		lastDopePrice = Math.floor(topPrice * 0.75);

		//MESSAGE IN LOG
		let message = "Cops made a big Heroin bust! Prices are outrageous!";
		updateLog(message,'notification');
	}
	//EXIT
	return [specialEvent,lastDopePrice];
}

export const heroinBust = (specialEvent,lastDopePrice,bottomPrice) => {
	let se = randNO(1,30);
	if (se == 1) {
		specialEvent = 1;
		lastDopePrice = Math.floor(bottomPrice * 1.25);

		//MESSAGE IN LOG
		let message = "Cowboys are riding high! Big H dirt-cheap!";
		updateLog(message,'notification');
	}
	//EXIT
	return [specialEvent,lastDopePrice];
}