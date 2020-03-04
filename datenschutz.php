<?php include('config.php'); ?><!doctype html>
<html lang="de">
<head>
	
	<title>YouTube Dauerschleife :: Datenschutz :: youloop</title>

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="google-site-verification" content="nQD2LKmvIXXFyWn4NyjPJIjAem3DKGWJHd661d6JswY" />

	<meta name="description" content="Hier kannst du ganz einfach Youtube Videos in einer Endlosschleife abspielen" />
	<meta name="keywords" content="youtube, dauerschleife, wiederholen, endlos, loop, repeat, endless, tool, automatic, videos, video, music, audio, track, listen, mp3" />

	<!-- facebook like -->
	<meta property='og:title' content='Youloop - Loop Youtube Videos!' />
	<meta property='og:type' content='website' />
	<meta property='og:url' content='http://trashnet.de/youloop/' />
	<meta property='og:image' content='http://trashnet.de/youloop/assets/img/youloop_facebook.png' />
	<meta property='og:description' content='Mit Youloop kann man ganz einfach Youtube-Videos auf Dauerschleife abspielen!' />
	<meta property='fb:admins' content='100000133883995' />

	<?php $css = $config['devmode'] ? 'style.css' : 'style.min.css';
	?><link rel="stylesheet" href="assets/css/<?php echo $css . '?v=' . $config['timestamp']; ?>" />
	<link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
	<style>
		p,
		li {
			font-size: 14px;
			line-height: 1.4;
			margin-bottom: 1rem;
		}
		p + h3 {
			margin-top: 2rem;
		}
		.tldr {
			padding: 1rem;
			border: 2px solid rgba(255,255,255,0.3);
			background: rgba(0,0,0,.66);
			margin-bottom: 2rem;
		}
		.page a {
			color: cyan;
		}
	</style>

	<script src="assets/js/libs/modernizr.min.js"></script>
</head>
<body>

	<div class="page">
		<header class="header">
			<img class="header--logo" src="assets/img/youloop_logo.png" alt="youloop logo" />
			<h1 class="header--caption">youloop</h1>
		</header>
		
		<h2 class="intro" id="intro">Datenschutzerkl&auml;rung</h2>		
<div class="tldr">
<h3>Funktionsweise</h3>
<p>Bei Seitenaufruf lädt Ihre Browser die von YouTube zur Verfügung gestellte iFrame Player API als Javascript-Datei, um YouTube-Videos abspielen zu können.</p>
<p>Mit der Eingabe einer beliebigen URL in das Texteingabefeld wird die Eingabe an den Youloop Webserver übersandt und überprüft, ob es sich um eine gültige YouTube-URL handelt.</p>
<p>Wird eine YouTube-ID in der URL erkannt, werden anhand der YouTube-ID der dazugehörige Titel und das Vorschaubild von den API Services angefragt.</p>
<p>Mit Klick auf "LOOP" wird das Video in den iFrame Player geladen und abgespielt.

<h3>Speicherung von Daten</h3>
<p>Alle durch die Benutzung von Youloop generierten Daten (1. Die wiedergegebenen YouTube-Videos mit Titel und YouTube-ID sowie 2. Die Dauer der Wiedergabe) werden lediglich im lokalen Speicher des Browsers des Benutzers gespeichert (LocalStorage) und können über die Funktionen des Browsers entfernt werden.</p>
<p>Seitens des Betreibers werden keine weiteren Daten außer den tele&shy;kommunikations&shy;technisch notwendigen erhoben. Es sind keine Werbe-, Tracking- oder Analysedienste eingebunden.</p>
<p>Youloop nutzt Dienste von YouTube. Bitte wenden Sie sich direkt an YouTube für Fragen zur Datenerhebung und -verarbeitung seitens YouTube.</p>
<a style="display: inline-block;" class="btn btn__loop" href="https://trashnet.de/youloop/">zurück zu youloop</a>
</div>

<h2>1. Datenschutz auf einen Blick</h2>
<h3>Allgemeine Hinweise</h3> <p>Die folgenden Hinweise geben einen einfachen &Uuml;berblick dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgef&uuml;hrten Datenschutzerkl&auml;rung.</p>
<h3>Datenerfassung auf dieser Website</h3> <p><strong>Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser Website?</strong></p> <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Impressum dieser Website entnehmen.</p> <p><strong>Wie erfassen wir Ihre Daten?</strong></p> <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p> <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p> <p><strong>Wof&uuml;r nutzen wir Ihre Daten?</strong></p> <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur Analyse Ihres Nutzerverhaltens verwendet werden.</p> <p><strong>Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</strong></p> <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein Recht, die Berichtigung oder L&ouml;schung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, k&ouml;nnen Sie diese Einwilligung jederzeit f&uuml;r die Zukunft widerrufen. Au&szlig;erdem haben Sie das Recht, unter bestimmten Umst&auml;nden die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.</p> <p>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>
<h3>Analyse-Tools und Tools von Drittanbietern</h3> <p>Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen.</p> <p>Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerkl&auml;rung.</p>
<h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>
<h3>Datenschutz</h3> <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerkl&auml;rung.</p> <p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Die vorliegende Datenschutzerkl&auml;rung erl&auml;utert, welche Daten wir erheben und wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch, wie und zu welchem Zweck das geschieht.</p> <p>Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht m&ouml;glich.</p>
<h3>Hinweis zur verantwortlichen Stelle</h3> <p>Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser Website entnehmen Sie dem Impressum.
 <p>Verantwortliche Stelle ist die nat&uuml;rliche oder juristische Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen, E-Mail-Adressen o. &Auml;.) entscheidet.</p>
<h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3> <p>Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.</p>
<h3>Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3> <p>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GR&Uuml;NDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH F&Uuml;R EIN AUF DIESE BESTIMMUNGEN GEST&Uuml;TZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKL&Auml;RUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR K&Ouml;NNEN ZWINGENDE SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN &Uuml;BERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUS&Uuml;BUNG ODER VERTEIDIGUNG VON RECHTSANSPR&Uuml;CHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</p> <p>WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F&Uuml;R DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).</p>
<h3>Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde</h3> <p>Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh&ouml;rde, insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutma&szlig;lichen Versto&szlig;es zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>
<h3>Recht auf Daten&uuml;bertragbarkeit</h3> <p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erf&uuml;llung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem g&auml;ngigen, maschinenlesbaren Format aush&auml;ndigen zu lassen. Sofern Sie die direkte &Uuml;bertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>
<h3>SSL- bzw. TLS-Verschl&uuml;sselung</h3> <p>Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschl&uuml;sselung. Eine verschl&uuml;sselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p> <p>Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist, k&ouml;nnen die Daten, die Sie an uns &uuml;bermitteln, nicht von Dritten mitgelesen werden.</p>
<h3>Auskunft, L&ouml;schung und Berichtigung</h3> <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder L&ouml;schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten k&ouml;nnen Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>
<h3>Recht auf Einschr&auml;nkung der Verarbeitung</h3> <p>Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf Einschr&auml;nkung der Verarbeitung besteht in folgenden F&auml;llen:</p> <ul> <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, ben&ouml;tigen wir in der Regel Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer der Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li> <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtm&auml;&szlig;ig geschah/geschieht, k&ouml;nnen Sie statt der L&ouml;schung die Einschr&auml;nkung der Datenverarbeitung verlangen.</li> <li>Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen, Sie sie jedoch zur Aus&uuml;bung, Verteidigung oder Geltendmachung von Rechtsanspr&uuml;chen ben&ouml;tigen, haben Sie das Recht, statt der L&ouml;schung die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li> <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abw&auml;gung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen &uuml;berwiegen, haben Sie das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li> </ul> <p>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschr&auml;nkt haben, d&uuml;rfen diese Daten &ndash; von ihrer Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung oder zur Geltendmachung, Aus&uuml;bung oder Verteidigung von Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden eines wichtigen &ouml;ffentlichen Interesses der Europ&auml;ischen Union oder eines Mitgliedstaats verarbeitet werden.</p>
<h2>3. Datenerfassung auf dieser Website</h2>
<h3>Cookies</h3> <p>Unsere Internetseiten verwenden so genannte &bdquo;Cookies&ldquo;. Cookies sind kleine Textdateien und richten auf Ihrem Endger&auml;t keinen Schaden an. Sie werden entweder vor&uuml;bergehend f&uuml;r die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endger&auml;t gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gel&ouml;scht. Permanente Cookies bleiben auf Ihrem Endger&auml;t gespeichert, bis Sie diese selbst l&ouml;schen&nbsp;oder eine automatische L&ouml;sung durch Ihren Webbrowser erfolgt.</p> <p>Teilweise k&ouml;nnen auch Cookies von Drittunternehmen auf Ihrem Endger&auml;t gespeichert werden, wenn Sie unsere Seite betreten (Third-Party-Cookies). Diese erm&ouml;glichen uns oder Ihnen die Nutzung bestimmter Dienstleistungen des Drittunternehmens (z.B. Cookies zur Abwicklung von Zahlungsdienstleistungen).</p> <p>Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren w&uuml;rden (z.B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies dienen dazu, das Nutzerverhalten auszuwerten&nbsp;oder Werbung anzuzeigen.</p> <p>Cookies, die zur Durchf&uuml;hrung des elektronischen Kommunikationsvorgangs (notwendige Cookies) oder zur Bereitstellung bestimmter, von Ihnen erw&uuml;nschter Funktionen (funktionale Cookies, z. B. f&uuml;r die Warenkorbfunktion) oder zur Optimierung der Webseite (z.B. Cookies zur Messung des Webpublikums) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies abgefragt wurde, erfolgt die Speicherung der betreffenden Cookies ausschlie&szlig;lich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO); die Einwilligung ist jederzeit widerrufbar.</p> <p>Sie k&ouml;nnen Ihren Browser so einstellen, dass Sie &uuml;ber das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies f&uuml;r bestimmte F&auml;lle oder generell ausschlie&szlig;en sowie das automatische L&ouml;schen der Cookies beim Schlie&szlig;en des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalit&auml;t dieser Website eingeschr&auml;nkt sein.</p> <p>Soweit Cookies von Drittunternehmen oder zu Analysezwecken eingesetzt werden, werden wir Sie hier&uuml;ber im Rahmen dieser Datenschutzerkl&auml;rung gesondert informieren und ggf. eine Einwilligung abfragen.</p>
<h2>4. Plugins und Tools</h2>
<h3>YouTube</h3> <p>Diese Website bindet Videos der Website YouTube ein. Betreiber der Website ist die Google Ireland Limited (&bdquo;Google&ldquo;), Gordon House, Barrow Street, Dublin 4, Irland.</p> <p>Wenn Sie eine unserer Webseiten besuchen, auf denen YouTube eingebunden ist, wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben.</p> <p>Des Weiteren kann YouTube verschiedene Cookies auf Ihrem Endger&auml;t speichern. Mit Hilfe dieser Cookies kann YouTube Informationen &uuml;ber Besucher dieser Website erhalten. Diese Informationen werden u. a. verwendet, um Videostatistiken zu erfassen, die Anwenderfreundlichkeit zu verbessern und Betrugsversuchen vorzubeugen. Die Cookies verbleiben auf Ihrem Endger&auml;t, bis Sie sie l&ouml;schen.</p> <p>Wenn Sie in Ihrem YouTube-Account eingeloggt sind, erm&ouml;glichen Sie YouTube, Ihr Surfverhalten direkt Ihrem pers&ouml;nlichen Profil zuzuordnen. Dies k&ouml;nnen Sie verhindern, indem Sie sich aus Ihrem YouTube-Account ausloggen.</p> <p>Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p> <p>Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerkl&auml;rung von YouTube unter: <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=de</a>.</p>
<p>Quelle: <a href="https://www.e-recht24.de">eRecht24</a></p>
























	</div>

	<footer class="footer">
		<span class="footer--info">&copy; <?php echo date('Y'); ?></span>
		<a class="footer--info" href="https://trashnet.de/youloop/">Zurück zu youloop</a>
		<a class="footer--info" href="https://timohausmann.de/impressum/" target="_blank">Impressum</a>
	</footer>

	<?php if( $config['devmode'] ) { ?>

	<script src='assets/js/libs/jquery-1.10.2.min.js'></script>
	<script src='assets/js/app/main.js'></script>
	<script src='assets/js/app/form.js'></script>
	<script src='assets/js/app/videoinfo.js'></script>
	<script src='assets/js/app/player.js'></script>
	<script src='assets/js/app/counter.js'></script>
	<script src='assets/js/app/list.js'></script>
	<script src='assets/js/app/load.js'></script>

	<?php } else { ?>
	<script src='assets/js/script.min.js?v=<?php echo $config['timestamp']; ?>'></script>
	<?php } ?>
	
</body>
</html>