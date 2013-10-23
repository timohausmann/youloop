/* DOM Ready */
var APP = (function(w,undefined) {
	
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
		 * @var is_playlist
		 * true, if shuffle is active
		 */
		is_playlist,
		
		/*
		 * @var inputTimeout
		 * timeout for triggering the ajax request
		 */
		inputTimeout;
	     
	/*
	 * init the application
	 * bind events
	 */
	var init = function() {
		
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
				
	},
	
	/*
	 * on input keyup,
	 * fire the ajax request after 500ms
	 */
	handleKeyup = function() {
                clearTimeout(inputTimeout);
                inputTimeout = setTimeout(function() {
                        
                        if($input.val() === "") return;
                        
                        submitAjax();
                        
		}, 500);
        },
        
        /*
         * select the input on click
         */
        handleClick = function() {
        	this.select();
        },
        
        /*
         * do stuff before loading the player
         */
        handleLoopStart = function() {
        	
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
			w.setTimeout(function() {
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
        	
        	
	},
	
	/*
	 * update the video info shown above the video
	 */
	updateVideoInfo = function() {
		
		$videoInfo
			.find('.videoTitle').html( videoData.title )
			.end()
			.find('.videoImage').attr('src', videoData.image );
	},
	
	
	
	/*
	 * create a temporary error message above the input field
	 * @param String message	The error to be shown
	 */
	createFormError = function( message ) {
		
		var $error = $('<span class="flyingError cursive large">'+ message +'</span>');
                $form.append( $error );
                w.setTimeout(function() {
                	$error.remove(); 
                }, 1000);
		
	},
	
	/*
	 * post the input value to the ajax service
	 */
	submitAjax = function() {
                    
                $.ajax({
                        url: 'ajax.php',
                        data: {
                                url: $input.val()
                        },
                        dataType: "json",
                        success: processAjax
                });	
        },
	
	/*
	 * Ajax callback.
	 * if ajax data is ok, update the previewData and display it.
	 * else, show error
	 * @param Object data	The ajax result
	 */
	processAjax = function( data ) {
		
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
	},
	
	/*
	 * create a new youtube player and insert it into the dom
	 * @param String video_id	The youtube video id
	 */
	loadPlayer = function( video_id ) {
		
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
	},
        
        /*
         * EventListener for YouTube API : play
         */
        onVideoPlay = function() {
		
		$playerWrap
			.removeClass('pause')
			.addClass('play');
			
		APP.counter.start();
	},
	
	/*
         * EventListener for YouTube API : pause
         */
	onVideoPause = function() {
		$playerWrap
			.addClass('pause');
		
		APP.counter.stop();
	},
	
	/*
         * EventListener for YouTube API : end
         */
	onVideoEnd = function() {
		
		if( is_playlist ) {
			$('#playlistQueue .disc_mask_outer')
				.first()
				.find('.buttons .btnPlay')
				.trigger('click');
		}
		
	},
	
	
	getVideoData = function() {
		return videoData;
	},
	
	setVideoData = function( value ) {
		videoData = value;
	},
	
	setIsPlaylist = function( value ) {
		is_playlist = value;
	};
	
	       
        return {
        	init : init,
        	onVideoPlay : onVideoPlay,
        	onVideoPause : onVideoPause,
        	onVideoEnd : onVideoEnd,
        	
        	loadPlayer : loadPlayer,
        	
        	setIsPlaylist : setIsPlaylist,
        	
        	getVideoData : getVideoData,
        	setVideoData : setVideoData,
        	updateVideoInfo: updateVideoInfo
        };
	
})(window);




APP.preview = (function(w, undefined) {
	
	var $previewInfo 	= $('#previewInfo');
	
	/*
	 * open the video preview and update it's values
	 */
	create = function( previewData ) {
		$previewInfo
			.addClass('open')
			.find('.videoTitle').html( previewData.title )
                	.end()
                	.find('.videoImage').attr('src', previewData.image );
	},
	
	/*
	 * close the video preview
	 */
	close = function() {
		$previewInfo
			.removeClass('open');
	};
	
	return {
		create : create,
		close : close
	};
	
})(window);



APP.shuffle  = (function(w, undefined) { 
	
	var 	$shuffle	= $('#shuffle'),
		$queue 		= $('#playlistQueue'),
		videoData;
		
	
	var init = function() {
		
		/*
		 * button shuffle
		 */
		$shuffle
			.on('click', handleClick);
		
		/*
		 * disc options
		 */
		$queue
			.on('click', '.btnPlay', handlePlay)
			.on('click', '.btnRemove', handleRemove);
			
		
	},
	
	handleClick = function() {
		
		APP.setIsPlaylist( true );
		
		videoData = APP.getVideoData();
		
		createDiscs();
		
		/*
		 * push the initial video in the related video array,
		 * so it is playable from the shuffle list
		 */
		
		videoData.related.initial = {
			id: videoData.id,
			title: videoData.title,
			image: videoData.image
		};
		APP.setVideoData( videoData );
				
		$shuffle.addClass('active');
		
		initDnD();
		
	},
	
	handlePlay = function() {
		
		var 	$this = $(this).parents('.disc_mask_outer').first(),
			index = $this.data('index'),
			thisData = videoData.related[ index ];
		
		/*
		 * move current playing video in the queue again
		 */
		movePlayingVideo();
		
		/*
		 * update current video info
		 */	
		videoData.id = thisData.id;
		videoData.index = index;
		videoData.title = thisData.title;
		videoData.image = thisData.image;
		
		/*
		 * set video data
		 */
		APP.setVideoData( videoData );
        	
        	APP.updateVideoInfo();
        	
        	/*
        	 * init the video
        	 */
        	APP.loadPlayer();
        	
        	/*
        	 * init the counter
        	 */
        	APP.counter.reset();
		APP.counter.init( videoData.id );
		
		
		/*
		 * remove from playlist
		 */
		$this.addClass('play');
		
		w.setTimeout(function() {
			$this.remove();
		}, 500);
	},
	
	handleRemove = function() {
		
		var $this = $(this).parents('.disc_mask_outer').first();
		
		$this.addClass('remove');
			
		w.setTimeout(function() {
			$this.remove();
		}, 500);
	},
	
	
	
	movePlayingVideo = function() {
		
		var 	$lastItem	= $queue.find('.disc_mask_outer').last(),
			html;
		
		if( typeof videoData.index === 'undefined' ) {
			i = 'initial';
		} else {
			i = videoData.index;
		}
		
		html = [
			'<div class="disc_mask_outer moving" id="queued-item-'+ i +'" data-index="'+ i +'">',
				'<div class="disc_mask">',
					'<img class="videoImage" src="'+ videoData.image +'" alt="#" />',
				'</div>',
				'<span class="videoTitle cursive small">'+ videoData.title +'</span>',
				'<div class="buttons">',
					'<button class="btn btnPlay"></button>',
					'<div class="btn btnMove"></div>',
					'<button class="btn btnRemove"></button>',
				'</div>',
			'</div>'
			].join('');
			
		
		(function(i) {
			
			w.setTimeout(function() {
				$('#queued-item-' + i).addClass('visible');
			}, 100 );
			
			w.setTimeout(function() {
				$('#queued-item-' + i)
					.removeClass('moving');
			}, 600 );
			
		})(i);
			
		
		$queue
			.append( html );
			
		
		rebuildZIndex();
		
	},
	
	createDiscs = function() {
		
		var 	html = '',
			amount = videoData.related.length,
			zindex;
		
		
		for( var i in videoData.related ) {
			
			zindex = amount - i;
			
			html += [
			'<div class="disc_mask_outer moving" id="queue-item-'+ i +'" data-index="'+ i +'" style="z-index:'+ zindex +'">',
				'<div class="disc_mask">',
					'<img class="videoImage" src="'+ videoData.related[i].image +'" alt="#" />',
				'</div>',
				'<span class="videoTitle cursive small">'+ videoData.related[i].title +'</span>',
				'<div class="buttons">',
					'<button class="btn btnPlay"></button>',
					'<div class="btn btnMove"></div>',
					'<button class="btn btnRemove"></button>',
				'</div>',
			'</div>'
			].join('');
			
			(function(i) {
				
				w.setTimeout(function() {
					$('#queue-item-' + i)
						.addClass('visible');
				}, i * 100);
				w.setTimeout(function() {
					$('#queue-item-' + i)
						.removeClass('moving');
				}, (i * 100) + 500 );
				
			})(i);
			
			
		}
		
		$queue
			.css('width', amount*90 + 'px' )
			.append( html );
	},
	
	rebuildZIndex = function() {
		
		var amount =  videoData.related.length;
		
		$queue
			.find('> div')
			.each(function(i) {
				
				$(this).css('z-index', (amount - i) );
			});
		
	},
	
	initDnD = function() {
		$queue
			.sortable({
				placeholder: 'disc_placeholder',
				handle : '.btnMove',
				
				tolerance : 'pointer',
				cursorAt: { 
					left: 45,
					top: 45 
				},
				
				start : function() {
					$queue.addClass('dragging');
				},
				stop: function(e, ui) {
					
					$queue.removeClass('dragging');
					ui.item.removeAttr('style');
					rebuildZIndex();
				},
				change : function() {
					rebuildZIndex();
				}
			})
			.disableSelection();
	};
	
	return {
		init : init,
		handleClick : handleClick
	};
	
})(window);



APP.counter = (function(w, undefined) {
	
	var	$currentLoop		= $('#currentLoop'),
	    	$personalLoop		= $('#personalLoop'),
	    	personalLoopTime	= 0,
		currentLoopTime		= 0,
		is_counting		= false,
		
		currentId,
		timeInterval;
		
	/*
	 * init the counter
	 */
	var init = function( id ) {
		
		currentId = id;
		
		/*
		 * very first second before first interval
		 */
		currentLoopTime = 1;
		
		if( !Modernizr.localstorage ) return;
		
		/*
		 * check if this video was looped before
		 */
		if( localStorage.getItem("youloop_" + currentId) ) {
			
			personalLoopTime = parseInt( localStorage.getItem("youloop_" + currentId) );
			
			showPersonalLoop();
		}
	},
	
	/*
	 * start the interval, update every second
	 */
	start = function() {
		
		/*
		 * don't start a second counter ...
		 */
		if( is_counting ) return;
		
		is_counting = true;
		
		timeInterval = w.setInterval(increase, 1000);
	},
	
	/*
	 * this function is called every second as long as the interval is active
	 */
	increase = function() {
		var	minutes = Math.floor( currentLoopTime / 60 ),
			seconds = currentLoopTime - (minutes*60),
			totalLoopTime = currentLoopTime + personalLoopTime,
			personalMinutes,
			personalSeconds;
			
		if( minutes < 10) minutes = "0" + minutes;
		if( seconds < 10) seconds = "0" + seconds;
		
		currentLoopTime = currentLoopTime+1;
		
		$currentLoop.html( minutes + ':' + seconds );
		
		if( personalLoopTime ) {
			
			personalMinutes = Math.floor( totalLoopTime / 60 );
			personalSeconds = totalLoopTime - (personalMinutes*60);
			
			if( personalMinutes < 10) personalMinutes = "0" + personalMinutes;
			if( personalSeconds < 10) personalSeconds = "0" + personalSeconds;
			
			$personalLoop.html( personalMinutes + ':' + personalSeconds );
		}
		
		//save loop time
		if( Modernizr.localstorage ) {
			localStorage.setItem("youloop_" + currentId, totalLoopTime);
		}
	},
	
	/*
	 * pause the counter
	 */
	stop = function() {
		
		w.clearInterval( timeInterval );
		is_counting = false;
	},
	
	/*
	 * reset the counter completely
	 */
	reset = function() {
		
		w.clearInterval( timeInterval );
		is_counting = false;
		
		personalLoopTime = 0;
		currentLoopTime	= 0;
		
		$currentLoop.html( '00:00' );
		$personalLoop.html( '00:00' );
		
		hidePersonalLoop();
	},
	
	/*
	 * show personal loop
	 */
	showPersonalLoop = function() {
		$personalLoop
				.prev()
				.andSelf()
				.show();
	},
	
	/*
	 * hide personal loop
	 */
	hidePersonalLoop = function() {
		$personalLoop
				.prev()
				.andSelf()
				.hide();
	};
	
	return {
		init : init,
		start : start,
		stop : stop,
		reset : reset
	};
	
})(window);



























var onYouTubePlayerReady = function(playerId) {
	var player = document.getElementById("player");
	player.addEventListener("onStateChange", "onPlayerStateChange");
};


var onPlayerStateChange = function(state) {
	
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
};



APP.init();
APP.shuffle.init(); 
