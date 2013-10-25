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
			APP.onVideoEnd();
			break;
		case 1:
			trace = "video started";
			APP.onVideoPlay();
			break;
		case 2:
			trace = "video paused";
			APP.onVideoPause();
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