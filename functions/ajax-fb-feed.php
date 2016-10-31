<?php

add_action( 'wp_ajax_fb_feed', 'smamo_fb_feed' );
add_action( 'wp_ajax_nopriv_fb_feed', 'smamo_fb_feed' );


function smamo_fb_feed(){

    $switch = false; // sæt til true for at hente ny data hver gang (test mode).

    $response = array();

    $news = get_transient('smamo_fb_feed');
    $from_fb = false;

    if(!$news || $switch){
        require get_template_directory() . '/facebook/facebook.php';

        $fb = new Facebook(array(
          'appId'  => get_theme_mod('smamo_fb_app_id'),
          'secret' => get_theme_mod('smamo_fb_app_secret'),
        ));

        $news = $fb->api(get_theme_mod('smamo_fb_api_base') . '/feed/?fields=id,link,created_time,full_picture,description,status_type,type,caption,message,permalink_url&limit=20');
        set_transient('smamo_fb_feed', $news, 60 * 30);
        $from_fb = true;
    }

    $response['transient'] = $news;
    $response['from_fb'] = $from_fb;

    wp_die(json_encode($response));
}
