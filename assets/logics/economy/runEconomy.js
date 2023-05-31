import { priceFlow } from './priceFlow.js'
import { updateDrugStats } from "../update/stats/updateDrugStats.js"
import { spiceMustFlow } from '../events/spiceMustFlow.js'
import { recessionTimeBaby } from '../events/recessionTimeBaby.js'
import { randNO } from '../math/randNO.js'

export const runEconomy = () => {

	//PREP LIST OF DRUGS
	let listOfDrugsFromSaveState = window.saveState.spice;
	let tempListOfDrugs = [];
	for( let d in listOfDrugsFromSaveState ) {
		tempListOfDrugs.push([d,listOfDrugsFromSaveState[d]]);
	}

	//CHANGE GLOBAL ECONOMY
	let globalEconomy = window.saveState.economy.globalEconomy;
	if (window.saveState.flags.flagGlobalEconomyCooldown == 0) {
		let changeGlobalEconomy = randNO(1,30);
		changeGlobalEconomy == 10 ? spiceMustFlow() : '';
		changeGlobalEconomy == 20 ? recessionTimeBaby() : '';
	}

	if (window.saveState.flags.flagBullPeriod == 0 && window.saveState.flags.flagBearPeriod == 0) {
		window.saveState.economy.globalEconomy = "stagnant";
	}

	console.log(window.saveState.economy.globalEconomy)

	tempListOfDrugs.forEach(function(drug) {
		//DEFAULT SETUP		  --VALUES--
		let dopeName = 			drug[0],
			lastDopePrice = 	drug[1],
			flowAmount = 		window.saveState.flow[dopeName],
			bottomPrice = 		window.saveState.economy.bottomDrugPrice,
			topPrice = 			window.saveState.economy.topDrugPrice,
			flowTendency = 		window.saveState.economy.flowTendency;

		//SET INDIVIDUAL DOPE STATS
		switch (dopeName) {
			case 'Acid':
				bottomPrice = flowAmount * 7;
				topPrice = bottomPrice * 3.5;
		    	break;
		    case 'Cocaine':
				bottomPrice = flowAmount * 20;
				topPrice = bottomPrice * 2;
		    	break;
			case 'Hashish':
				bottomPrice = flowAmount * 12;
				topPrice = bottomPrice * 2;
				break;
			case 'Heroin':
				bottomPrice = flowAmount * 28;
				topPrice = bottomPrice * 2;
				break;
			case 'MDA':
				bottomPrice = flowAmount * 28;
				topPrice = bottomPrice * 1.5;
				break;
			case 'Opium':
				bottomPrice = flowAmount * 16;
				topPrice = bottomPrice * 2;
				break;
			case 'PCP':
				bottomPrice = flowAmount * 16;
				topPrice = bottomPrice * 2;
				break;
			case 'Peyote':
				bottomPrice = flowAmount * 12;
				topPrice = bottomPrice * 2.5;
				break;
			case 'Shrooms':
				bottomPrice = flowAmount * 6;
				topPrice = bottomPrice * 2.5;
				break;
			case 'Speed':
				bottomPrice = flowAmount * 3;
				topPrice = bottomPrice * 5;
				break;
			case 'Viagra':
				bottomPrice = flowAmount * 5;
				topPrice = bottomPrice * 3;
				break;
			case 'Weed':
				bottomPrice = flowAmount * 12;
				topPrice = bottomPrice * 2;
				break;
			default:
		    	//console.log('Default');
		}

		//CALL PRICE FLOW
		let newDopePrice = priceFlow( 	
			dopeName,
			lastDopePrice,
			bottomPrice,
			topPrice,
			flowAmount,
			flowTendency,
			globalEconomy
		);

		//SET NEW PRICE
		window.saveState.spice[dopeName] = newDopePrice;

		//UPDATE DRUG STATS ON DETAILS PAGE
		updateDrugStats(dopeName,newDopePrice,topPrice);
	});
};