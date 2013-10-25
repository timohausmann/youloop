var APP = APP || {};

APP.main = (function(window, undefined) {
	
	var 	$intro 		= $('#intro'),
		$videoInfo 	= $('#videoInfo'),
		$playerWrap	= $('#playerWrap'),
		$player 	= $('#player'),
		
		$form 		= $('#videoForm'),
		$input 		= $('#videoUrl'),
		
		$loopStart 	= $('#loopStart'),
		$loopCancel 	= $('#loopCancel'),
		
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
			.on('click', handleLoopStart);
		
		/*
		 * button cancel
		 */
		$loopCancel
			.on('click', APP.preview.close);   
			
			
		/*
		 * dev
		 */
		/*
		$input
			.val('http://www.youtube.com/watch?feature=endscreen&NR=1&v=R8MWKsheHxk')
			.trigger('keyup');
		*/
				
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
	function handleLoopStart() {
		
		/*
		 * a new loop will be done,
		 * so assign the previewData as videoData
		 */
		videoData = previewData;
		
		updateVideoInfo();
		
		APP.preview.close();
		
		/*
		 * init the counter
		 */
		APP.counter.reset();
		APP.counter.init( videoData.id );
		
		if( !is_player_visible ) {
			
			/*
			 * set classes to show the player
			 */
			$intro
				.addClass('closed');
				
			$videoInfo
				.addClass('open');
				
			$playerWrap
				.addClass('open');
			
			$('#previewInfo')
				.addClass('play');
				
			$form
				.addClass('play');
				
			/*
			 * after 500ms, all animations are done
			 * init the player
			 */
			window.setTimeout(function() {
				loadPlayer();
			}, 500);
			
			is_player_visible = true;
			
		} else {
			
			/*
			 * if the player is already visible,
			 * load the new video instant
			 */
			loadPlayer();
		}
		
		
	}
	

	/*
	 * update the video info shown above the video
	 */
	function updateVideoInfo() {
		
		$videoInfo
			.find('.videoTitle').html( videoData.title )
			.end()
			.find('.videoImage').attr('src', videoData.image );
	}
	
	
	/*
	 * create a temporary error message above the input field
	 * @param String message	The error to be shown
	 */
	function createFormError( message ) {		

		var $error = $('<span class="flyingError cursive large">'+ message +'</span>');

		$form.append( $error );

		window.setTimeout(function() {
			$error.remove(); 
		}, 1000);
		
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
		
		if(data.status == "ok") {
			
			previewData = {
				id : data.id,
				title : data.data.title,
				image : data.data.image,
				related : data.data.related
			};
			
			APP.preview.create( previewData );
			
		} else if(data.status == "no_id") {
			createFormError( 'keine ID gefunden' );
			
		} else if(data.status == "invalid_id") {
			createFormError( 'ungültige ID' );
			
		}
	}
	

	/*
	 * create a new youtube player and insert it into the dom
	 * @param String video_id	The youtube video id
	 */
	function loadPlayer( video_id ) {
		
		if( typeof video_id === 'undefined' ) {
			video_id = videoData.id;
		}
		
		var	urlParams = {
				enablejsapi : 1,
				playerapiid : 'ytplayer',
				fs : 1,
				loop : 1,
				autoplay : 1,
				version : 2
			},
			embedUrl = 'http://www.youtube.com/v/'+ video_id + '?',
			params = { 
				allowScriptAccess: "always", 
				bgcolor: "#000000" 
			},
			atts = { 
				id: "player" 
			},	
			flashvars = {};
		
		for( key in urlParams ) {
			embedUrl += key + '=' + urlParams[key] + '&';
		}
		
		swfobject.embedSWF(embedUrl, "player", "550", "309", "9", null, flashvars, params, atts);
	}
	

	/*
	 * EventListener for YouTube API : play
	 */
	function onVideoPlay() {
		
		$playerWrap
			.removeClass('pause')
			.addClass('play');
			
		APP.counter.start();
	}
	

	/*
	 * EventListener for YouTube API : pause
	 */
	function onVideoPause() {
		$playerWrap
			.addClass('pause');
		
		APP.counter.stop();
	}
	

	/*
	 * EventListener for YouTube API : end
	 */
	function onVideoEnd() {
	}
	
	
	function getVideoData() {
		return videoData;
	}
	
	function setVideoData( value ) {
		videoData = value;
	}
	
	       
	return {
		init : init,
		onVideoPlay : onVideoPlay,
		onVideoPause : onVideoPause,
		onVideoEnd : onVideoEnd,
		
		loadPlayer : loadPlayer,
		
		getVideoData : getVideoData,
		setVideoData : setVideoData,
		updateVideoInfo: updateVideoInfo
	};
	
})(window);


$(APP.main.init);