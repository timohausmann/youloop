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

		APP.videoinfo.createCurrent( videoData );
		
		APP.videoinfo.closePreview();
		
		//init the counter
		APP.counter.reset();
		APP.counter.init( videoData.id );

		//update URL
		if( Modernizr.history ) {
			history.pushState({}, '', '?v=' + videoData.id);
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

		create( videoData.id );
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
				version: 3,
				playlist: video_id
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
		//console.log(trace);	
	};
	

	return {
		init : init,
		load : load,
		onVideoPlay : onVideoPlay,
		onVideoPause : onVideoPause,
		onVideoEnd : onVideoEnd
	};
	
})(window, jQuery);