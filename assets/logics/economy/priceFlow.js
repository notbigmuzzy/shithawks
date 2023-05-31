import { flowControl } from './flowControl.js'
import { priceBottomedOut } from '../events/priceBottomedOut.js'
import { priceToDamnHigh } from '../events/priceToDamnHigh.js'

export const priceFlow = (
		dopeName,
		lastDopePrice,
		bottomPrice,
		topPrice,
		flowAmount,
		flowTendency,
		globalEconomy,
		priceCorrection,
		newPrice
	) => {

	//GET DRUGS PRICE CORRECTION
	priceCorrection = flowControl(priceCorrection,flowAmount,flowTendency,globalEconomy);
	newPrice = lastDopePrice += priceCorrection;

	//IF NEW DRUG PRICE BELLOW 0
	newPrice = priceBottomedOut(dopeName,newPrice, bottomPrice);

	//IF NEW DRUG PRICE ABOVE TOP
	newPrice = priceToDamnHigh(dopeName,newPrice, topPrice);

	//RETURN NEWPRICE
	return newPrice;
}