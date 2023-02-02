export const updateMovementType = (pos, field, msg) => {
	if (pos.hasClass('has-car')) {
		msg = "You're in a car!"
	} else if (pos.hasClass('has-boat')) {
		msg = "You're on a boat!"
	} else if (pos.hasClass('city')) {
		if (pos.hasClass('hideout')) {
			msg = "You're in your hideout!"
		} else {
			msg = "You're in a city!"
		}
	} else {
		msg = "You're on foot!"
	}
	
	//UPDATE ALL STATS FIELD
	field.html('<p>' + msg + '</p>')
}

export const updateMovementLog = (pos, field, msg) => {
	if (pos.hasClass('has-car')) {
		msg = "You're in a car!"
	} else if (pos.hasClass('has-boat')) {
		msg = "You're on a boat!"
	} else if (pos.hasClass('city')) {
		if (pos.hasClass('hideout')) {
			msg = "You're in your hideout!"
		} else {
			msg = "You're in a city!"
		}
	} else {
		msg = "You're on foot!"
	}
	
	//UPDATE ALL STATS FIELD
	field.prepend('<p>' + msg + '</p>')
}