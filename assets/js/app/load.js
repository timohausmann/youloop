var APP = APP || {};

APP.load = (function(window, $, undefined) {

	/*
	 * init
	 */
	function init() {

		var v = getUrlVars().v || getUrlVars().id;

		if( typeof v === 'undefined' ) return;

		$.ajax({
			url: 'ajax.php',
			data: {
				url: 'youtube.com/watch?v=' + v
			},
			dataType: "json",
			success: processAjax
		});
	}

	/*
	 * processAjax
	 */
	function processAjax( data ) {

		if(data.status === "ok") {
			
			APP.player.load({
				id : data.id,
				title : data.title,
				image : data.image
			});
			
		} else if(data.status === "no_id") {
			APP.form.createFormError( 'keine Video ID gefunden' );
			
		} else if(data.status === "no_data") {
			APP.form.createFormError( 'Video nicht gefunden' );
			
		}


	}

	/*
	 * getUrlVars
	 */
	function getUrlVars() {

		var	vars	= {},
			parts	= window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
					vars[key] = value;
				});

		return vars;
	}


	return {
		init : init
	};
	
})(window, jQuery);