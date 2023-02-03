export const summonCar = (fieldMovingTo) => {
	$('.has-car').removeClass('has-car').find('in-car').remove();
	fieldMovingTo.addClass('has-car').removeClass('summon-car').append(window.saveState.characters.car);
	var currentCarPosition = $('.has-car').attr("data-ordinal");
	state.stats.carordinal = currentCarPosition;
}