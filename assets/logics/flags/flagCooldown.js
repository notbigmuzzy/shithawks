export const flagCooldown = () => {
	let listOfFlags = window.saveState.flags,
		tempListOfFlags = [];

	for( let f in listOfFlags ) {
		tempListOfFlags.push([f,listOfFlags[f]]);
	}

	tempListOfFlags.forEach(function(flag) {
		let flagName = flag[0],
			flagValue = flag[1];

		if (flagValue > 0) {
			flagValue = flagValue - 1;
			window.saveState.flags[flagName] = flagValue;
		}
	});
};