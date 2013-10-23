<!doctype html>


<!--
	just..	___                                                   
	      /'___\                                                  
	     /\ \__/  ___   _ __       __  __    ___   __  __         
	     \ \ ,__\/ __`\/\`'__\    /\ \/\ \  / __`\/\ \/\ \        
	      \ \ \_/\ \L\ \ \ \/     \ \ \_\ \/\ \L\ \ \ \_\ \__  __ 
	       \ \_\\ \____/\ \_\      \/`____ \ \____/\ \____/\_\/\_\
		\/_/ \/___/  \/_/       `/___/> \/___/  \/___/\/_/\/_/
					   /\___/                     
					   \/__/
-->


<!--[if lt IE 7 ]> <html class="no-js ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]>    <html class="no-js ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]>    <html class="no-js ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
	<meta charset="utf-8" />
	
	<title>YouTube Dauerschleife Video Loop - endlos wiederholen :: youloop</title>
	
	<!-- facebook like -->
	<meta property="og:type" content="website" />
	<!-- <meta property="og:site_name" content="Youloop" />		 -->
	<meta property='og:title' content='Youloop - Loop Youtube Videos!' />
	<meta property='og:description' content='Mit Youloop kann man ganz einfach Youtube-Videos auf Dauerschleife abspielen!' />
	<!-- <meta property="og:url" content="http://trashnet.de/youloop/" /> -->
	<meta property="fb:admins" content="100000133883995" />
	
	<meta name="description" content="Hier kannst du ganz einfach Youtube Videos in einer Endlosschleife abspielen" />
	<meta name="keywords" content="youtube, dauerschleife, wiederholen, endlos, loop, repeat, endless, tool, automatic, videos, video, music, audio, track, listen, mp3" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	<meta name="google-site-verification" content="nQD2LKmvIXXFyWn4NyjPJIjAem3DKGWJHd661d6JswY" />
	
	<link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
	
	<link rel="stylesheet" href="assets/css/style.css" />
		
	<script src="assets/js/libs/modernizr-1.7.min.js"></script>
</head>
<body>

	<section id="pageWrap">
		<header id="logo">
			<img src="assets/img/youloop_logo.png" alt="youloop logo" />
			<h1>youloop</h1>
		</header>
		
		<h2 id="intro" class="cursive large">Hier kannst du Youtube-Videos auf Dauerschleife wiederholen!</h2>
		
		<section id="playerWrap">
			<div id="videoInfo" class="videoInfo">
				<div class="disc_mask_outer">
					<div class="disc_mask">
						<img class="videoImage" src="http://i2.ytimg.com/vi/miRXrfaQrOs/1.jpg" alt="#" />
					</div>
				</div>
				<h1 class="videoTitle" class="cursive large"></h1>
			</div>
			<div class="inner">
				<div id="player"></div>
				
				<dl id="counter" class="cursive small">
					<dt>current loop</dt>
					<dd id="currentLoop">00:00</dd>
					<dt style="display:none;">personal loop</dt>
					<dd style="display:none;" id="personalLoop">00:00</dd>
				</dl>
				
				<button id="shuffle" class="btn btnShuffle cursive large">
					<span class="icon"></span>
					<span class="caption">auto playlist</span>
				</button>
				
				<div id="playlistQueue" class="videoList"></div>
			</div>
		</section>
		
		<div id="previewInfo" class="videoInfo">
				<div class="disc_mask_outer">
				<div class="disc_mask">
					<img class="videoImage" src="http://i2.ytimg.com/vi/miRXrfaQrOs/1.jpg" />
				</div>
			</div>
			<h1 class="videoTitle" class="cursive large"></h1>
			<button id="loopStart" class="btn btnLoop cursive large">loop</button>
			<button id="loopCancel" class="btn btnCancel cursive large">cancel</button>
		</div>
		
		<form action="" method="post" id="videoForm">
			<label class="cursive small" for="videoUrl">Kopiere einfach die <dfn>Video-URL von YouTube</dfn> in dieses Feld:</label>
			<input class="cursive large" type="text" id="videoUrl" name="videoUrl" placeholder="http://youtube.com/watch?" />
		</form>
	</section>

	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.js"></script>
	<script>window.jQuery || document.write('<script src="http://trashnet.de/js/jquery-1.7.2.min.js">\x3C/script>')</script>
	
	
	<script type="text/javascript" src="http://www.google.com/jsapi"></script>
	<script type="text/javascript">
		google.load("swfobject", "2.1");
	</script>
	
	<script src="assets/js/plugins.js"></script>
	<script src="assets/js/script.js"></script>
</body>
</html>