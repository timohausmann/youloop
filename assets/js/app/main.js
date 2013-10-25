var APP = APP || {};

APP.animEndEvent = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';
APP.transitEndEvent = 'webkitTransitionEnd oTransitionEnd MSTransitionEnd transitionend';

$(function() {
		
	var 	$intro 		= $('#intro'),
		
		/*
		 * @var is_player_visible
		 * true, if player is visible
		 */
		is_player_visible;
	
	for (var key in APP) {

		var obj = APP[key];

		if(obj.hasOwnProperty('init')) {

			obj.init();
			console.log( 'init ' + key );
		}
	}

});