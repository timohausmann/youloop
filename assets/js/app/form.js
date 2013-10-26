var APP = APP || {};

APP.form = (function(window, undefined) {
	
	var 	$form 		= $('#form'),
		$input 		= $('#form_input'),
		$loopStart 	= $('#btn_start'),
		$loopCancel 	= $('#btn_cancel'),

		/*
		 * @var previewData 
		 * @var videoData
		 * holding data for preview & current video
		 * keys: id, title, image, related
		 */
		previewData,
		videoData,
		
		/*
		 * @var is_player_visible
		 * true, if player is visible
		 */
		is_player_visible,
		
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
		
		/*
		 * bind events for input field
		 */
		$input
			.on('keyup', handleKeyup)
			.on('click', handleClick);
		       
		/*
		 * button loop
		 */
		$loopStart
			.on('click', handleStart);
		
		/*
		 * button cancel
		 */
		$loopCancel
			.on('click', handleCancel);   
			
			
		/*
		 * dev
		 */
		$input
			.val('http://www.youtube.com/watch?feature=endscreen&NR=1&v=R8MWKsheHxk')
			.trigger('keyup');
				
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
		
		/*
		 * a new loop will be done,
		 * so assign the previewData as videoData
		 */
		videoData = previewData;
		
		APP.videoinfo.createCurrent( videoData );
		
		APP.videoinfo.closePreview();
		
		/*
		 * init the counter
		 */
		APP.counter.reset();
		APP.counter.init( videoData.id );
		
		if( !is_player_visible ) {
			
			/*
			 * set classes to show the player
			 */
			$('#videoinfo_current').addClass('videoinfo__open');
			
			$('#videoinfo_preview').addClass('videoinfo__play');

			$('#intro').addClass('intro__closed');
			
			$('#player').addClass('player__open');
				
			$('#form').addClass('form__play');
				
			/*
			 * after 500ms, all animations are done
			 * init the player
			 */
			window.setTimeout(function() {
				APP.player.load( videoData.id );
			}, 500);
			
			is_player_visible = true;
			
		} else {
			
			/*
			 * if the player is already visible,
			 * load the new video instant
			 */
			APP.player.load( videoData.id );
		}
		
		
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

		//console.log( data );
		
		if(data.status === "ok") {
			
			previewData = {
				id : data.id,
				title : data.data.title,
				image : data.data.image,
				related : data.data.related
			};
			
			APP.videoinfo.createPreview( previewData );
			
		} else if(data.status === "no_id") {
			createFormError( 'keine Video ID gefunden' );
			
		} else if(data.status === "invalid_id") {
			createFormError( 'ungültige Video ID' );
			
		}
	}
	
	       
	return {
		init : init
	};
	
})(window);