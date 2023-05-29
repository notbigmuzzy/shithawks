export const runEconomy = () => {
	let listOfDrugsFromSaveState = window.saveState.drugs,
		tempListOfDrugs = [];

	for( let d in listOfDrugsFromSaveState ) {
		tempListOfDrugs.push([d,listOfDrugsFromSaveState[d]]);
	}

	tempListOfDrugs.forEach(function(drug){
		let dopeName = drug[0];
		let amount = 10;

		updatePrice(dopeName, amount)
	});
};

function updatePrice(dope, amount) {
	window.saveState.drugs[dope] += amount;
};


// function priceFlow(flow, event) {
// 	console.log('floow')
// }