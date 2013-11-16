var APP = APP || {};

APP.counter = (function(window, $, undefined) {
	
	var	$current		= $('#counter_current'),
	    	$storage		= $('#counter_storage'),
	    	storageLoopTime		= 0,
		currentLoopTime		= 0,
		is_counting		= false,
		
		currentId,
		timeInterval;
		
	/*
	 * init the counter
	 */
	function init( id ) {
		
		currentId = id;
		
		//first second before first interval
		currentLoopTime = 1;
		
		//if( !Modernizr.localstorage ) return;
		
		//check if this video was looped before
		if( localStorage.getItem("youloop_" + currentId) ) {
			
			storageLoopTime = parseInt( localStorage.getItem("youloop_" + currentId) );
			
			showStorageLoop();
		}
	}
	

	/*
	 * start the interval, update every second
	 */
	function start() {
		
		//don't start a second counter
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
			totalLoopTime = currentLoopTime + storageLoopTime,
			storageMinutes,
			storageSeconds;
			
		if( minutes < 10) minutes = "0" + minutes;
		if( seconds < 10) seconds = "0" + seconds;
		
		currentLoopTime = currentLoopTime+1;
		
		$current.html( minutes + ':' + seconds );
		
		if( storageLoopTime ) {
			
			storageMinutes = Math.floor( totalLoopTime / 60 );
			storageSeconds = totalLoopTime - (storageMinutes*60);
			
			if( storageMinutes < 10) storageMinutes = "0" + storageMinutes;
			if( storageSeconds < 10) storageSeconds = "0" + storageSeconds;
			
			$storage.html( storageMinutes + ':' + storageSeconds );
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
		
		storageLoopTime = 0;
		currentLoopTime	= 0;
		
		$current.html( '00:00' );
		$storage.html( '00:00' );
		
		hideStorageLoop();
	}
	

	/*
	 * show storage loop
	 */
	function showStorageLoop() {
		$storage
				.prev()
				.andSelf()
				.removeClass('hidden');
	}
	

	/*
	 * hide storage loop
	 */
	function hideStorageLoop() {
		$storage
				.prev()
				.andSelf()
				.addClass('hidden');
	}
	
	
	return {
		init : init,
		start : start,
		stop : stop,
		reset : reset
	};
	
})(window, jQuery);