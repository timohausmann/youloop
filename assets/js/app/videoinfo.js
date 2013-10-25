var APP = APP || {};

APP.videoinfo = (function(window, undefined) {
	
	var 	$current 	= $('#videoinfo_current'),
		$preview 	= $('#videoinfo_preview');


	function init() {

	}


	/*
	 * update the video info shown above the video
	 */
	/*function updateVideoInfo() {
		
		$videoInfo
			.find('.videoTitle').html( videoData.title )
			.end()
			.find('.videoImage').attr('src', videoData.image );
	}*/

	function createPreview( videodata ) {
		create( $preview, videodata );
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
	function close( $container ) {

		$container
			.removeClass('videoinfo__open');
	}
	
	
	return {
		init : init,
		createPreview: createPreview,
		close : close
	};
	
})(window);