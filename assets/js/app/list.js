var APP = APP || {};

APP.list = (function(window, $, undefined) {

	var $list;

	function init() {

		$list = $('#list');

		$list
			.on('click', '[data-ytid]', handleClick);

		$('#list_all').on('click', handleToggle);

		load();
	}


	function handleClick() {

		var $this = $(this),
			id = $this.data('ytid'),
			title = $this.find('.disc--title').text();

		APP.player.load({
			id: id,
			title:  title
		});
	}


	function handleToggle() {

		$(this).toggleClass('list--all__active');
		$list.toggleClass('list__open');

		var itemCount = $list.find('.disc').length;

		if( $list.hasClass('list__open') ) {

			$list.css('max-height', (139*Math.ceil(itemCount/8)) + 'px');
		} else {

			$list
				.removeAttr('style')
				.on( APP.transitEndEvent, function() {

				});
		}
	}


	function load() {

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

		updateZIndex();

		if( !$list.find('.disc').length ) {
			$list.fadeOut(500);
		}
	}


	function add( videoData ) {

		title = videoData.title || localStorage.getItem('youloop_title_'+ videoData.id) || '';

		html = '<div class="disc disc__link" data-ytid="' + videoData.id + '">';
		html += '	<div class="disc--mask disc--mask__border"';
		html += '	style="background-image:url(https://i.ytimg.com/vi/' + videoData.id + '/mqdefault.jpg);"></div>';
		html += '	<div class="disc--title">' + videoData.title + '</div>';
		html += '</div>';

		$('#list')
			.fadeIn(500)
			.prepend( html );

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


	/**
	 * updateZIndex
	 */
	function updateZIndex() {

		var $discs = $('#list .disc'),
			l = $discs.length;

		$discs.each(function(i) {

			$(this).css('z-index', (l-i));
		});
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
		add: add,
		updateZIndex: updateZIndex
	};

})(window, jQuery);