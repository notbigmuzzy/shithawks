export const summonCar = (fieldMovingTo) => {
	$('.has-car').removeClass('has-car').find('in-car').remove();
	fieldMovingTo.addClass('has-car').removeClass('summon-car').append(window.saveState.characters.car);
	let currentCarPosition = $('.has-car').attr("data-ordinal");
	$('.summon-car').removeClass('summon-car, can-have-player');
	$('.summon-boat').removeClass('summon-boat, can-have-player');
	window.saveState.stats.carordinal = currentCarPosition;
}