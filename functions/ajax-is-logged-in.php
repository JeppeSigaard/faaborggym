<?php 
add_action( 'wp_ajax_get-user', 'smamo_user_check' );
add_action( 'wp_ajax_nopriv_get-user', 'smamo_user_check' );

function smamo_user_check(){
    $response = array();
    
    if(!is_user_logged_in()){
        $response['login'] = false;
        wp_die(json_encode($response));
    }
    
    $user = wp_get_current_user();
    $response['login'] = array(
        'name' => $user->user_login,
        'ID' => $user->ID,
    );
    
    wp_die(json_encode($response));
}