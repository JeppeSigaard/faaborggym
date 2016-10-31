<?php
////////////////////////////////////////////////////////////////////////////////
/* - BILLEDFILTER                                                           - */
/* - Hent billede fra $_POST, se om der findes en filtreret version         - */
/* - Hvis der gør, returner url til fil, hvis ikke, opret og returner url   - */
////////////////////////////////////////////////////////////////////////////////

// vi skal ikke bruger header, men WP's funktionsbibliotek
define('WP_USE_THEMES', false); 

// Vores retur encodes til json, så det er nemt at bruge i javascript.
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-Type: application/json');

// Hent wp-load, så vi får mulighed for at bruge wordpress' funktionsarkiv
require '../../../../wp-load.php';

// Forbered svar
$response = array();

// Kræver ImageWorkshop (Tredjepartsplugin, baseret på GD, mest til hent, send, positioner, størrelser, den slags)
use PHPImageWorkshop\ImageWorkshop;
require_once('../PHPImageWorkshop/ImageWorkshop.php');


// Masser af logik om filstier mv. 
// Hvis du kigger for længe på det, brænder dine øjne ud af hovedet, så pas på!
// Vi skal dybest set bare bruge filens navn og dens placering og den slags.
// Vi skal kunne skifte mellem basedir og baseurl, fordi det er vigtigt.
// huskeregel: "baseurl" er en sti på internettet, "basedir" er en sti lokalt på serveren
// Dvs. "baseurl til javascript", "basedir" til PHP
/* SWEET HEAVENS, HERE GOES */
$upload_dir = wp_upload_dir();
$imgPath = wp_strip_all_tags($_POST['img']);
$file = explode('?', basename($imgPath));
$file = $file[0];
$imgPath = str_replace($upload_dir['baseurl'], $upload_dir['basedir'],$imgPath);
if(file_exists($upload_dir['basedir'].'/filtered/'.$file)){
    
    // HVIS VI ALLEREDE HAR FILTRERET BILLEDET:
    // SEND STIEN RETUR
    $response['img'] = $upload_dir['baseurl'].'/filtered/'.$file;
    $response['exist'] = true;
}

else{
    
    
    /* OPRET BILLEDE FRA FIL */
    $image = ImageWorkshop::initFromPath($imgPath);
    
    /* KLON, FILTRER, LÆG OVENPÅ */
    $gray = clone $image;
    $gray->applyFilter(IMG_FILTER_CONTRAST, -35, null, null, null, true); // Kontrast
    $gray->applyFilter(IMG_FILTER_GRAYSCALE);                             // Gråtone
    $gray->applyFilter(IMG_FILTER_COLORIZE,0,43,127,80);                  // Kolorisering, cirka blålig
    $gray->opacity(40);                                                   // Gennemsigtighed
    $image->addLayerOnTop($gray, 0, 0, "LT");                             // Læg ovenpå original

    
    /* TILFØJ RIDSER */
    // Først skal vi vælge en ridse, baseret på billedets størrelse
    $imageWidth = $image->getWidth();
    $gunk = 'noise-4.png';
    if ($imageWidth > 800){$gunk = 'noise-1.png';}
    if ($imageWidth > 600){$gunk = 'noise-3.png';}
    if ($imageWidth > 400){$gunk = 'noise-2.png';}
    $noise = ImageWorkshop::initFromPath($upload_dir['basedir'].'/filtered/colors/'.$gunk);
    
    // Så bestemmer vi tilfældigt hvor ridsen placeres
    $filterpos = array('LT','RT','LB','RB');
    $pos = $filterpos[array_rand($filterpos)];
    
    // Og lægger ovenpå
    $image->addLayerOnTop($noise, 0, 0, $pos);
    
    /* GEM BILLEDE, TILFØJ STI TIL RESPONSE */
    $image->save($upload_dir['basedir'].'/filtered/', $file, true, null, 100);
    $response['img'] = $upload_dir['baseurl'].'/filtered/'.$file;
    $response['exist'] = false;
}

echo json_encode($response);


?>
