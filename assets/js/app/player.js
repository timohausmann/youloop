var APP = APP || {};

APP.player = (function(window, $, undefined) {

	var	$player = $('#player'),
		yt_dom_id = 'player_media',
		player,

		is_api_loaded = false,

		/*
		 * @var cued_video_id
		 * cue id when api is not loaded yet
		 */
		cued_video_id,

		/*
		 * @var is_player_visible
		 * true, if player is visible
		 */
		is_player_visible;



	/*
	 * init
	 */
	function init() {

		var tag = document.createElement('script');

		tag.src = "https://www.youtube.com/iframe_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
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

		if( !is_api_loaded ) {
			cued_video_id = video_id;
			return;
		}

		if( player ) {
			player.loadVideoById(video_id);
		} else {
			initPlayer(video_id);
		}
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
		if( player ) {
			player.playVideo();
		}
		
	}


	/*
	 * YouTube API onYouTubeIframeAPIReady
	 */
	window.onYouTubeIframeAPIReady = function() {
		is_api_loaded = true;

		if( cued_video_id ) {
			initPlayer(cued_video_id);
		}
    };

    /**
     * initPlayer
     * Load the player initially
     */
    function initPlayer(video_id) {
		player = new YT.Player(yt_dom_id, {
			videoId: video_id,
			height: '309',
			width: '550',
			/*playerVars: {
				loop: 1,
				playlist: video_id
			},*/
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
			}
		});
    }

    /**
     * onPlayerReady
     */
    function onPlayerReady(event) {
		event.target.playVideo();
    }

    /**
     * onPlayerStateChange
     */
	function onPlayerStateChange(event) {

		var trace;
		
		switch(event.data) {
			case -1:
				trace = "unstarted";
				break;
			case YT.PlayerState.ENDED:
				trace = "video ended";
				APP.player.onVideoEnd();
				break;
			case YT.PlayerState.PLAYING:
				trace = "video started";
				APP.player.onVideoPlay();
				break;
			case YT.PlayerState.PAUSED:
				trace = "video paused";
				APP.player.onVideoPause();
				break;
			case YT.PlayerState.BUFFERING:
				trace = "buffering..";
				break;
			case YT.PlayerState.CUED:
				trace = "video cued";
				break;
			default:
				trace = "unknown process";
		}
		//console.log(trace);	
	}
	

	return {
		init : init,
		load : load,
		create: create,
		onVideoPlay : onVideoPlay,
		onVideoPause : onVideoPause,
		onVideoEnd : onVideoEnd
	};
	
})(window, jQuery);