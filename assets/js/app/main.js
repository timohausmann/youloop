var APP = APP || {};

APP.animEndEvent = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';
APP.transitEndEvent = 'webkitTransitionEnd oTransitionEnd MSTransitionEnd transitionend';

$(function() {
		
	//
	for (var key in APP) {

		var obj = APP[key];

		if(obj.hasOwnProperty('init')) {
			obj.init();
		}
	}
});


