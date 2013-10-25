var APP = APP || {};

APP.counter = (function(window, undefined) {
	
	var	$currentLoop		= $('#counter_current'),
	    	$personalLoop		= $('#counter_storage'),
	    	personalLoopTime	= 0,
		currentLoopTime		= 0,
		is_counting		= false,
		
		currentId,
		timeInterval;
		
	/*
	 * init the counter
	 */
	function init( id ) {
		
		currentId = id;
		
		/*
		 * very first second before first interval
		 */
		currentLoopTime = 1;
		
		//if( !Modernizr.localstorage ) return;
		
		/*
		 * check if this video was looped before
		 */
		if( localStorage.getItem("youloop_" + currentId) ) {
			
			personalLoopTime = parseInt( localStorage.getItem("youloop_" + currentId) );
			
			showPersonalLoop();
		}
	}
	

	/*
	 * start the interval, update every second
	 */
	function start() {
		
		/*
		 * don't start a second counter ...
		 */
		if( is_counting ) return;
		
		is_counting = true;
		
		timeInterval = window.setInterval(increase, 1000);
	}
	

	/*
	 * this function is called every second as long as the interval is active
	 */
	function increase() {

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
		//if( Modernizr.localstorage ) {
			localStorage.setItem("youloop_" + currentId, totalLoopTime);
		//}
	}
	

	/*
	 * pause the counter
	 */
	function stop() {
		
		window.clearInterval( timeInterval );
		is_counting = false;
	}

	
	/*
	 * reset the counter completely
	 */
	function reset() {
		
		window.clearInterval( timeInterval );
		is_counting = false;
		
		personalLoopTime = 0;
		currentLoopTime	= 0;
		
		$currentLoop.html( '00:00' );
		$personalLoop.html( '00:00' );
		
		hidePersonalLoop();
	}
	

	/*
	 * show personal loop
	 */
	function showPersonalLoop() {
		$personalLoop
				.prev()
				.andSelf()
				.show();
	}
	

	/*
	 * hide personal loop
	 */
	function hidePersonalLoop() {
		$personalLoop
				.prev()
				.andSelf()
				.hide();
	}
	
	
	return {
		init : init,
		start : start,
		stop : stop,
		reset : reset
	};
	
})(window);