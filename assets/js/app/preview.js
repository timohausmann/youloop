var APP = APP || {};

APP.preview = (function(window, undefined) {
	
	var $previewInfo 	= $('#previewInfo');
	
	/*
	 * open the video preview and update it's values
	 */
	function create( previewData ) {

		$previewInfo
			.addClass('open')
			.find('.videoTitle').html( previewData.title )
                	.end()
                	.find('.videoImage').attr('src', previewData.image );
	}

	
	/*
	 * close the video preview
	 */
	function close() {

		$previewInfo
			.removeClass('open');
	}
	
	
	return {
		create : create,
		close : close
	};
	
})(window);