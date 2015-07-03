var APP = APP || {};

APP.form = (function(window, $, undefined) {
	
	var	$form		= $('#form'),
		$input		= $('#form_input'),
		$loopStart	= $('#btn_start'),
		$loopCancel	= $('#btn_cancel'),

		/*
		 * @var previewData 
		 * holding data for preview & current video
		 * keys: id, title, image
		 */
		previewData,
		
		/*
		 * @var inputTimeout
		 * timeout for triggering the ajax request
		 */
		inputTimeout;


	/*
	 * init the application
	 * bind events
	 */
	function init() {
		
		//bind events for input field
		$input
			.on('keyup', handleKeyup)
			.on('click', handleClick);

		//button loop
		$loopStart
			.on('click', handleStart);
		
		//button cancel
		$loopCancel
			.on('click', handleCancel);   
			
		//dev
		/*$input
			.val('http://www.youtube.com/watch?feature=endscreen&NR=1&v=R8MWKsheHxk')
			.trigger('keyup');*/
				
	}
	

	/*
	 * on input keyup,
	 * fire the ajax request after 500ms
	 */
	function handleKeyup() {

		clearTimeout(inputTimeout);

		inputTimeout = setTimeout(function() {
			
			if($input.val() === "") return;
			
			submitAjax();
			
		}, 500);
	}


	/*
	 * select the input on click
	 */
	function handleClick() {
		this.select();
	}
	
	
	/*
	 * do stuff before loading the player
	 */
	function handleStart() {
		
		APP.player.load( previewData );
	}


	/*
	 * cancel
	 */
	function handleCancel() {
		APP.videoinfo.closePreview();
	}
	

	
	
	
	/*
	 * create a temporary error message above the input field
	 * @param String message	The error to be shown
	 */
	function createFormError( message ) {		

		var $error = $('<span class="form--error">'+ message +'</span>');

		$form.append( $error );

		$error.on( APP.animEndEvent, function() {

			$error.remove(); 
		});
		
	}
	

	/*
	 * post the input value to the ajax service
	 */
	function submitAjax() {

		$.ajax({
			url: 'ajax.php',
			data: {
				url: $input.val()
			},
			dataType: "json",
			success: processAjax
		});	
	}
	

	/*
	 * Ajax callback.
	 * if ajax data is ok, update the previewData and display it.
	 * else, show error
	 * @param Object data	The ajax result
	 */
	function processAjax( data ) {

		if(data.status === "ok") {
			
			previewData = {
				id : data.id,
				title : data.title,
				image : data.image
			};
			
			APP.videoinfo.createPreview( previewData );
			
		} else if(data.status === "no_id") {
			APP.form.createFormError( 'keine Video ID gefunden' );
			
		} else if(data.status === "no_data") {
			APP.form.createFormError( 'Video nicht gefunden' );
			
		}
	}
	

	return {
		init: init,
		createFormError: createFormError
	};
	
})(window, jQuery);