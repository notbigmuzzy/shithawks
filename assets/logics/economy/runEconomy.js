import { priceFlow } from './priceFlow.js'
import { updateDrugStats } from "../update/stats/updateDrugStats.js"
import { randNO } from '../math/randNO.js'
import { spiceMustFlow } from '../events/spiceMustFlow.js'
import { recessionTimeBaby } from '../events/recessionTimeBaby.js'
import { heroinBust, heroinSlap } from '../events/heroinBustAndSlap.js'

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

	tempListOfDrugs.forEach(function(drug) {
		//DEFAULT SETUP		  --VALUES--
		let dopeName = 			drug[0],
			lastDopePrice = 	drug[1],
			flowAmount = 		window.saveState.flow[dopeName],
			bottomPrice = 		window.saveState.economy.bottomDrugPrice,
			topPrice = 			window.saveState.economy.topDrugPrice,
			flowTendency = 		window.saveState.economy.flowTendency,
			specialEvent = 		0,
			se =				0;

		//SET INDIVIDUAL DOPE STATS
		switch (dopeName) {
			case 'Acid':
				bottomPrice = flowAmount * 7;
				topPrice = bottomPrice * 3.5;
				se = randNO(1,30);				
				if (se == 1) {
					specialEvent = 1;
					
				}
		    	break;
		    case 'Cocaine':
				bottomPrice = flowAmount * 20;
				topPrice = bottomPrice * 2;
				se = randNO(1,30);
				if (se == 1) {
					specialEvent = 1;
					
				}
		    	break;
			case 'Hashish':
				bottomPrice = flowAmount * 12;
				topPrice = bottomPrice * 2;
				se = randNO(1,30);
				if (se == 1) {
					specialEvent = 1;
					
				}
				break;
			case 'Heroin':
				bottomPrice = flowAmount * 28;
				topPrice = bottomPrice * 2;
				const h = randNO(1,2);
				if (h == 1) {
					[specialEvent,lastDopePrice] = heroinBust(specialEvent,lastDopePrice,bottomPrice);
				} else {
					[specialEvent,lastDopePrice] = heroinSlap(specialEvent,lastDopePrice,topPrice);
				}
				break;
			case 'MDA':
				bottomPrice = flowAmount * 28;
				topPrice = bottomPrice * 1.5;
				se = randNO(1,30);
				if (se == 1) {
					specialEvent = 1;
					
				}
				break;
			case 'Opium':
				bottomPrice = flowAmount * 16;
				topPrice = bottomPrice * 2;
				se = randNO(1,30);
				if (se == 1) {
					specialEvent = 1;
					
				}
				break;
			case 'PCP':
				bottomPrice = flowAmount * 16;
				topPrice = bottomPrice * 2;
				se = randNO(1,30);
				if (se == 1) {
					specialEvent = 1;
					
				}
				break;
			case 'Peyote':
				bottomPrice = flowAmount * 12;
				topPrice = bottomPrice * 2.5;
				se = randNO(1,30);
				if (se == 1) {
					specialEvent = 1;
					
				}
				break;
			case 'Shrooms':
				bottomPrice = flowAmount * 6;
				topPrice = bottomPrice * 2.5;
				se = randNO(1,30);
				if (se == 1) {
					specialEvent = 1;
					
				}
				break;
			case 'Speed':
				bottomPrice = flowAmount * 3;
				topPrice = bottomPrice * 5;
				se = randNO(1,30);
				if (se == 1) {
					specialEvent = 1;
					
				}
				break;
			case 'Viagra':
				bottomPrice = flowAmount * 5;
				topPrice = bottomPrice * 4;
				se = randNO(1,30);
				if (se == 1) {
					specialEvent = 1;
					
				}
				break;
			case 'Weed':
				bottomPrice = flowAmount * 12;
				topPrice = bottomPrice * 2;
				se = randNO(1,30);
				if (se == 1) {
					specialEvent = 1;
					
				}
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
			globalEconomy,
			specialEvent
		);

		//SET NEW PRICE
		window.saveState.spice[dopeName] = newDopePrice;

		//UPDATE DRUG STATS ON DETAILS PAGE
		updateDrugStats(dopeName,newDopePrice,topPrice);
	});
};