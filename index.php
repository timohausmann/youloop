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

<!--[if IE 7 ]>    <html class="no-js ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]>    <html class="no-js ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
	
	<title>YouTube Dauerschleife Video Loop - endlos wiederholen :: youloop</title>

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="google-site-verification" content="nQD2LKmvIXXFyWn4NyjPJIjAem3DKGWJHd661d6JswY" />

	<meta name="description" content="Hier kannst du ganz einfach Youtube Videos in einer Endlosschleife abspielen" />
	<meta name="keywords" content="youtube, dauerschleife, wiederholen, endlos, loop, repeat, endless, tool, automatic, videos, video, music, audio, track, listen, mp3" />

	<link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
	<link rel="stylesheet" href="assets/css/style.css" />
	
	<!-- facebook like -->
	<meta property="og:type" content="website" />
	<meta property='og:title' content='Youloop - Loop Youtube Videos!' />
	<meta property='og:description' content='Mit Youloop kann man ganz einfach Youtube-Videos auf Dauerschleife abspielen!' />
	<meta property="fb:admins" content="100000133883995" />
</head>
<body>

	<section class="pageWrap">
		<header class="logo">
			<img src="assets/img/youloop_logo.png" alt="youloop logo" />
			<h1>youloop</h1>
		</header>
		
		<h2 id="intro" class="intro cursive large">Hier kannst du Youtube-Videos auf Dauerschleife wiederholen!</h2>
		
		<section class="playerWrap" id="playerWrap">
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
				
				<dl id="counter" class="counter cursive small">
					<dt>current loop</dt>
					<dd id="currentLoop">00:00</dd>
					<dt style="display:none;">personal loop</dt>
					<dd style="display:none;" id="personalLoop">00:00</dd>
				</dl>
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
		
		<form action="" method="post" class="videoForm" id="videoForm">
			<label class="cursive small" for="videoUrl">Kopiere einfach die <dfn>Video-URL von YouTube</dfn> in dieses Feld:</label>
			<input class="videoUrl cursive large" type="text" id="videoUrl" name="videoUrl" placeholder="http://youtube.com/watch?" />
		</form>
	</section>

	<script src="assets/js/libs/jquery-1.10.2.min.js"></script>
	<script src="assets/js/libs/jsapi.js"></script>
	<!--script type="text/javascript" src="http://www.google.com/jsapi"></script-->
	<script type="text/javascript">
		google.load("swfobject", "2.1");
	</script>

	<script src="assets/js/app/main.js"></script>
	<script src="assets/js/app/ytapi.js"></script>
	<script src="assets/js/app/preview.js"></script>
	<script src="assets/js/app/counter.js"></script>
	
	<!--script src="assets/js/script.min.js"></script-->
</body>
</html>