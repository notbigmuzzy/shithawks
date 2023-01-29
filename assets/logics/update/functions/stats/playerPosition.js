export const playerPosition = () => {
	var $positionOfPlayerCharacter = window.saveState.stats.playerordinal,
		$playerCharacter = window.saveState.characters.player,
		$findOrdinalField = $('[data-ordinal="' + $positionOfPlayerCharacter + '"]');

	$findOrdinalField.addClass('has-character').append($playerCharacter);
}