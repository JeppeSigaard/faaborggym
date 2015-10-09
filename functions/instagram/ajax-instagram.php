<?php 

add_action( 'wp_ajax_fetch-instagram', 'smamo_instagram' );
add_action( 'wp_ajax_nopriv_fetch-instagram', 'smamo_instagram' );

function smamo_instagram(){
    
    // Klargør svar
    $response = array();
    
    $num = (isset($_POST['num'])) ? 4 * wp_strip_all_tags($_POST['num']) : 4;
    
    // vi skal bruge et hashtag, ellers die();
    if(!isset($_POST['hash'])){
        $response['code'] = '400';
        $response['error'] = 'No hashtag received';
        wp_die(json_encode($response));
    }
    
    // Indstil $tag
    $tag = wp_strip_all_tags($_POST['hash']);
    
    // Inkluder instagram class
    require get_template_directory().'/functions/instagram/instagram.class.php';

    // Opret ny instance
    $instagram = new Instagram(array(
        'apiKey'      => 'dd36cc7a7be445c8a00d9f383e49f8c8',
        'apiSecret'   => 'e750735ffba74f8a8ed753a33c7351da',
        'apiCallback' => 'http://faaborg-gym.dk'
    ));
    
    $response['images'] = array();
    
    $inst_obj = $instagram->getTagMedia($tag,$num);
    $next_page = $instagram->pagination($inst_obj);
    $response['next'] = $next_page;
    foreach($inst_obj->data as $key => $val){
        
        $response['images'][] = $val;    
        
    }
    
    
    wp_die(json_encode($response));
}
