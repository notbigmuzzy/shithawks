import { updateLog } from '../update/stats/updateLog.js'
import { randNO } from '../math/randNO.js'

export const priceBottomedOut = (dopeName,newPrice, bottomPrice) => {
	if (newPrice <= 0) {
		newPrice = bottomPrice;
		let message = "",
			r = randNO(1,5);

		if (r == 1 ) {
			message = "Price bottomed out for " + dopeName + "! Tide is a'coming!";
		} else if (r ==2)  {
			message = "Big bust happened! " + dopeName + " is selling at ridicilous prices!";
		} else if (r == 3) {
			message = "Columbian freighter dusted the Coast Guard! " + dopeName + " prices have bottomed out!";
		} else if (r == 4) {
			message = "They are selling " + dopeName + " like hotcakes!";
		} else if (r == 5) {
			message = "Some good " + dopeName + " hits the market!";
		}
		updateLog(message,'important');
	}
	return newPrice;
}