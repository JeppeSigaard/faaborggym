<?php

// indsend posts. Fil der håndterer alle mulige kald asynkront til oprettelse af nye posts. 

// FILEN ER TEMALØS
define('WP_USE_THEMES', false);

// Vores retur encodes til json, så det er nemt at bruge i javascript.
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-Type: application/json');

// Hent wp-load, så vi får mulighed for at bruge wordpress' funktionsarkiv
require '../../../../wp-load.php';

// Sikkerhed: Sammenligning af tilfældig 20-tegns kode, 
// oprettet ved pageload og sendt via post og session
// på den måde er vi sikre på at post request kommer fra vores side
// BEMÆRK: For at bruge dette script, sørg da for at indstille en nonce i både session og inkluder i POST kald.
// Det kan være hvad som  helst, så længe $_POST['nonce'] og $_SESSION['smamo_nonce'] er ens.
// For eksempel en tilfældig 20 tegns værdi : 
/* <?php $nonce = substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, 20); ?> */

/*
$smamo_nonce = $_SESSION['smamo_nonce'];            // session
$sent_nonce = wp_strip_all_tags($_POST['nonce']);   // post (uden tags, kun tegn)

// Hvis nonce ikke er ens, opretter vi en fejlmeddelelse.
if(!isset($smamo_nonce) || !isset($sent_nonce) || $sent_nonce !== $smamo_nonce){
    
    $response['error'] = 'fejl i nonce';
    echo json_encode($response);
    exit;
}
*/

/* FLYT POST TIL PAPIRKURV */
$post_id = wp_strip_all_tags($_POST['id']);

if(isset($_POST['type']) && wp_strip_all_tags($_POST['type']) == 'tema-post'){
    $response['delete-extra'] = 'tema-post';
    $theme = get_post_meta($post_id,'theme',true);
    $response['href'] = get_permalink( $theme, false );
}


$trash = wp_trash_post($post_id);
if (!$trash){
    
    $response['error'] = 'Kunne ikke slettes';

}
else {
    
    $response['succes'] = 'Flyttet til papirkurv';

}

echo json_encode($response);