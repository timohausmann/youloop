var APP = APP || {};

APP.player = (function(window, $, undefined) {

	var	$player = $('#player'),
		yt_dom_id = 'player_media',

		/*
		 * @var is_player_visible
		 * true, if player is visible
		 */
		is_player_visible;



	/*
	 * init
	 */
	function init() {

	}


	/*
	 * load
	 */
	function load( videoData ) {

		var ytid = videoData.id;

		APP.videoinfo.createCurrent( videoData );
		
		APP.videoinfo.closePreview();
		
		//init the counter
		APP.counter.reset();
		APP.counter.init( ytid );

		//update URL
		if( Modernizr.history ) {
			history.pushState({}, '', '?v=' + ytid);
		}

		//add to list
		if( Modernizr.localstorage) {

			var $list = $('#list'),
				$item = $list.find('[data-ytid="'+ ytid +'"]');

			if( !$item.length ) {
				APP.list.add(videoData);
				APP.list.updateZIndex();
			} else {

				$item
					.detach()
					.prependTo( $list );

				$list.fadeIn(500);
				APP.list.updateZIndex();
			}
		}
		
		if( !is_player_visible ) {

			is_player_visible = true;

			//set classes to show the player
			$('#videoinfo_current').addClass('videoinfo__open');
			$('#videoinfo_preview').addClass('videoinfo__play');
			$('#intro').addClass('intro__closed');
			$('#player').addClass('player__open');
			$('#player_inner').addClass('player--inner__open');
			$('#form').addClass('form__play');
		} 

		create( ytid );
	}


	/*
	 * create a new youtube player and insert it into the dom
	 * @param String video_id	The youtube video id
	 */
	function create( video_id ) {
		
		if( typeof video_id === 'undefined' ) return;
		
		var	urlParams = {
				enablejsapi: 1,
				playerapiid: 'ytplayer',
				fs: 1,
				loop: 1,
				autoplay: 1,
				version: 3
			},
			embedUrl = 'http://www.youtube.com/v/'+ video_id + '?',
			params = { 
				allowFullScreen: "true",
				allowScriptAccess: "always", 
				bgcolor: "#000000" 
			},
			atts = { 
				id: yt_dom_id 
			},	
			flashvars = {};
		
		for( var key in urlParams ) {
			embedUrl += key + '=' + urlParams[key] + '&';
		}
		
		swfobject.embedSWF(embedUrl, yt_dom_id, "550", "309", "9", null, flashvars, params, atts);
	}
	

	/*
	 * EventListener for YouTube API : play
	 */
	function onVideoPlay() {
		
		$('#videoinfo_current')
			.find('.disc')
			.removeClass('disc__pause')
			.addClass('disc__play');
			
		APP.counter.start();
	}
	

	/*
	 * EventListener for YouTube API : pause
	 */
	function onVideoPause() {

		$('#videoinfo_current')
			.find('.disc')
			.addClass('disc__pause');

		APP.counter.stop();
	}
	

	/*
	 * EventListener for YouTube API : end
	 */
	function onVideoEnd() {
		var ytplayer = document.getElementById("player_media");
		ytplayer.playVideo();
	}
	
	
	/*
	 * YouTube API onYouTubePlayerReady
	 */
	window.onYouTubePlayerReady = function(playerId) {
		var player = document.getElementById(yt_dom_id);
		player.addEventListener("onStateChange", "onPlayerStateChange");
	};


	/*
	 * YouTube API onPlayerStateChange
	 */
	window.onPlayerStateChange = function(state) {
		
		var trace;
		
		switch(state) {
			case -1:
				trace = "unstarted";
				break;
			case 0:
				trace = "video ended";
				APP.player.onVideoEnd();
				break;
			case 1:
				trace = "video started";
				APP.player.onVideoPlay();
				break;
			case 2:
				trace = "video paused";
				APP.player.onVideoPause();
				break;
			case 3:
				trace = "buffering..";
				break;
			case 5:
				trace = "video cued";
				break;
			default:
				trace = "unknown process";
		}
		console.log(trace);	
	};
	

	return {
		init : init,
		load : load,
		create: create,
		onVideoPlay : onVideoPlay,
		onVideoPause : onVideoPause,
		onVideoEnd : onVideoEnd
	};
	
})(window, jQuery);