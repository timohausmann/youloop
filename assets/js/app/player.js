var APP = APP || {};

APP.player = (function(window, undefined) {

	var 	$player = $('#player'),
		yt_dom_id = 'player_media',
		videoData;




	function init() {

	}





	/*
	 * create a new youtube player and insert it into the dom
	 * @param String video_id	The youtube video id
	 */
	function load( video_id ) {
		
		if( typeof video_id === 'undefined' ) {
			console.log('no video id');
			return;
		}
		
		var	urlParams = {
				enablejsapi : 1,
				playerapiid : 'ytplayer',
				fs : 1,
				loop : 1,
				autoplay : 1,
				version : 3
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
		
		for( key in urlParams ) {
			embedUrl += key + '=' + urlParams[key] + '&';
		}
		
		swfobject.embedSWF(embedUrl, yt_dom_id, "550", "309", "9", null, flashvars, params, atts);
	}
	

	/*
	 * EventListener for YouTube API : play
	 */
	function onVideoPlay() {

		console.log('onVideoPlay', $('#videoinfo_current').find('.disc') );
		
		/*$playerWrap
			.removeClass('pause')
			.addClass('play');*/

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

		/*$playerWrap
			.addClass('pause');*/

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
	
	
	function getVideoData() {
		return videoData;
	}
	
	function setVideoData( value ) {
		videoData = value;
	}







	/*
	 * YouTube API Functions
	 */
	window.onYouTubePlayerReady = function(playerId) {
		var player = document.getElementById(yt_dom_id);
		player.addEventListener("onStateChange", "onPlayerStateChange");
	}


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
	}





	
	       
	return {
		init : init,
		onVideoPlay : onVideoPlay,
		onVideoPause : onVideoPause,
		onVideoEnd : onVideoEnd,
		
		load : load,
		
		getVideoData : getVideoData,
		setVideoData : setVideoData
	};
	
})(window);






