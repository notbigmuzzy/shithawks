export const debugControls = () => {

	//GLOBAL ECONOMY CONTROL BUTTONS
	$('.debug .global-p').click(function() {
		window.saveState.economy.globalEconomy = window.saveState.economy.positiveGlobalEconomy;
	});
	$('.debug .global-o').click(function() {
		window.saveState.economy.globalEconomy = "stagnant";
	});
	$('.debug .global-n').click(function() {
		window.saveState.economy.globalEconomy = window.saveState.economy.negativeGlobalEconomy;
	});
	$('.debug .flow-p').click(function() {
		window.saveState.economy.flowTendency = window.saveState.economy.positiveFlowTendency;
	});
	$('.debug .flow-o').click(function() {
		window.saveState.economy.flowTendency = "stagnant";
	});
	$('.debug .flow-n').click(function() {
		window.saveState.economy.flowTendency = window.saveState.economy.negativeFlowTendency;
	});
}

export const debugFlags = () => {
	//FLAGS DISPLAY IN DEBUG
	$('.debug .flag-bull i').html(window.saveState.flags.flagBullPeriod);
	$('.debug .flag-bear i').html(window.saveState.flags.flagBearPeriod);
	$('.debug .flag-cooldown i').html(window.saveState.flags.flagGlobalEconomyCooldown);
}