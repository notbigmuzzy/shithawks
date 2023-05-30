export const debugControls = () => {
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