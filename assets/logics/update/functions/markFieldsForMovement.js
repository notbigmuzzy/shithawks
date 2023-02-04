export const markFieldsForMovement = () => {

		//REMOVE PREVIOUS CANHAVEPLAYER FLAGS
		$('.can-have-player').removeClass('can-have-player summon-car summon-boat');
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
		var	$nextFieldCantHavePlayer = type($nextField, 'mountain') || type($nextField, 'sea') || type($nextField, 'bridge'),
			$prevFieldCantHavePlayer = type($prevField, 'mountain') || type($prevField, 'sea') || type($prevField, 'bridge'),
			$upFieldCantHavePlayer = type($upField, 'mountain') || type($upField, 'sea') || type($upField, 'bridge'),
			$downFieldCantHavePlayer = type($downField, 'mountain') || type($downField, 'sea') || type($downField, 'bridge');
		//IN CAR
		if ($characterInCar) {
			$nextFieldCantHavePlayer = type($nextField, 'mountain') || type($nextField, 'coast') && !type($nextField, 'has-boat') || type($nextField, 'sea') || type($nextField, 'bridge') && type($nextField, 'has-boat');
			$prevFieldCantHavePlayer = type($prevField, 'mountain') || type($prevField, 'coast') && !type($prevField, 'has-boat') || type($prevField, 'sea') || type($prevField, 'bridge') && type($prevField, 'has-boat');
			$upFieldCantHavePlayer = type($upField, 'mountain') || type($upField, 'coast') && !type($upField, 'has-boat') || type($upField, 'sea') || type($upField, 'bridge') && type($upField, 'has-boat');
			$downFieldCantHavePlayer = type($downField, 'mountain') || type($downField, 'coast') && !type($downField, 'has-boat') || type($downField, 'sea') || type($downField, 'bridge') && type($downField, 'has-boat');
		}
		//IN BOAT
		if ($characterInBoat) {
			$nextFieldCantHavePlayer = type($nextField, 'mountain') || type($nextField, 'highway') && !type($nextField, 'has-car') || type($nextField, 'sea') || type($nextField, 'bridge') && type($nextField, 'has-car'),
			$prevFieldCantHavePlayer = type($prevField, 'mountain') || type($prevField, 'highway') && !type($prevField, 'has-car') || type($prevField, 'sea') || type($prevField, 'bridge') && type($prevField, 'has-car'),
			$upFieldCantHavePlayer = type($upField, 'mountain') || type($upField, 'highway') && !type($upField, 'has-car') || type($upField, 'sea') || type($upField, 'bridge') && type($upField, 'has-car'),
			$downFieldCantHavePlayer = type($downField, 'mountain') || type($downField, 'highway') && !type($downField, 'has-car') || type($downField, 'sea') || type($downField, 'bridge') && type($downField, 'has-car');
		}
		//CAR ON BRIDGE
		if ($characterInCar && $characterOnBridge) {
			$nextFieldCantHavePlayer = !type($nextField, 'highway'),
			$prevFieldCantHavePlayer = !type($prevField, 'highway'),
			$upFieldCantHavePlayer = !type($upField, 'highway'),
			$downFieldCantHavePlayer = !type($downField, 'highway');
		}
		//CAR ON BRIDGE
		if ($characterInBoat && $characterOnBridge) {
			$nextFieldCantHavePlayer = !type($nextField, 'coast'),
			$prevFieldCantHavePlayer = !type($prevField, 'coast'),
			$upFieldCantHavePlayer = !type($upField, 'coast'),
			$downFieldCantHavePlayer = !type($downField, 'coast');
		}
		//MARK FIELDS
		!$nextFieldCantHavePlayer ? $nextField.addClass('can-have-player') : "";
		!$prevFieldCantHavePlayer ? $prevField.addClass('can-have-player') : "";
		!$upFieldCantHavePlayer ? $upField.addClass('can-have-player') : "";
		!$downFieldCantHavePlayer ? $downField.addClass('can-have-player') : "";

		//MARK SUMMON CAR
		if ( !type($fieldWithCharacter, 'has-car') && !type($fieldWithCharacter, 'has-boat') ) {
			type($nextField, 'highway') && !type($nextField, 'has-car') ? $nextField.addClass('summon-car') : "";
			type($prevField, 'highway') && !type($prevField, 'has-car') ? $prevField.addClass('summon-car') : "";
			type($upField, 'highway') && !type($upField, 'has-car') ? $upField.addClass('summon-car') : "";
			type($downField, 'highway') && !type($downField, 'has-car') ? $downField.addClass('summon-car') : "";
		}

		//MARK SUMMON BOAT
		if ( !type($fieldWithCharacter, 'has-car') && !type($fieldWithCharacter, 'has-boat') ) {
			type($nextField, 'coast') && !type($nextField, 'has-boat') ? $nextField.addClass('summon-boat') : "";
			type($prevField, 'coast') && !type($prevField, 'has-boat') ? $prevField.addClass('summon-boat') : "";
			type($upField, 'coast') && !type($upField, 'has-boat') ? $upField.addClass('summon-boat') : "";
			type($downField, 'coast') && !type($downField, 'has-boat') ? $downField.addClass('summon-boat') : "";
		}
}

function type(field, type) {
	var isOfType = field.hasClass(type) ? true : false;
	return isOfType;
}