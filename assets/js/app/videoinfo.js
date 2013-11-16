var APP = APP || {};

APP.videoinfo = (function(window, $, undefined) {
	
	var 	$current 	= $('#videoinfo_current'),
		$preview 	= $('#videoinfo_preview');


	/*
	 * init
	 */
	function init() {

	}


	/*
	 * createPreview
	 */
	function createPreview( videodata ) {
		create( $preview, videodata );

		$preview
			.find('.disc').removeClass('disc__hidden');

		window.setTimeout(function() {

			$preview
				.find('.btn').removeClass('btn__hidden')
				.end()
				.find('.videoinfo--caption').removeClass('videoinfo--caption__hidden');
		}, 500);
			
	}

	/*
	 * createCurrent
	 */
	function createCurrent( videodata ) {
		create( $current, videodata );
	}
	

	/*
	 * open the video preview and update values
	 */
	function create( $container, videodata ) {

		$container
			.addClass('videoinfo__open')
			.find('.videoinfo--caption').html( videodata.title )
			.end()
			.find('.disc--image').attr('src', videodata.image );
	}


	/*
	 * close the video preview
	 */
	function closePreview() {

		$preview
			.removeClass('videoinfo__open')
			.find('.disc').addClass('disc__hidden')
			.end()
			.find('.btn').addClass('btn__hidden')
			.end()
			.find('.videoinfo--caption').addClass('videoinfo--caption__hidden');
	}
	
	
	return {
		init : init,
		createPreview: createPreview,
		createCurrent: createCurrent,
		closePreview : closePreview
	};
	
})(window, jQuery);