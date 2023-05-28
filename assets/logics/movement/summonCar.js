export const summonCar = (fieldMovingTo) => {
	$('.has-car').removeClass('has-car').find('in-car').remove();
	fieldMovingTo.addClass('has-car').removeClass('summon-car').append(window.saveState.characters.car);
	let currentCarPosition = $('.has-car').attr("data-ordinal");
	window.saveState.stats.carordinal = currentCarPosition;
}