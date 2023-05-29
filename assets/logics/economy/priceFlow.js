export const priceFlow = (dopeName,lastDopePrice,bottomPrice,topPrice,flowAmount,flowTendency) => {
	switch (flowTendency) {
		case 'positive':
			flowAmount = flowAmount * 1;
			break;
		case 'negative':
			flowAmount = flowAmount * -1;
			break;
		default:
	    	flowAmount = 0;
	}

	//APPLY FLOWAMOUNT
	let newPrice = lastDopePrice += flowAmount;
	//IF NEW DRUG PRICE BELLOW 0
	newPrice <= 0 ? newPrice = bottomPrice : newPrice;
	//IF NEW DRUG PRICE ABOVE TOP
	newPrice >= topPrice ? newPrice = topPrice : newPrice;
	//RETURN NEWPRICE
	return newPrice;
}