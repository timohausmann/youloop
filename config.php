<?php

//read build.json
$string = file_get_contents("build.json");
$config = json_decode($string, true);

//enviornment
$config['devmode'] = false;