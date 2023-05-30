export const updateMovementType = (pos, field) => {
	let message = defineMessage(pos, field);
	
	//UPDATE ALL STATS FIELD
	field.html('<p>' + message + '</p>')
}

export const updateMovementLog = (pos, field) => {
	let message = defineMessage(pos, field);
	
	//UPDATE ALL STATS FIELD
	field.prepend('<p>' + message + '</p>')

	//REMOVE OLD LOGS
	let oldLogs = $('.junfo-log').find('.vertical p').length
	if (oldLogs >= 21) {
		$('.junfo-log').find('.vertical p:nth-child(n+21)').remove();
	}
}

function defineMessage(pos, field) {
	let mesage = window.saveState.message.default;

	if (pos.hasClass('has-car')) {
		mesage = window.saveState.message.inCar;
	} else if (pos.hasClass('has-boat')) {
		mesage = window.saveState.message.onBoat;
	} else if (pos.hasClass('city')) {
		if (pos.hasClass('hideout')) {
			mesage = window.saveState.message.inHideout;
		} else {
			mesage = window.saveState.message.inCity;
		}
	} else {
		mesage = window.saveState.message.onFoot;
	}

	return mesage;
}