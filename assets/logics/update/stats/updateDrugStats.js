export const updateDrugStats = (dopeName,dopePrice,topPrice) => {
	let dope = dopeName.toLowerCase(),
		dopePriceField = $('.drug').find('.' + dope).find('d-price label'),
		dopeGraphField = $('.drug').find('.' + dope).find('d-graph'),
		graphPointMath = Math.floor(100 / (topPrice / dopePrice)),
		dopeGraphPointHTML = '<dg-point><i style="height:' + graphPointMath + '%"></i></dg-point>'

	dopePriceField.html(dopePrice);
	dopeGraphField.append(dopeGraphPointHTML);

	let noOfGraphPoints = $('.drug').find('.' + dope).find('d-graph dg-point').length
	if (noOfGraphPoints >= 21) {
		$('.drug').find('.' + dope).find('d-graph dg-point:nth-child(-n+1)').remove();
	}
}