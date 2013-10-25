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

	<section class="page">
		<header class="header">
			<img class="header--logo" src="assets/img/youloop_logo.png" alt="youloop logo" />
			<h1 class="header--caption">youloop</h1>
		</header>
		
		<h2 class="intro" id="intro">Hier kannst du Youtube-Videos auf Dauerschleife wiederholen!</h2>
		
		<section class="player" id="player">

			<div class="videoinfo videoinfo__current" id="videoinfo_current">

				<div class="disc">
					<div class="disc--mask">
						<img class="disc--image" src="http://i2.ytimg.com/vi/miRXrfaQrOs/1.jpg" alt="" />
					</div>
				</div>

				<h1 class="videoinfo--caption"></h1>
			</div>

			<div class="player--inner">

				<div id="player_media"></div>
				
				<dl class="counter" id="counter">
					<dt class="counter--caption">current loop</dt>
					<dd class="counter--value" id="counter_current">00:00</dd>
					<dt class="counter--caption hidden">personal loop</dt>
					<dd class="counter--value hidden" id="counter_storage">00:00</dd>
				</dl>
			</div>
		</section>
		
		<div class="videoinfo videoinfo__preview" id="videoinfo_preview">

			<div class="disc">
				<div class="disc--mask">
					<img class="disc--image" src="http://i2.ytimg.com/vi/miRXrfaQrOs/1.jpg" />
				</div>
			</div>

			<h1 class="videoinfo--caption"></h1>

			<button class="btn btn__loop" id="btn_start">loop</button>
			<button class="btn btn__cancel" id="btn_cancel">cancel</button>

		</div>
		
		<form action="" method="post" class="form" id="form">
			<label class="form--caption" for="form_input">Kopiere einfach die <dfn>Video-URL von YouTube</dfn> in dieses Feld:</label>
			<input class="form--input" id="form_input" type="text" name="v" placeholder="http://youtube.com/watch?" />
		</form>
	</section>

	<script src="assets/js/libs/jsapi.js"></script>
	<!--script type="text/javascript" src="http://www.google.com/jsapi"></script-->
	<script type="text/javascript">
		google.load("swfobject", "2.1");
	</script>

	<script src="assets/js/libs/jquery-1.10.2.min.js"></script>
	<script src="assets/js/app/main.js"></script>
	<script src="assets/js/app/form.js"></script>
	<script src="assets/js/app/videoinfo.js"></script>
	<script src="assets/js/app/player.js"></script>
	<script src="assets/js/app/counter.js"></script>
	
	<!--script src="assets/js/script.min.js"></script-->
</body>
</html>