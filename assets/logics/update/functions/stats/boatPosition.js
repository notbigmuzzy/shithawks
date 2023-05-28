export const boatPosition = () => {
	let $positionOfBoat = window.saveState.stats.boatordinal,
		$boatCharacter = window.saveState.characters.boat,
		$findOrdinalField = $('[data-ordinal="' + $positionOfBoat + '"]');

	$findOrdinalField.addClass('has-boat').append($boatCharacter);
}