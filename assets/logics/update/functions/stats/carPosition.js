export const carPosition = () => {
	var $positionOfCar = window.saveState.stats.carordinal,
		$carCharacter = window.saveState.characters.car,
		$findOrdinalField = $('[data-ordinal="' + $positionOfCar + '"]');

	$findOrdinalField.addClass('has-car').append($carCharacter);
}