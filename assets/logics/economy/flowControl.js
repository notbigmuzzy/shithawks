import { randNO } from '../math/randNO.js'

export const flowControl = (priceCorrection,flowAmount,flowTendency,globalEconomy) => {

	//50% to have + or - flow tendency
	const r = randNO(1,10);
	if (r == 1 || r == 2 || r == 3 || r == 4 || r == 5) {
		flowTendency = window.saveState.economy.positiveFlowTendency;
	} else {
		flowTendency = window.saveState.economy.negativeFlowTendency;
	}

	//GLOBAL ECONOMY OVERRIDES FLOW TENDENCY - POSITIVE/NEGATIVE/STAGNANT
	if( globalEconomy == "stagnant") {
		switch (flowTendency) {
			case 'tide':
				priceCorrection = flowAmount * 1;
				break;
			case 'ebb':
				priceCorrection = flowAmount * -1;
				break;
			default:
		    	priceCorrection = 0;
		}		
	} else {
		switch (globalEconomy) {
			case 'bull':
				priceCorrection = flowAmount * 1;
				break;
			case 'bear':
				priceCorrection = flowAmount * -1;
				break;
			default:
		    	priceCorrection = 0;
		}
	}

	//FINAL VALUE
	return priceCorrection;
}