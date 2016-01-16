var APP = APP || {};

APP.list = (function(window, $, undefined) {

	function init() {

		if( !Modernizr.localstorage ) return;

		for (var key in localStorage) {

			if(key.indexOf('youloop_') > -1 && key.indexOf('youloop_title_') !== 0) {

				var ytid = key.substr(8);
				
				add({
					id: ytid,
					title: localStorage.getItem('youloop_title_' + ytid)
				});
			}	   
		}

		$('#list')
			.on('click', '[data-ytid]', handleClick);
	}


	function handleClick() {

		var $this = $(this),
			id = $this.data('ytid'),
			title = $this.find('.disc--title').text();
		//console.log(id);

		APP.player.load({
			id: id,
			title:  title
		});
	}


	function add( videoData ) {

		title = videoData.title || localStorage.getItem('youloop_title_'+ videoData.id) || '';

		html = '<div class="disc disc__link" data-ytid="' + videoData.id + '">';
		html += '	<div class="disc--mask disc--mask__border"';
		html += '	style="background-image:url(https://i.ytimg.com/vi/' + videoData.id + '/mqdefault.jpg);"></div>';
		html += '	<div class="disc--title">' + videoData.title + '</div>';
		html += '</div>';

		$('#list').append( html );

		//get unknown titles from old clients via ajax
		if( title === '' ) {

			$.ajax({
				url: 'ajax.php',
				data: {
					url: 'youtube.com/watch?v=' + videoData.id
				},
				dataType: "json",
				success: migrateTitle
			});
		}
	}


	/*
	 * migrateTitle
	 */
	function migrateTitle( data ) {

		if(data.status === "ok") {
			$('[data-ytid="' + data.id + '"]').find('.disc--title').text( data.title );
			localStorage.setItem('youloop_title_'+ data.id, data.title);

		} else {
			localStorage.removeItem('youloop_'+ data.id);
		}
	}

	return {
		init: init,
		add: add
	};

})(window, jQuery);