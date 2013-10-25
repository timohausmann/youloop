var APP = APP || {};

APP.player = (function(window, undefined) {

	var videoData;




	function init() {

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
		setVideoData : setVideoData
	};
	
})(window);






/*
 * YouTube API Functions
 */
function onYouTubePlayerReady(playerId) {
	var player = document.getElementById("player");
	player.addEventListener("onStateChange", "onPlayerStateChange");
}


function onPlayerStateChange(state) {
	
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