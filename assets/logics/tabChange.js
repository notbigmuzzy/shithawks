export const tabChange = () => {
	hashChangeTabsChange();
	window.onhashchange = hashChangeTabsChange;

	function hashChangeTabsChange() {
		//GET LOCATION HASH
		var e = location.hash;
		if (e.length == 0) {
			e = "#map";
			window.location.hash = "#map";
		}

		//GET SIBLINGS
		var currentTab = document.querySelector('[href="' + e + '"]'),
			currentPage = document.getElementById(e.substring(1)),
			getSiblings = function (elem) {
			var siblings = [],
				sibling = elem.parentNode.firstChild;

			while (sibling) {
				if (sibling.nodeType === 1 && sibling !== elem) {
					siblings.push(sibling);
				}
				sibling = sibling.nextSibling
			}
			return siblings;
		};

		//TABS
		var otherTabs = getSiblings(currentTab);
		otherTabs.forEach(function(otherTab) {
			otherTab.classList.remove('active-tab');
		})
		currentTab.classList.add('active-tab');

		//PAGES
		var otherPages = getSiblings(currentPage);
		otherPages.forEach(function(otherPage) {
			otherPage.classList.remove('active-page');
		})
		currentPage.classList.add('active-page');
	}
}

export const mapOverviewTabs = () => {
	$('over-tab').click(function() {
		if ( $(this).hasClass('map') ) {
			$('.map-float').removeClass('overview').addClass('map');
		} else if ( $(this).hasClass('overview') ) {
			$('.map-float').removeClass('map').addClass('overview').addClass($('overview-icon.active').attr('data-overviewicon'));
		}
	});

	$('overview-icon').click(function(e) {
		e.stopPropagation();
		$(this).addClass('active').siblings().removeClass();
		$('.map-float').removeClass('city-overview road-overview character-overview').addClass( $(this).attr('data-overviewicon') );
	});
}