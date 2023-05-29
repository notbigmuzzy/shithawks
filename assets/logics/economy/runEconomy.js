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
			flowAmount = window.saveState.flow[dopeName],
			bottomPrice = 		100,
			topPrice = 			2000,
			flowTendency = 		'stagnant';
			
		switch (dopeName) {
			case 'Acid':
				bottomPrice = flowAmount * 10,
				topPrice = bottomPrice * 3,
				flowTendency = 'positive';
		    	break;
		    case 'Cocaine':
				bottomPrice = flowAmount * 5,
				topPrice = bottomPrice * 5,
				flowTendency = 'stagnant';
		    	break;
			case 'Hashish':
				bottomPrice = flowAmount * 7,
				topPrice = bottomPrice * 5,
				flowTendency = 'positive';
				break;
			case 'Heroin':
				bottomPrice = flowAmount * 8,
				topPrice = bottomPrice * 5,
				flowTendency = 'negative';
				break;
			case 'MDA':
				flowAmount = 20,
				bottomPrice = flowAmount * 7,
				topPrice = bottomPrice * 5,
				flowTendency = 'negative';				
				break;
			case 'Opium':
				bottomPrice = flowAmount * 6,
				topPrice = bottomPrice * 5,
				flowTendency = 'positive';
				break;
			case 'PCP':
				bottomPrice = flowAmount * 3,
				topPrice = bottomPrice * 3,
				flowTendency = 'positive';
				break;
			case 'Peyote':
				bottomPrice = flowAmount * 10,
				topPrice = bottomPrice * 5,
				flowTendency = 'negative';
				break;
			case 'Shrooms':
				bottomPrice = flowAmount * 7,
				topPrice = bottomPrice * 5,
				flowTendency = 'positive';
				break;
			case 'Speed':
				bottomPrice = flowAmount * 9,
				topPrice = bottomPrice * 5,
				flowTendency = 'negative';
				break;
			case 'Viagra':
				bottomPrice = flowAmount * 10,
				topPrice = bottomPrice * 5,
				flowTendency = 'positive';
				break;
			case 'Weed':
				bottomPrice = flowAmount * 8,
				topPrice = bottomPrice * 5,
				flowTendency = 'stagnant';
				break;
			default:
		    	//console.log('Default');
		}

		console.log(topPrice)

		let newDopePrice = priceFlow(dopeName,lastDopePrice,bottomPrice,topPrice,flowAmount,flowTendency);
		window.saveState.spice[dopeName] = newDopePrice;

		//UPDATE DRUG STATS ON DETAILS PAGE
		updateDrugStats(dopeName,newDopePrice,topPrice);
	});
};