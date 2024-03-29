import { updateLog } from '../update/stats/updateLog.js'
import { randNO } from '../math/randNO.js'

export const priceToDamnHigh = (dopeName, newPrice, topPrice) => {
	if (newPrice >= topPrice) {
		newPrice = topPrice * 0.75;
		let message = "",
			r = randNO(1,5);

		if (r == 1 ) {
			message = "Price is too damn high! " + dopeName + "!";
		} else if (r ==2)  {
			message = "Bobby, " + dopeName + " is going down !!!";
		} else if (r == 3) {
			message = "You hear someone playing `Legalize It` by Mojo Nixon & Skid Roper";
		} else if (r == 4) {
			message = "Addicts are buying " + dopeName + " at ridiculous prices!";
		} else if (r == 5) {
			message = "Cheap " + dopeName + " flooding the market, man!";
		}
		updateLog(message,'important');
	}
	return newPrice;
}