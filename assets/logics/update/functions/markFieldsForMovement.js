export const markFieldsForMovement = () => {
	//REMOVE PREVIOUS CANHAVEPLAYER FLAGS
	$('.can-have-player').removeClass('can-have-player');
	//SETUP CHARACTERS
	var $fieldWithCharacter = $('.has-character'),
		$characterInCar = $('.has-character').hasClass('has-car'),
		$characterInBoat = $('.has-character').hasClass('has-boat'),
		$characterOnBridge = $('.has-character').hasClass('bridge');
	//SETUP FIELDS
	var	$nextField = $fieldWithCharacter.next(),
		$prevField = $fieldWithCharacter.prev(),
		$upField = $fieldWithCharacter.prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev(),
		$downField = $fieldWithCharacter.next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next();
	//SETUP TYPES
	var	$nextFieldCantHavePlayer = type($nextField, 'mountain') || type($nextField, 'highway') && !type($nextField, 'has-car') || type($nextField, 'coast') && !type($nextField, 'has-boat') || type($nextField, 'sea') || type($nextField, 'bridge'),
		$prevFieldCantHavePlayer = type($prevField, 'mountain') || type($prevField, 'highway') && !type($prevField, 'has-car') || type($prevField, 'coast') && !type($prevField, 'has-boat') || type($prevField, 'sea') || type($prevField, 'bridge'),
		$upFieldCantHavePlayer = $upField.hasClass('mountain') || $upField.hasClass('highway') && !$upField.hasClass('has-car') || $upField.hasClass('coast') && !$upField.hasClass('has-boat') || $upField.hasClass('sea') || $upField.hasClass('bridge'),
		$downFieldCantHavePlayer = $downField.hasClass('mountain') || $downField.hasClass('highway') && !$downField.hasClass('has-car') || $downField.hasClass('coast') && !$downField.hasClass('has-boat') || $downField.hasClass('sea') || $downField.hasClass('bridge');
	//IN CAR
	if ($characterInCar) {
		$nextFieldCantHavePlayer = type($nextField, 'mountain') || type($nextField, 'coast') && !type($nextField, 'has-boat') || type($nextField, 'sea') || type($nextField, 'bridge') && type($nextField, 'has-boat');
		$prevFieldCantHavePlayer = type($prevField, 'mountain') || type($prevField, 'coast') && !type($prevField, 'has-boat') || type($prevField, 'sea') || type($prevField, 'bridge') && type($prevField, 'has-boat');
		$upFieldCantHavePlayer = $upField.hasClass('mountain') || $upField.hasClass('coast') && !$upField.hasClass('has-boat') || $upField.hasClass('sea') || $upField.hasClass('bridge') && $upField.hasClass('has-boat');
		$downFieldCantHavePlayer = $downField.hasClass('mountain') || $downField.hasClass('coast') && !$downField.hasClass('has-boat') || $downField.hasClass('sea') || $downField.hasClass('bridge') && $downField.hasClass('has-boat');
	}
	//IN BOAT
	if ($characterInBoat) {
		$nextFieldCantHavePlayer = type($nextField, 'mountain') || type($nextField, 'highway') && !type($nextField, 'has-car') || type($nextField, 'sea') || type($nextField, 'bridge') && type($nextField, 'has-car'),
		$prevFieldCantHavePlayer = type($prevField, 'mountain') || type($prevField, 'highway') && !type($prevField, 'has-car') || type($prevField, 'sea') || type($prevField, 'bridge') && type($prevField, 'has-car'),
		$upFieldCantHavePlayer = $upField.hasClass('mountain') || $upField.hasClass('highway') && !$upField.hasClass('has-car') || $upField.hasClass('sea') || $upField.hasClass('bridge') && $upField.hasClass('has-car'),
		$downFieldCantHavePlayer = $downField.hasClass('mountain') || $downField.hasClass('highway') && !$downField.hasClass('has-car') || $downField.hasClass('sea') || $downField.hasClass('bridge') && $downField.hasClass('has-car');
	}
	//CAR ON BRIDGE
	if ($characterInCar && $characterOnBridge) {
		$nextFieldCantHavePlayer = !type($nextField, 'highway'),
		$prevFieldCantHavePlayer = !type($prevField, 'highway'),
		$upFieldCantHavePlayer = !$upField.hasClass('highway'),
		$downFieldCantHavePlayer = !$downField.hasClass('highway');
	}
	//CAR ON BRIDGE
	if ($characterInBoat && $characterOnBridge) {
		$nextFieldCantHavePlayer = !type($nextField, 'coast'),
		$prevFieldCantHavePlayer = !type($prevField, 'coast'),
		$upFieldCantHavePlayer = !$upField.hasClass('coast'),
		$downFieldCantHavePlayer = !$downField.hasClass('coast');
	}
	//MARK FIELDS
	!$nextFieldCantHavePlayer ? $nextField.addClass('can-have-player') : "";
	!$prevFieldCantHavePlayer ? $prevField.addClass('can-have-player') : "";
	!$upFieldCantHavePlayer ? $upField.addClass('can-have-player') : "";
	!$downFieldCantHavePlayer ? $downField.addClass('can-have-player') : "";
}

function type(field, type) {
	var isOfType = field.hasClass(type) ? true : false;
	return isOfType;
}