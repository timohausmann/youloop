<?php 

	if( !isset($_GET['url']) ) {
		die('<pre>giev teh parameters kthx</pre>');
	}
	
	$url = $_GET['url'];
	$data = getYouloopData( $url );
	
	echo json_encode( $data );


	function getYouloopData($url) {
		
		if(preg_match("/youtube\.com\/watch.*v=([A-Za-z0-9._%-]*)[&\w;=\+_\-]*/", $url, $matches)) {
	    	
			$youtubeData = youtubeVideoData($matches[1]);

		} else {

			$youtubeData = array(
				'status'	=> "no_id"
			);
		}
		
		return $youtubeData;
	}
	
	function youtubeVideoData($id) {

		if (file_exists('ajax_config.php')) {
			include('ajax_config.php');
		} else {
			die('Error: could not find ajax_config.php. Please duplicate ajax_config_.php with your YouTube API key.');
		}
		
		libxml_use_internal_errors(true);

		$url = 'https://www.googleapis.com/youtube/v3/videos?id='. $id .'&key='. $config['apikey'] .'&part=snippet';
		$json = file_get_contents($url);
		$data = json_decode($json);
		
		if( !count($data->items) ) {

			$return = array(
				"status" => "no_data"
			);

		} else {
			
			$return = array(
				"id"		=> $id,
				"status" 	=> "ok",
				"title"		=> $data->items[0]->snippet->localized->title,
				"image"		=> $data->items[0]->snippet->thumbnails->medium->url				
			);
		}
		
		return $return;
	}
	
?>