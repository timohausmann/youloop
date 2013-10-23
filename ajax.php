<?php
	if( !isset($_GET['url']) ) {
		die('<pre>giev teh parameters kthx</pre>');
	}
	
	$url = $_GET['url'];
	$data = getYouloopData($url);
	
	echo json_encode( $data );


	function getYouloopData($url) {
		
		if(preg_match("/youtube\.com\/watch.*v=([A-Za-z0-9._%-]*)[&\w;=\+_\-]*/", $url, $matches)) {
	    	
			$id = $matches[1];
			
			$videoData = youtubeVideoData($id);
			
			if( isset($videoData['error']) ) {
				$status = "error";
			} else {
				$status = "ok";
			}
			
			$youtubeData = array(
				'id'		=> $id,
				'status'	=> $status,
				'data'		=> $videoData
			);
		} else {
			$youtubeData = array(
				'status'	=> "no_id"
			);
		}
		
		
		
		return $youtubeData;
	}
	
	function youtubeVideoData($id) {
		
		
		
		libxml_use_internal_errors(true);
		
		$str  = array('Accept-Language: '.$_SERVER["HTTP_ACCEPT_LANGUAGE"]);
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, "http://gdata.youtube.com/feeds/api/videos/". $id);
		curl_setopt($ch, CURLOPT_HTTPHEADER, $str);
		curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 4);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
		if( !$xml = simplexml_load_string(utf8_encode(curl_exec($ch))) ) {
			$return = array(
				"error" => "simplexml_load_string failure"
			);
		} else {
			
			curl_setopt($ch, CURLOPT_URL, "http://gdata.youtube.com/feeds/api/videos/". $id ."/related");
			if( !$xml_related = simplexml_load_string(utf8_encode(curl_exec($ch))) ) {
				
				$return = array(
					"error" => "related failure"
				);
				
			} else {
				
				foreach($xml_related->entry as $entry) {
					
					$thumbnails = $entry->xpath("media:group/media:thumbnail");
					$i=0;
					foreach ($thumbnails as $thumbnail) {
						if($i==2) {
							$image = (string) $thumbnail['url'];
							break;
						}
						$i++;
					}
					
					$gdata_id = (string) $entry->id;
					$relatedList[] = array(
						'id' 	=> substr($gdata_id, strrpos($gdata_id, "/")+1),
						'title' => utf8_decode((string) $entry->title),
						'image'	=> $image
					);
				}
				
				$thumbnails = $xml->xpath("media:group/media:thumbnail");
				$i=0;
				foreach ($thumbnails as $thumbnail) {
					if($i==2) {
						$image = (string)$thumbnail['url'];
						break;
					}
					$i++;
				}
				
				$return = array(
					"id"		=> $id,
					"title"		=> utf8_decode($xml->title),
					"image"		=> $image,
					"related"	=> $relatedList
				);
				
			}
		}
		
		return $return;
	}
	
?>