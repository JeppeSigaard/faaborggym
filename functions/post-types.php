<?php 

add_action( 'init', 'smamo_add_post_types' );
function smamo_add_post_types() {

    
    //require 'post-types/elev.php';
    require 'post-types/medarbejder.php';
    require 'post-types/nyheder.php';
    require 'post-types/tema.php';
    // require 'post-types/status.php';
    require 'post-types/fag.php';
    require 'post-types/skrivemetro.php';
    require 'post-types/kalender.php';
    
    
	
}

// Gem billede som thumbnnail, når post typen medarbejder opdateres
function smamo_sync_thumb($post_id){
    $img_id = get_post_meta($post_id, 'img',true);
    if(isset($img_id)){
        set_post_thumbnail($post_id, $img_id);
    }
}
add_action('save_post','smamo_sync_thumb');


?>
