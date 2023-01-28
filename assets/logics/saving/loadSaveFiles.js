export const loadSaveFiles = () => {
	var $saveFilesModal = $('.save-files'),
		$saveFileList = $saveFilesModal.find('savefile-list');

	$(document).on('click', '.save-files button', function(e) {
		e.stopPropagation();
		const items = { ...localStorage };
		$saveFileList.hasClass('populated') ? $saveFileList.find('savefile-item').remove() : '';

		var sortedItems = Object.keys(items).sort(function (a, b) {
			return (+b.replace("saveState-", "")) - (+a.replace("saveState-", ""));
		});
		sortedItems.forEach( key  => {
			if (key !== 'saveState') {
				$saveFileList.append('<savefile-item><span class="click-load">../' + key + '</span><span class="load-file hidden" id="' + key + '">Yes,I\'m sure!</span></savefile-item>');
			}
		});
		$saveFileList.addClass('populated');
	});

	$(document).on('click', 'savefile-item span', function(e) {
		$(this).addClass('disable');
		$(this).parents('savefile-item').find('.load-file').removeClass('hidden');
	});

	$(document).on('click', 'savefile-item .load-file', function(e) {
		//REMOVE PREVIOUS SAVESTATE
		window.saveState = '';
		localStorage.removeItem('saveState');
		//INSERT NEW SAVESTATE
		var clickedItemSaveState = $(this).attr('id'),
			getRedundantSaveState = localStorage.getItem(clickedItemSaveState);
		localStorage.setItem('saveState', getRedundantSaveState);
		window.saveState = getRedundantSaveState;
		window.location.hash = '#map';
		location.reload();
	});
}