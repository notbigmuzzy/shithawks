export const layout = () => {
	urlEventListeners();
	window.onhashchange = urlEventListeners;

	function urlEventListeners() {
		let e = location.hash,
			currentTab = document.querySelector('[href="' + e + '"]'),
			currentPage = document.getElementById(e.substring(1));

		let getSiblings = function (elem) {
			let siblings = [];
			let sibling = elem.parentNode.firstChild;
			while (sibling) {
				if (sibling.nodeType === 1 && sibling !== elem) {
					siblings.push(sibling);
				}
				sibling = sibling.nextSibling
			}
			return siblings;
		};
		let otherTabs = getSiblings(currentTab);
		otherTabs.forEach(function(otherTab) {
			otherTab.classList.remove('active-tab');
		})
		currentTab.classList.add('active-tab');
		let otherPages = getSiblings(currentPage);
		otherPages.forEach(function(otherPage) {
			otherPage.classList.remove('active-page');
		})
		currentPage.classList.add('active-page');
	}
}