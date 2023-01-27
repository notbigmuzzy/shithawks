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
				$saveFileList.append('<savefile-item><span id="' + key + '">../' + key + '</span></savefile-item>');
			}
		});
		$saveFileList.addClass('populated');
	})
}