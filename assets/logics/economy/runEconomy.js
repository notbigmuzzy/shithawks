import { priceFlow } from './priceFlow.js'
import { updateDrugStats } from "../update/stats/updateDrugStats.js"

export const runEconomy = () => {
	let listOfDrugsFromSaveState = window.saveState.spice;
	let tempListOfDrugs = [];
	for( let d in listOfDrugsFromSaveState ) {
		tempListOfDrugs.push([d,listOfDrugsFromSaveState[d]]);
	}

	tempListOfDrugs.forEach(function(drug) {
		//DEFAULT SETUP		  --VALUES--
		let dopeName = 			drug[0],
			lastDopePrice = 	drug[1],
			flowAmount = 		window.saveState.flow[dopeName],
			bottomPrice = 		window.saveState.economy.bottomDrugPrice,
			topPrice = 			window.saveState.economy.topDrugPrice,
			flowTendency = 		window.saveState.economy.flowTendency,
			globalEconomy = 	window.saveState.economy.globalEconomy;

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

		let newDopePrice = priceFlow( 	
			dopeName,
			lastDopePrice,
			bottomPrice,
			topPrice,
			flowAmount,
			flowTendency,
			globalEconomy
		);
		window.saveState.spice[dopeName] = newDopePrice;

		//UPDATE DRUG STATS ON DETAILS PAGE
		updateDrugStats(dopeName,newDopePrice,topPrice);
	});
};