export const summonBoat = (fieldMovingTo) => {
	$('.has-boat').removeClass('has-boat').find('in-boat').remove();
	fieldMovingTo.addClass('has-boat').removeClass('summon-boat').append(window.saveState.characters.boat);
	let currentBoatPosition = $('.has-boat').attr("data-ordinal");
	window.saveState.stats.boatordinal = currentBoatPosition;
}