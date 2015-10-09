<?php

// vi skal ikke bruger header, men WP's funktionsbibliotek
define('WP_USE_THEMES', false); 

// Vores retur encodes til json, så det er nemt at bruge i javascript.
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-Type: application/json');

// Hent wp-load, så vi får mulighed for at bruge wordpress' funktionsarkiv
require '../../../../../wp-load.php';


// Klargør response array til senere json_encode();
$response = array();

$tag = wp_strip_all_tags($_POST['tag']);

require_once 'instagram.class.php';
use MetzWeb\Instagram\Instagram;

$instagram = new Instagram(array(
    'apiKey'      => '122901c27b0d4313bbc5c7053250ebe4',
    'apiSecret'   => '34b46c39caf44729a79c332f79f719f5',
    'apiCallback' => 'http://smamo.dk/rd'
));

$insta_obj = $instagram->getTagMedia($tag,16);



$i = 0;
foreach($insta_obj->data as $instance){ $i++;

    /* Vis med billede eller større */
    // Med billede

    $image_url = $instance->images->standard_resolution->url; if ($image_url){

        $response[$i] = $image_url;
    }
}


echo json_encode($response);